module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // इस लाइन के अंदर अपना नया m3u8 लिंक पेस्ट करें
  const liveMatchLink = "https://dishmt.slivcdn.com/hls/live/2011747/TEN1HD/hdntl=exp=1786220671~acl=/*~id=158e8351-3529-4a2f-8dbc-a875e210522e~data=hdntl~hmac=419cc06abe626aa97c516e738d951497f2b5ad11e1f1d952f7886072a907b0e7/master_664.m3u8?CMCD=cid%3D%2223efd562d926%22%2Cmtp%3D500%2Cot%3Dm%2Csf%3Dh%2Csid%3D%225946a663-2a95-4cdc-9e40-33598f522af8%22%2Csu&CMCD=cid%3D%2223efd562d926%22%2Cmtp%3D12500%2Cot%3Dm%2Csf%3Dh%2Csid%3D%225946a663-2a95-4cdc-9e40-33598f522af8%22";

  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
