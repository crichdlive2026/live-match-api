export default async function handler(req, res) {
  // CORS Headers (ताकि आपकी वेबसाइट इस डेटा को पढ़ सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // यहाँ आपको हर मैच से पहले नया m3u8 लिंक डालना होगा
  const liveMatchLink = "https://amg01269-amg01269c1-yupptv-us-5319.playouts.now.amagi.tv/playlist/amg01269-willowtvfast-willowplus-yupptvus/playlist.m3u8?ads.channel=6910&ads.content_custom_1_param=FAST&ads.user=2&hdnts=st=1782055648~exp=1782077248~acl=!*/playlist/amg01269-willowtvfast-willowplus-yupptvus/*!/payload/yupptvott_5_-1_3b6f5839-0b53-aa06-7a80-023047a6357c_US_172.203.213.84_yuppfast_2_channel_284_-1/*~data=yupptvott_5_-1_3b6f5839-0b53-aa06-7a80-023047a6357c_US_172.203.213.84_yuppfast_2_channel_284_-1~hmac=cd4f36bca95f59ef5ef0afcea2e571bbf843b7800d24e0f8c54f3790e8c4e17e&ads.network_name=yuppfast&ads.app_store_url=&ads.app_bundle=&ads.content_livestream=1&ads.content_genre=SPORTS&ads.channel_name=WillowSports&ads.language=ENG&ads.user=0";

  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
}
