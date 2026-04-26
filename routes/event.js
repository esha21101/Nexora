const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.post("/", async (req, res) => {
  const { user_id, event_type, metadata } = req.body;

  try {
    await pool.query(
      "INSERT INTO events (user_id, event_type, metadata) VALUES ($1, $2, $3)",
      [user_id, event_type, metadata]
    );

    res.json({ message: "Event stored successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});
router.get("/:user_id", async (req, res) => {
  const user_id = req.params.user_id;

  try {
    const result = await pool.query(
      "SELECT * FROM events WHERE user_id = $1 ORDER BY created_at DESC",
      [user_id]
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching events" });
  }
});

module.exports = router;