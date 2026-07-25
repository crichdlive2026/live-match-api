module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // इस लाइन के अंदर अपना नया m3u8 लिंक पेस्ट करें
  const liveMatchLink = "https://bpl24middleeast.akamaized.net/hls/live/2109311/j15klM//level_0.m3u8";

  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
