const routes = require('express').Router();

routes.post('/session', (req, res) => {
  return res.status(200).json({ result: "ok" });
});

module.exports = routes;
