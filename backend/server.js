const express = require("express");
const cors = require("cors");
const path = require("path");   // 👈 ADD THIS

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// 👇 ADD THIS LINE (IMPORTANT)
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

    // MOCK DATA (temporary)
    const flights = [
        {
            airline: "Cebu Pacific",
            from,
            to,
            departDate,
            price: 3200
        },
        {
            airline: "Philippine Airlines",
            from,
            to,
            departDate,
            price: 4500
        },
        {
            airline: "AirAsia",
            from,
            to,
            departDate,
            price: 2800
        }
    ];

    res.json({ flights });
});

// =========================
// START SERVER
// =========================
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});