module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  // यहाँ सिर्फ अपना .m3u8 लिंक डालें
  const liveContent = "https://172.105.41.183:8080/live/naresh.m3u8";

  res.status(200).json({ 
      success: true, 
      type: 'm3u8',
      data: liveContent 
  });
};
