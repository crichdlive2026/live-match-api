module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  // यहाँ सिर्फ अपना .m3u8 लिंक डालें
  const liveContent = "https://cdn-cloudfront.ap-northeast-1.prod.ingest.aws-infra.dacast.com/live/2ce77f5a-8861-4c91-b6ee-f95f50d13a3a/source/index.m3u8";

  res.status(200).json({ 
      success: true, 
      type: 'm3u8',
      data: liveContent 
  });
};
