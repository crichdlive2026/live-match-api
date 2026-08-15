module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // आपका बिल्कुल सही सुरक्षित M3U8 लिंक
  const liveContent = "https://s3.itcnbd.live/server-4/stream/aHR0cDovLzE3Mi4xOS4xNy4yMDI6ODA5MC9obHMvU29ueVRlbjJoZC5tM3U4.m3u8";

  res.status(200).send(JSON.stringify({ 
      success: true, 
      type: 'm3u8',
      data: liveContent 
  }));
};
