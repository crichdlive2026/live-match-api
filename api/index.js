module.exports = async function(req, res) {
  // CORS Headers (ताकि वेबसाइट इसे पढ़ सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // लिंक बिल्कुल एक ही लाइन में होना चाहिए
  const liveMatchLink = "https://dishmt.slivcdn.com/hls/live/2020591/TEN3HD/hdntl=exp=1784269824~acl=%2f*~id=569eecec-a4fc-49e6-b571-8b57995a2196~data=hdntl~hmac=1a48f391de42c32afc9bdc1f42d7da1ea3849b181d048accb56a1f3db7641e2c/master_3500.m3u8";
  // रिस्पॉन्स भेजना
  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
