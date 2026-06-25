// ===============================
// MODAL ELEMENTS
// ===============================

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("closeBtn");


// ===============================
// ALL DESCRIPTIONS
// NAVBAR + FOOTER
// ===============================

const descriptions = {

    // ===============================
    // NAVBAR ADDED
    // ===============================

    Explore: {
        title: "Explore",
        text: "Embark on a journey of discovery and uncover amazing destinations from around the world. Explore inspiring travel guides, hidden gems, cultural experiences, and carefully recommended places designed to help you create unforgettable adventures. Whether you are planning your next getaway or simply looking for travel inspiration, this section brings you closer to the places you've always dreamed of visiting."
    },

    Manage: {
        title: "Manage",
        text: "Take full control of your travel experience with convenient tools designed to make every step of your journey smoother and easier. Manage your bookings, update passenger information, review flight schedules, and stay organized with important travel details all in one place. Enjoy a seamless and stress-free way of preparing for your next adventure."
    },

    Attention: {
        title: "Attention",
        text: "Stay informed and updated with the latest travel announcements, important advisories, and service notifications. This section provides essential information to help you make better travel decisions, stay prepared, and experience a safer and more comfortable journey from departure to arrival."
    },

    Help: {
    title: "Help",
    text: "Get the assistance you need with our helpful travel support section. Find answers to common questions about bookings, payments, flight schedules, baggage information, account concerns, and other travel-related services. Our Help section is designed to guide you through every step and provide useful information to make your travel experience easier, smoother, and more convenient."
},


    // ===============================
    // FOOTER DESCRIPTIONS
    // ===============================

    exploreFlights: {
        title: "Explore Flights",
        text: "Discover a world of travel possibilities with a wide selection of domestic and international flights designed to match your journey. Explore different destinations, compare airline options, check available schedules, and find competitive fares that suit your travel plans and budget. Whether you are traveling for business, leisure, or a memorable vacation, we help you find the right flight experience with ease and confidence."
    },


    manageBooking: {
        title: "Manage Booking",
        text: "Enjoy complete control over your travel arrangements through our convenient booking management features. Easily review your reservation details, update passenger information, modify travel dates, select additional services, and keep track of important flight updates. Our goal is to provide a simple and hassle-free way to manage your journey from booking until your arrival."
    },


    helpCenter: {
        title: "Help Center",
        text: "Find helpful answers and reliable information about your travel concerns in one convenient place. Learn more about booking procedures, payment options, baggage guidelines, flight changes, travel requirements, and other important policies. Our Help Center is designed to guide you through every step and provide support whenever you need assistance."
    },


    contactUs: {
        title: "Contact Us",
        text: "Our dedicated support team is always ready to assist you with your travel needs and inquiries. Whether you need help with reservations, cancellations, refunds, flight concerns, or general questions, we are here to provide reliable assistance and ensure that your travel experience remains smooth, convenient, and stress-free."
    },


    cancellation: {
        title: "Cancellation Policy",
        text: "Understand our cancellation guidelines and procedures to help you manage unexpected changes to your travel plans. Learn about refund eligibility, applicable fees, cancellation steps, and important conditions before making adjustments to your booking. We provide clear information to help you make informed decisions regarding your flight reservations."
    },


    privacyPolicy: {
        title: "Privacy Policy",
        text: "Your privacy and security are important to us. Our Privacy Policy explains how your personal information is collected, processed, protected, and used while providing you with a safe and reliable travel experience. We are committed to maintaining transparency and protecting your data through responsible and secure practices."
    }

};


// ===============================
// NAVBAR CLICK EVENT
// ADDED FOR Explore Manage Attention
// ===============================

document.querySelectorAll(".nav-item, #Help").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const key = this.textContent.trim();


        modalTitle.textContent = descriptions[key].title;

        modalText.textContent = descriptions[key].text;


        modal.style.display = "block";


    });

});



// ===============================
// FOOTER CLICK EVENT
// ADDED FOR FOOTER LINKS
// ===============================

document.querySelectorAll(".footer-col a[id]").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();


        const key = this.id;


        modalTitle.textContent = descriptions[key].title;

        modalText.textContent = descriptions[key].text;


        modal.style.display = "block";


    });

});



// ===============================
// CLOSE BUTTON
// ===============================

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});



// ===============================
// CLOSE WHEN CLICK OUTSIDE MODAL
// ===============================

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});



// ===============================
// MODAL DESIGN (CSS INSIDE JS)
// NO NEED NA SA CSS
// ===============================

Object.assign(modal.style, {

    display: "none",

    position: "fixed",

    top: "0",

    left: "0",

    width: "100%",

    height: "100%",

    background: "rgba(0,0,0,0.6)",

    zIndex: "99999",

    justifyContent: "center",

    alignItems: "center"

});



Object.assign(document.querySelector(".modal-content").style, {
    background: "#ffffff",
    color: "#184940",
    fontStyle: "italic",
    width: "60%",
    padding: "20px",
    borderRadius: "10px",
    margin: "100px auto",
    position: "relative",

});



// ===============================
// CLOSE BUTTON STYLE
// ===============================

Object.assign(closeBtn.style, {

    position: "absolute",

    top: "10px",

    right: "15px",

    fontSize: "30px",

    fontWeight: "bold",

    color: "#184940",

    cursor: "pointer"

});