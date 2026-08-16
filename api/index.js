module.exports = async function(req, res) {
  // CORS & Anti-Cache Headers (पुराना लिंक सेव होने से रोकने के लिए)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 👇 आपका नया लाइव मैच का M3U8 लिंक 👇
  const liveContent = "https://amg01269-amg01269c1-sportstribal-emea-5204.playouts.now.amagi.tv/ts-eu-w1-n2/playlist/amg01269-willowtvfast-willowplus-sportstribalemea/cb7c3e1a7b7b6f8a9a9e3b6cd1f442aa880565835d6287606da051942397150fd0eef7c9ea18eb617e302ea33e40340d0136d41cc07c11dfa223f6147c770705c4ccf02480cd0208b4d31f4857db7f1f51ff1e67957c0f7696cb2a5aa473e72c5545b85c200663d8e649ea304bd5f14acb237cecf88f1a6039455a9c5a43e6a64ebb84993938a470b1ed4513c03f32b2d11996cd0cddd59618c71cd869f50a9d8283d3914fdfd38e62ac55ac64470f7b2acece2dc18970b9d893653cdc4229401f47efecc6ad1972d5110118ada899ee66a9109bc47cd83967f651c949d57dd33afa08eae518f7aeba8741146efd9d0d530dca8ac81c241849df4fd5e08cf47d7890f766172dab4ceb52e0bc0d9fb170a5d01c97cc43cfd43b5f50c4e0d80d88327f8ee4ad3356b478eaf6b80e62040f25118f5cedb162d722dc6ca9f4b24036b22580954fcd8ad55f7f3701d6c016f81a15acc3d0c3fe003fd86f125ea8318f00455ee10c392db57cb9b82965852245a7056fda1667d512aae879bbf78ab05d7ba2c88e02de7fffb90fe5f3008264281657e0a5620c130c35fbc652201c358349edd8cfa1500c03e7f884bef6562a1430185c43dfacb730b886d22610138e0273323a4059c15d813e91541b4003c61cdaa00c34b607272cf4ae7008093bd89be7f3eabcad65bb7bc1c0f43d5d590835c75d474a43dcb48455f8787b76755385050712ea50ba231a382e51ff18f28d60f80fd7521210c58bd10c6449/177/1920x1080_5859480/index.m3u8";

  res.status(200).send(JSON.stringify({ 
      success: true, 
      type: 'm3u8',
      data: liveContent 
  }));
};
