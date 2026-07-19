module.exports = async function(req, res) {
  // CORS को पूरी तरह Allow करना
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // SonyLIV / OTT प्लेटफॉर्म के लिए एकदम सही हेडर्स
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Referer': 'https://www.sonyliv.com/',
        'Origin': 'https://www.sonyliv.com/',
        'Accept': '*/*'
      }
    });

    if (!response.ok) {
      return res.status(response.status).send(`Upstream Error: ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type') || '';

    // अगर यह .m3u8 (प्लेलिस्ट) फाइल है
    if (targetUrl.includes('.m3u8') || contentType.includes('mpegurl') || contentType.includes('m3u8')) {
      const text = await response.text();
      const baseObj = new URL(targetUrl);
      const protocol = req.headers['x-forwarded-proto'] || 'https';
      const host = req.headers.host;
      
      const modifiedM3u8 = text.split('\n').map(line => {
        const trimmed = line.trim();
        // अगर लाइन खाली नहीं है और # से शुरू नहीं होती है, तो वह एक लिंक (URL) है
        if (trimmed && !trimmed.startsWith('#')) {
          try {
            const absoluteUrl = new URL(trimmed, baseObj.href).href;
            return `${protocol}://${host}/api/proxy?url=${encodeURIComponent(absoluteUrl)}`;
          } catch (e) {
            return line;
          }
        }
        return line;
      }).join('\n');

      res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
      return res.status(200).send(modifiedM3u8);
    } 
    // अगर यह वीडियो का टुकड़ा (.ts / .aac / .m4s) है
    else {
      const buffer = await response.arrayBuffer();
      if (contentType) res.setHeader('Content-Type', contentType);
      return res.status(200).send(Buffer.from(buffer));
    }
  } catch (error) {
    return res.status(500).json({ error: 'Proxy Error', details: error.message });
  }
};
