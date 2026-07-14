module.exports = async function(req, res) {
  // CORS Headers (ताकि वेबसाइट इसे पढ़ सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // लिंक बिल्कुल एक ही लाइन में होना चाहिए
  const liveMatchLink = "https://hugh.cdn.rumble.cloud/live/mu10xuf3/slot-37/zta4-vncc/chunklist.m3u8";
  // रिस्पॉन्स भेजना
  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
