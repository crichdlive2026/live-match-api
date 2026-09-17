module.exports = async function(req, res) {
  // CORS & Anti-Cache Headers (पुराना लिंक सेव होने से रोकने के लिए)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 👇 आपका नया लाइव मैच का M3U8 लिंक 👇
  const liveContent = "https://crickcast-fam.pages.dev/api/proxy?u=https://dishmt.slivcdn.com/hls/live/2020591/TEN3HD/hdntl=exp=1789722015~acl=%2f*~id=59c07001-f351-4f77-96e8-a8f463607764~data=hdntl~hmac=0456d5bf1db39368643a1e5f3c1ad5767bff7e7b82a28c075c4dc34b31bda14e/master_3500.m3u8";

  res.status(200).send(JSON.stringify({ 
      success: true, 
      type: 'm3u8',
      data: liveContent 
  }));
};
