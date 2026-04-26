# Nexora 🚀

Nexora is an intent-based backend system that tracks user behavior and predicts their next action using event data.

---

## 🔥 Features

* 📊 Event Tracking API (store user actions)
* 📥 Fetch User Activity
* 🧠 Prediction Engine (analyzes behavior patterns)
* ⚡ Real-time backend system using Node.js & PostgreSQL

---

## 🛠 Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Thunder Client (API testing)

---

## 📡 API Endpoints

### 1. Store Event

POST /event

```json
{
  "user_id": 1,
  "event_type": "search_job",
  "metadata": {
    "query": "backend developer"
  }
}
```

---

### 2. Get Events

GET /event/:user_id

Example:
`/event/1` → returns all events of user 1

---

### 3. Predict Next Action

GET /predict/:user_id

Example:
`/predict/1` → predicts what user 1 will do next

```json
{
  "next_action": "search_job",
  "confidence": 0.7,
  "reason": "User often does search_job"
}
```

---

## 🧠 Concept

This system simulates how real-world platforms analyze user behavior to provide intelligent recommendations.

---

## 🚀 How to Run

```bash
npm install
npx nodemon app.js
```

---

## 📌 Future Improvements

* Better prediction algorithms
* Real-time updates
* User authentication
* Frontend dashboard

---

## 👨‍💻 Author

Esha Markam
