module.exports = async function(req, res) {
  // CORS Headers (ताकि वेबसाइट इसे पढ़ सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // लिंक बिल्कुल एक ही लाइन में होना चाहिए
  const liveMatchLink = "https://absicka2qabaaaayo4go46uyjlawb.live-cf.cdn.hotstar.com/hls/live/2027118/inallow-iccwt20wc-2026/hin/1540071946/15mindvrm012c2d6c87844a4753a31057686000590430june2026/master_ap_1080_5.m3u8";
  // रिस्पॉन्स भेजना
  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
