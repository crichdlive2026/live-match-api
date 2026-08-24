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
  const liveContent = "https://in-mc-flive.fancode.com/mumbai/4248352_hindi_hls_35cc2e3af442591_1ta-di_h264/1080p.m3u8?hdntl=Expires=1787649271~_GO=Generated~acl=/mumbai/4248352_hindi_hls_35cc2e3af442591_1ta-di_h264/*~Signature=ARB3KG3coJ2zZnSNID_aqkAtkGNa3W_0lbxD8smD0HbKRGfXkt228DvMeV89DVRSNz4a7KpZHBFRmFPJkpDwk8sKwGsN";

  res.status(200).send(JSON.stringify({ 
      success: true, 
      type: 'm3u8',
      data: liveContent 
  }));
};
