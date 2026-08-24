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
  const liveContent = "https://tv.ashoktyar1.workers.dev/proxy/https://playyonogames.in/sliv/stream.m3u8?live=215218dc50b20e9ce79d8642721f2e2b6cf8e2f25b4033ab389a34ca296c3f26e66e0ed09e290c470f57e6018a957653412fc406fd46074355d93b2ce0d0b737a9f9efb2e4e86a1378997388d7fe77cc8a26cab3873c379a2bb322b2a649ffb7808c5dbfda0a5c38f0f697bbcf96f57224431f448f8af33ca9b3d4eb19abaed5b0367825ba8cc4bdc1728589666acfc71d181ce25c5e2c99f0e3e7026ae75e4f9b6bbd8dbfd3a2a5ca25c101073f0a0dea65bcec4e3c494101affa353d22ac71f7840e259a5efda0b06c7886edf8fc2e17556189ecd2fbc8f9fc5848785d9bf3b18149c610c734709930a501d2a725aba4e4c53f48bae0d1ebd10b1027be865050684ffec0d5c2ff508447fc8d4f18b57385c3f80a66406f06098104ae4252b3a0e1921ac81923818b5da31883bc4f84f6b05684756eb1e69eee81235bac78fdb2162d62cc1d9ad192fce8a1375606c1e557cefe196c0ec29972b1098a5df646fe602edb982c33089e5ab40e8fcc0b6a69c2f962b806bee946bf08628ca45b6a4102fa1dd0e926e4628e05a33630026a9e86ccba5ef3ba44f75ffc27e39fc120d9df83d13fb984e1eb52292767a862bf&segment=";

  res.status(200).send(JSON.stringify({ 
      success: true, 
      type: 'm3u8',
      data: liveContent 
  }));
};
