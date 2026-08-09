module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  // निर्देश: यहाँ आप या तो m3u8 लिंक डाल सकते हैं या पूरा iframe कोड।
  // सिस्टम खुद-ब-खुद पहचान लेगा कि यह क्या है।
  const liveContent = "<div style="position:relative;padding-bottom:56.25%;overflow:hidden;height:0;max-width:100%;"><iframe id="2516a74e-99eb-cec9-af67-fab36b1da465-live-2ce77f5a-8861-4c91-b6ee-f95f50d13a3a" src="https://iframe.dacast.com/live/2516a74e-99eb-cec9-af67-fab36b1da465/2ce77f5a-8861-4c91-b6ee-f95f50d13a3a" width="100%" height="100%" frameborder="0" scrolling="no" allow="autoplay;encrypted-media" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen style="position:absolute;top:0;left:0;"></iframe></div>";

  // ऑटो-डिटेक्ट टाइप (अगर <iframe से शुरू हो रहा है तो iframe, वरना m3u8)
  const type = liveContent.trim().toLowerCase().startsWith('<iframe') ? 'iframe' : 'm3u8';

  res.status(200).json({ 
      success: true, 
      type: type,
      data: liveContent 
  });
};
