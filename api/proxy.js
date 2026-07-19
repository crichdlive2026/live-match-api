module.exports = async function(req, res) {
  // CORS को पूरी तरह Allow करना
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://www.sonyliv.com/'
      }
    });

    // अगर फाइल m3u8 (प्लेलिस्ट) है
    if (targetUrl.includes('.m3u8') || response.headers.get('content-type')?.includes('mpegurl')) {
      const text = await response.text();
      
      // बेस URL निकालने का सबसे सही तरीका (ताकि आगे के वीडियो लिंक टूटे नहीं)
      const urlObj = new URL(targetUrl);
      const baseUrl = targetUrl.substring(0, targetUrl.lastIndexOf('/') + 1);
      
      const modifiedM3u8 = text.split('\n').map(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          let fullUrl;
          if (trimmed.startsWith('http')) {
            fullUrl = trimmed;
          } else if (trimmed.startsWith('/')) {
            fullUrl = urlObj.origin + trimmed;
          } else {
            fullUrl = baseUrl + trimmed;
          }
          // हर टुकड़े को भी Vercel Proxy के रास्ते भेजना
          return `https://${req.headers.host}/api/proxy?url=${encodeURIComponent(fullUrl)}`;
        }
        return line;
      }).join('\n');

      res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
      return res.status(200).send(modifiedM3u8);
    } 
    // अगर वीडियो का टुकड़ा (.ts फाइल) है
    else {
      const buffer = await response.arrayBuffer();
      res.setHeader('Content-Type', 'video/MP2T');
      return res.status(200).send(Buffer.from(buffer));
    }
  } catch (error) {
    return res.status(500).send('Proxy Error');
  }
};
