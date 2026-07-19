module.exports = async function(req, res) {
  // CORS Headers (ताकि वेबसाइट इसे पढ़ सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // आपका नया ottplus वाला लिंक यहाँ अपडेट कर दिया गया है
  const liveMatchLink = "https://stream.ottplus.live/live/ten_1_hd_abr/live/ten_1_hd_720/chunks.m3u8";

  // रिस्पॉन्स भेजना
  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
