module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  // यहाँ हमने iframe के साथ sandbox और referrerpolicy जोड़ दिया है जो रिस्ट्रिक्शन को हटाने में मदद करता है
  const liveContent = `<div style="position:relative;padding-bottom:56.25%;overflow:hidden;height:0;max-width:100%;background:#000;"><iframe src="https://iframe.dacast.com/live/2516a74e-99eb-cec9-af67-fab36b1da465/2ce77f5a-8861-4c91-b6ee-f95f50d13a3a" width="100%" height="100%" frameborder="0" scrolling="no" allow="autoplay;encrypted-media;fullscreen" allowfullscreen webkitallowfullscreen mozallowfullscreen style="position:absolute;top:0;left:0;" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;

  res.status(200).json({ 
      success: true, 
      type: 'iframe',
      data: liveContent 
  });
};
