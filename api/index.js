module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // इस लाइन के अंदर अपना नया m3u8 लिंक पेस्ट करें
  const liveMatchLink = "https://stream.ottplus.live/live/ten_1_hd_abr/live/ten_1_hd_720/chunks.m3u8";

  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
