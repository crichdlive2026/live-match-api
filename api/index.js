export default async function handler(req, res) {
  // CORS Headers (ताकि आपकी वेबसाइट इस डेटा को पढ़ सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // यहाँ आपको हर मैच से पहले नया m3u8 लिंक डालना होगा
  const liveMatchLink = "https://crickcast-fam.pages.dev/api/proxy?u=https%3A%2F%2Fin-mc-fblive.fancode.com%2Fmumbai%2F143399_english_hls_b76266f66a18138_1ta-di_h264%2F720p.m3u8
";

  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
}
