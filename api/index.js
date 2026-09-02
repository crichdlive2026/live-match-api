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
  const liveContent = "https://crickcast-fam.pages.dev/api/proxy?u=https%3A%2F%2Fdishmt.slivcdn.com%2Fhls%2Flive%2F2020591%2FTEN3HD%2Fhdntl%3Dexp%3D1788417015~acl%3D%252f*~id%3Dcfd1f128-476e-4d2c-ba01-05e42fa4b546~data%3Dhdntl~hmac%3Dda56d767be5c55d10953373e9266dd2c12752c3e8cc5a1b6f03b7e646be415dd%2Fmaster_3500.m3u8";

  res.status(200).send(JSON.stringify({ 
      success: true, 
      type: 'm3u8',
      data: liveContent 
  }));
};
