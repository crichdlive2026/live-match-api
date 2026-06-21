export default async function handler(req, res) {
  // CORS Headers (ताकि आपकी वेबसाइट इस डेटा को पढ़ सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // यहाँ आपको हर मैच से पहले नया m3u8 लिंक डालना होगा
  const liveMatchLink = "https://hesads.akamaized.net/ns/1780825385600/50a88b5e4cf89c2d388dc64696040f0f/master.m3u8";

  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
}
