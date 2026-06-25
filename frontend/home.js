/* ===============================
   TRIP TYPE UI LOGIC
   Controls Return / One-way / Multi-city
================================= */

const returnTrip = document.getElementById("returnTrip");
const oneWay = document.getElementById("oneWay");
const multiCity = document.getElementById("multiCity");

const returnDate = document.getElementById("returnDate");
const multiCitySection = document.getElementById("multiCitySection");

// ONE WAY
oneWay.addEventListener("change", () => {
  returnDate.style.display = "none";
});

// RETURN (default)
returnTrip.addEventListener("change", () => {
  returnDate.style.display = "block";
});

// MULTI CITY
multiCity.addEventListener("change", () => {
  multiCitySection.style.display = "block";
  returnDate.style.display = "none";
});

// If user switches away from multi-city
returnTrip.addEventListener("change", () => {
  multiCitySection.style.display = "none";
});

oneWay.addEventListener("change", () => {
  multiCitySection.style.display = "none";
});

/* ===============================
   END OF TRIP TYPE LOGIC
================================= */