module.exports = async function(req, res) {
  // CORS Headers (ताकि वेबसाइट इसे पढ़ सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // लिंक बिल्कुल एक ही लाइन में होना चाहिए
  const liveMatchLink = "https://dishmt.slivcdn.com/hls/live/2020591-b/TEN3HD/hdntl=exp=1784105496~acl=%2f*~id=d05a3315f69543e78a4f1d80b9ca0f1d-1784018925346~data=hdntl~hmac=a2a11bd20b19522c244f33bbcf3080e2aaf8fd8fa6a9a6aef5472d8c0cc5f265/master_3500.m3u8";
  // रिस्पॉन्स भेजना
  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
