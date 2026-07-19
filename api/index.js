module.exports = async function(req, res) {
  // CORS Headers (ताकि वेबसाइट इसे पढ़ सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // लिंक बिल्कुल एक ही लाइन में होना चाहिए
  const liveMatchLink = "https://dishmt.slivcdn.com/hls/live/2020591/TEN3HD/hdntl=exp=1784529012~acl=/*~id=1fee2002-e826-4dff-a118-acac0deb270a~data=hdntl~hmac=25fcc4cbee06600f79c868d9220d5b9cc9557d83c7281408547f7c5dfaff676b/master_3500.m3u8";
  // रिस्पॉन्स भेजना
  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
