module.exports = async function(req, res) {
  // CORS Headers (ताकि वेबसाइट इसे एक्सेस कर सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  // यहाँ अपना नया .m3u8 लिंक डालें
  const liveMatchLink = "https://amg01269-amg01269c1-sportstribal-emea-5204.playouts.now.amagi.tv/ts-eu-w1-n2/playlist/amg01269-willowtvfast-willowplus-sportstribalemea/cb563819657360909dce2164d4f462ffa65928d80b6c852a6ab454876da64607d1e3b680fd358b785d9f01de6a1a0a080361cf12ce3407c3c76ad91174204213cfcac9229d86170ab5c60c2c3aab016635837209c0790a79dca93d0d8636ba304530e01b615b37c2ec5cac6852db80148b6f4adafb8c2360625f5c98435ee3b24af1aae55f438b64f4ac154bc17d58e68314c8c94db8d1d4469c418027f1129ec4a28d8745e0c0ab5c91913d19733a0b53dbe5509dcd54b7a8f5035bbd42588d9ac884d9f7df5d35873d2e346477e6cd02d41cc28224956175ce686993a842e85c8873ccd64bb3b9fbfd474f3ea5c811094dc6b2f0daab606aef2493c7984540ff5c0df02e67b0fc4c0812dee8cbeb5ee8e2069fb76caebb651639d4907f56fcd88cc2bf97439029cb88a1d66d0206540d0c8252b5892df51d9d29f880437a1c7a4da3cc019fc6c108642b0fa7904ed8162cbcd9a08acb416e99375509be2091702d58e118203ce924f29f7c4b8c25018a7c7dd850278f4ff9f77da0f695b5486bfb8e8771fe69eea7039da351fe236f0f70c69846684c4279dff9754d6129b122cae78ab027475096b4a798e75c37003512287ca8eaf57f968b80645d21c85d226f630355f120d37ad414461024aa4f82fce91573cea09e807cf5f5211d1288be0504c2a9f69452f6/110/1920x1080_5859480/index.m3u8";

  // रिस्पॉन्स भेजें
  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
