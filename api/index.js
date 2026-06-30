module.exports = async function(req, res) {
  // CORS Headers (ताकि वेबसाइट इसे पढ़ सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // लिंक बिल्कुल एक ही लाइन में होना चाहिए
  const liveMatchLink = "https://crickcast-fam.pages.dev/api/proxy?u=https%3A%2F%2Fin-mc-fblive.fancode.com%2Fmumbai%2F143399_english_hls_b76266f66a18138_1ta-di_h264%2F720p.m3u8";

  // रिस्पॉन्स भेजना
  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
