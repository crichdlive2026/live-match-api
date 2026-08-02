module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // इस लाइन के अंदर अपना नया m3u8 लिंक पेस्ट करें
  const liveMatchLink = "https://cdn-cloudfront.ap-northeast-1.prod.ingest.aws-infra.dacast.com/live/4ad08e07-69e8-40ff-bacb-9e638e0d6a6f/source/index.m3u8";

  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
