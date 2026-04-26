const express = require("express");
const router = express.Router();
const predictNext = require("../services/predict");

router.get("/:user_id", async (req, res) => {
  const data = await predictNext(req.params.user_id);
  res.json(data);
});

module.exports = router;