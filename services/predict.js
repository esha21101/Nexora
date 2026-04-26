const pool = require("../config/db");

async function predictNext(user_id) {
  try {
    const result = await pool.query(
      "SELECT event_type FROM events WHERE user_id = $1 ORDER BY created_at DESC",
      [user_id]
    );

    const events = result.rows.map(e => e.event_type);

    //  No activity case
    if (events.length === 0) {
      return {
        next_action: "start",
        confidence: 0.3,
        reason: "No activity yet"
      };
    }

    //  Most recent event
    const lastEvent = events[0];

    // Count frequency of that event
    const count = events.filter(e => e === lastEvent).length;

    return {
      next_action: lastEvent,
      confidence: Math.min(0.5 + count * 0.1, 0.9),
      reason: `User often does ${lastEvent}`
    };

  } catch (err) {
    console.error("Prediction Error:", err);
    return {
      next_action: "error",
      confidence: 0,
      reason: "Something went wrong"
    };
  }
}

module.exports = predictNext;