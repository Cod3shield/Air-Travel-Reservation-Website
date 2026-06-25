const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const sendEmail = require("./emailserver");

const app = express();

// =========================
// MIDDLEWARE
// =========================
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// =========================
// TEST ROUTE
// =========================
app.get("/", (req, res) => {
    res.send("Airlines Backend is running ✔");
});

// =========================
// FLIGHT SEARCH API
// =========================
app.post("/search-flights", (req, res) => {
    const { from, to, departDate } = req.body;

    const flights = [
        { airline: "Cebu Pacific", from, to, departDate, price: 3200 },
        { airline: "Philippine Airlines", from, to, departDate, price: 4500 },
        { airline: "AirAsia", from, to, departDate, price: 2800 }
    ];

    res.json({ flights });
});

// =========================
// EMAIL API (CONNECTED SA emailserver.js)
// =========================
app.post("/send-email", async (req, res) => {
    const { to, subject, text, html } = req.body;

    const result = await sendEmail({ to, subject, text, html });

    if (result.success) {
        res.json({
            success: true,
            message: "Email sent successfully",
            messageId: result.messageId
        });
    } else {
        res.status(500).json({
            success: false,
            message: "Email failed",
            error: result.error
        });
    }
});

// =========================
// START SERVER
// =========================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});