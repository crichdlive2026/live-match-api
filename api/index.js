module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  // यहाँ बैकसिक्स (``) का उपयोग किया गया है ताकि कोट्स की कोई समस्या न हो
  const liveContent = `<div style="position:relative;padding-bottom:56.25%;overflow:hidden;height:0;max-width:100%;"><iframe id="2516a74e-99eb-cec9-af67-fab36b1da465-live-2ce77f5a-8861-4c91-b6ee-f95f50d13a3a" src="https://iframe.dacast.com/live/2516a74e-99eb-cec9-af67-fab36b1da465/2ce77f5a-8861-4c91-b6ee-f95f50d13a3a" width="100%" height="100%" frameborder="0" scrolling="no" allow="autoplay;encrypted-media" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen style="position:absolute;top:0;left:0;"></iframe></div>`;

  // यह चेक करेगा कि कोड के अंदर iframe है या नहीं
  const type = liveContent.toLowerCase().includes('iframe') ? 'iframe' : 'm3u8';

  res.status(200).json({ 
      success: true, 
      type: type,
      data: liveContent 
  });
};
