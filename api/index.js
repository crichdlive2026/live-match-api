module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // आपका बिल्कुल सही सुरक्षित M3U8 लिंक
  const liveContent = "https://amg01269-amg01269c1-sportstribal-emea-5204.playouts.now.amagi.tv/ts-eu-w1-n2/playlist/amg01269-willowtvfast-willowplus-sportstribalemea/cb573d1b7c6c618684c83d6fcef94182847b3dcb0e6c886470af4a9765d97800dbe8ae84ae5b910c4c9e1fc061017d360439cd1dd56c49c1da63b820743c4b21fdcde00080dd0d0cb1df11292ca36265299a7369cc350f7bd2ec5a2f803ebe764c53cb017c593f88f258a8774cc59e0a957f39e8fc8b307b24455a9c5a43e6a64cb7f7e20840896ba7b30141917d16fa83439fd501b3d1dc538311d324a414cc90f58fdb16d7e4d659966f74eb24224054b7c21cbac759bfdbe80653fe501b36d5d17bc1e99a6f2f8f463933904c6b9217963bd78d20936135ba04da3cecd42147d86b93c634c999bed3434f3ea5ca5a2b4fca83f5daab6567e934b8ca41bc02f54e3977ff4b984da156e51f11e70b27a48979b7a52a84fb421234cb90519aa77fe285bfa045862cc6cbf5d7680c1e234c358f53a6957ac869f34ce89f436f0c16049a935b92d2821e28341bcfc07fc40317bcec8e81f4072f8535480da6338f1b4d47e4004150a96df5933769c9010f863e32b218168850f3b529baf68eb4486bfb8e8912bf5ceeb30bc0ff4dfc3e6b1751e58059352f7b74deea691a2339921596b4e4d5375850a2a7b7bdaa351f0836105e09f192c4788981cd2c5d5b81642f6e701f008546b14dda13421421d914b1fe5e94e4d7dbaa55c19b727b41c24a1250d9d8b738db9b57b5/27/1920x1080_5859480/index.m3u8";

  res.status(200).send(JSON.stringify({ 
      success: true, 
      type: 'm3u8',
      data: liveContent 
  }));
};
