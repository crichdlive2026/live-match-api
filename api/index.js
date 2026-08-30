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
  const liveContent = "https://dishmt.slivcdn.com/hls/live/2020592/TEN3SD/hdntl=exp=1788163252~acl=/*~id=a9c4449d-9503-4312-9096-bac90ec42129~data=hdntl~hmac=e047ff5ef2fd349cde2a7acc0f928304a48a878f96c35f4d360059525349cfb4/master_412.m3u8?CMCD=cid%3D%22d273fef0cec7%22%2Cmtp%3D500%2Cot%3Dm%2Csf%3Dh%2Csid%3D%226c9a775a-53a4-4b9d-bb14-d963680f28f9%22%2Csu&CMCD=cid%3D%22d273fef0cec7%22%2Cmtp%3D7000%2Cot%3Dm%2Csf%3Dh%2Csid%3D%226c9a775a-53a4-4b9d-bb14-d963680f28f9%22";

  res.status(200).send(JSON.stringify({ 
      success: true, 
      type: 'm3u8',
      data: liveContent 
  }));
};
