module.exports = async function(req, res) {
  // CORS Headers (ताकि वेबसाइट इसे पढ़ सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // लिंक बिल्कुल एक ही लाइन में होना चाहिए
  const liveMatchLink = "https://203-137-131-7.twitcasting.tv/tc.livehls/v1/streams/838127035/hls/1008.96/media.m3u8?useQSS=1";
  // रिस्पॉन्स भेजना
  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
