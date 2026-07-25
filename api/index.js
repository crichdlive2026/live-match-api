module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // इस लाइन के अंदर अपना नया m3u8 लिंक पेस्ट करें
  const liveMatchLink = "https://amg01269-amg01269c1-sportstribal-emea-5204.playouts.now.amagi.tv/ts-eu-w1-n2/playlist/amg01269-willowtvfast-willowplus-sportstribalemea/cb5138196573609092c32162d8d31fdd844c3bdd0b61cb3071aa448f1298410ddafbb2d3932fff695c811fd5716d340f5b63c009967a05dece0be81168297021c8e3eb3fc69c110eacdb093a32c8027a2c8212058c7c087799ce1f0b8e32fc39261bfa0663537ddce859b3764cc59e0a9b1c78ddfc9f3826785958815e5bf7b408f1f9e70f138c6ebcb9144bc33244e6d443d48515e9d6c95b9c44d570f41d99c1f3828172c4bcae5b6fd8cf4e6b710c3ffca97797c05cc4b5f00b18af01e3c283379cc7b2ed473dfc2a2bc070d2b9d84ef01fc58831802242d3f14463f652bd49d06290e45db4ed99da4c4638a88e330b41f7b5f0daad6661ff0e9ed371eef0b9621242583e58f9f21bcd40a6dd8178a5d01c97f9088ab8621c2cc1ab88faf7bdaee0aa844690248592bac87d0a796a0a06894ab1da43ef698c28e69e48616b444afbce0e849e8f0a79226e969052d1241ebbf08297905b689d2e480ca828f2733141e0782c70ec26fcda1b698a2d05cc751ef34a3a8d47b3e979a5e98bab5675e59ef443f96efdbc4587a555e73e6a2b77d9981b564b4872c7fd265c600ba46bd0939bb139597aaf9dabd9cf5c3f0b3c6d222f83f0e87d9ece8d692a1fcf572977675270b201c562cb0f590a4d9847814c68d851f5924b6d989e9374ca7ca4266880c7741152fd/192/1920x1080_5859480/index.m3u8";

  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
