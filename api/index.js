export default async function handler(req, res) {
  // CORS Headers (ताकि आपकी वेबसाइट इस डेटा को पढ़ सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // यहाँ आपको हर मैच से पहले नया m3u8 लिंक डालना होगा
  const liveMatchLink = "https://in-mc-flive.fancode.com/mumbai/143418_english_hls_ce2bd0636688281_1ta-di_h264/index.m3u8";

  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
}
