const express = require("express");
const app = express();
const pool = require("./config/db");

app.use(express.json());

const eventRoutes = require("./routes/event");
app.use("/event", eventRoutes);

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("DB Error", err);
  } else {
    console.log("DB Connected:", res.rows[0]);
  }
});

app.get("/", (req, res) => {
  res.send("Nexora API is running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});