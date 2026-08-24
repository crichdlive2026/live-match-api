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
  const liveContent = "https://crickcast-fam.pages.dev/api/proxy?u=https://dishmt.slivcdn.com/hls/live/2020591/TEN3HD/hdntl=exp=1787596215~acl=%2f*~id=4d310c84-57ca-4375-af26-94c49782ec56~data=hdntl~hmac=01da89b62a270cb69c7cbb1d729ba34978e6234533abe89f30ab0da9099af086/master_3500.m3u8";

  res.status(200).send(JSON.stringify({ 
      success: true, 
      type: 'm3u8',
      data: liveContent 
  }));
};
