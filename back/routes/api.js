var exprees = require('express');
var router = exprees.Router();

router.get("/ping", function (req, res) {
  res.json({ ok: true, message: "pong" });
});

module.exports = router;