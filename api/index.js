export default async function handler(req, res) {
  // CORS Headers (ताकि आपकी वेबसाइट इस डेटा को पढ़ सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // यहाँ आपको हर मैच से पहले नया m3u8 लिंक डालना होगा
  const liveMatchLink = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
}
