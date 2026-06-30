module.exports = async function(req, res) {
  // CORS Headers (ताकि वेबसाइट इसे पढ़ सके)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  // लिंक बिल्कुल एक ही लाइन में होना चाहिए
  const liveMatchLink = "https://absicka2qabaaaayo4go46uyjlawb.live-cf.cdn.hotstar.com/hls/live/2027118/inallow-iccwt20wc-2026/hin/1540071946/15mindvrm012c2d6c87844a4753a31057686000590430june2026/master_ap.m3u8?a=ns&ttl=86400&hdnea=exp=1782826077~acl=/hls/live/2027118/inallow-iccwt20wc-2026/hin/1540071946/15mindvrm012c2d6c87844a4753a31057686000590430june2026/master_ap~ttl=1800~type=paid~data=ip=B0FojG9oUzRSVY91uBezfOVEH3LI2ThmuSpkK5CEcT7zn8TYaqGsmdr-userid=Po0bhzLhEydwaoL8gRt7DOOcdioZbd5bGJVhR3zsJzEA-did=6hBAyhFoVTJQhqznsqzl89HSoc9jE9BUEh9zgsz6CKiE-cc=in-de=2-pl=web-ap=26.06.18.0-ut=paid-~hmac=7a8d4235865dc508c3b3f3caa9c680a533f27a303854270196ea27fbad227944&Expires=1782826077&Signature=dM-M5kCGZYUwX~6jfBE0wdqRSdTkOlPU~U-~otVL5qmBDIPMM-kRqReZSphCPYtUBuINSxsBb1z~0VZ47WX~kr7~hpv9EYAymHr4BDrJIPpPKWcbCseiBARcfRswiBlNOnsT63st0bAOMmiu~QmpvVG923PTTVkQtxyVquqhLH-4xVWZpK-ioX1cuhzAborqC2euKs1rkW0~q03pkrvJGof81s1Qt78bwsCmqgAlXp0fa7Udv71tzNx5yOg4QPNfhWe4CnEe9JTY7oRW5ARkLf8in-jf7lhM0WDH57cg~9V-KB8r9NKoLMSlWUMpAmImjNu42WBMpi--dMQUNbS-ig__&Key-Pair-Id=APKAJC3ILMJXG4AINKJA";
  // रिस्पॉन्स भेजना
  res.status(200).json({ 
      success: true, 
      live_link: liveMatchLink 
  });
};
