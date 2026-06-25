/* =====================================================
   FLIGHT BOOKING SYSTEM - FRONTEND
===================================================== */


document.addEventListener("DOMContentLoaded", function () {


    // =====================================================
    // TEXT ROTATION
    // =====================================================

    const phrases = [
        "Explore the World",
        "Explore the Earth",
        "Discover the Universe",
        "Explore the Oceans"
    ];


    let currentIndex = 0;

    const textElement = document.getElementById("text");


    if (textElement) {

        setInterval(() => {

            textElement.classList.add("fade-out");


            setTimeout(() => {

                textElement.innerText = phrases[currentIndex];

                textElement.classList.remove("fade-out");

                textElement.classList.add("fade-in");


                currentIndex =
                    (currentIndex + 1) % phrases.length;


            }, 400);


        }, 2000);

    }





    // =====================================================
    // HAMBURGER MENU
    // =====================================================


    window.toggleMenu = function () {

        document
            .querySelector(".nav-links")
            ?.classList.toggle("active");


        document
            .getElementById("hamburger")
            ?.classList.toggle("open");

    };

    // =====================================================
    // TRIP TYPE TOGGLE
    // =====================================================


    const oneWay = document.getElementById("oneWay");

    const returnTrip = document.getElementById("returnTrip");

    const multiCity = document.getElementById("multiCity");


    const returnDate = document.getElementById("returnDate");

    const multiCitySection =
        document.getElementById("multiCitySection");



    if (oneWay && returnTrip && multiCity) {


        oneWay.addEventListener("change", () => {

            returnDate.style.display = "none";

            multiCitySection.style.display = "none";

        });



        returnTrip.addEventListener("change", () => {


            returnDate.style.display = "inline-block";

            multiCitySection.style.display = "none";


        });



        multiCity.addEventListener("change", () => {


            returnDate.style.display = "none";

            multiCitySection.style.display = "flex";


        });


    }


    // =====================================================
    // COUNTRIES API
    // =====================================================


    const countrySelects = [
        document.getElementById("from"),
        document.getElementById("to"),
        document.getElementById("from2"),
        document.getElementById("to2")
    ];


    fetch("https://countriesnow.space/api/v0.1/countries")
    .then(response => response.json())
    .then(data => {

        const countries = data.data
            .map(country => country.country)
            .sort();


        countrySelects.forEach(select => {

            if (select) {

                countries.forEach(name => {

                    const option = document.createElement("option");

                    option.value = name;

                    option.textContent = name;

                    select.appendChild(option);

                });

            }

        });


    })
    .catch(error => {

        console.error("Country API error:", error);

    });

    // =====================================================
    // SEARCH BUTTON
    // =====================================================


    const searchBtn =
        document.querySelector(".search-btn");



    if (searchBtn) {

        searchBtn.addEventListener(
            "click",
            searchFlights
        );

    }

});


// =====================================================
// SEARCH FLIGHTS
// =====================================================


async function searchFlights() {

    const errorBox =
        document.getElementById("flightError");

    const from =
        document.getElementById("from").value.trim();

    const to =
        document.getElementById("to").value.trim();

    const departDate =
        document.getElementById("departDate").value;

    const returnDate =
        document.getElementById("returnDate").value;

    const from2 =
        document.getElementById("from2").value.trim();

    const to2 =
        document.getElementById("to2").value.trim();

    const date2 =
        document.getElementById("date2").value;


    const returnTripChecked =
        document.getElementById("returnTrip").checked;

    const multiCityChecked =
        document.getElementById("multiCity").checked;


    if (errorBox) {

        errorBox.style.display = "none";

    }


    document
        .querySelectorAll("input,select")
        .forEach(el => {

            el.classList.remove(
                "error-input"
            );

        });

    let hasError = false;

    if (!from) {

        document.getElementById("from")
            .classList.add("error-input");

        hasError = true;

    }

    if (!to) {

        document.getElementById("to")
            .classList.add("error-input");

        hasError = true;

    }


    if (!departDate) {

        document.getElementById("departDate")
            .classList.add("error-input");

        hasError = true;

    }


    if (returnTripChecked && !returnDate) {

        document.getElementById("returnDate")
            .classList.add("error-input");

        hasError = true;

    }

    if (multiCityChecked) {


        if (!from2) {

            document.getElementById("from2")
                .classList.add("error-input");

            hasError = true;

        }

        if (!to2) {

            document.getElementById("to2")
                .classList.add("error-input");

            hasError = true;

        }

        if (!date2) {

            document.getElementById("date2")
                .classList.add("error-input");

            hasError = true;

        }


    }

    if (hasError) {


        errorBox.style.display = "block";

        errorBox.textContent =
            "Please fill all required fields.";


        return;

    }

    try {


        const response =
            await fetch(
                "http://localhost:3000/search-flights",
                {


                    method: "POST",


                    headers: {

                        "Content-Type":
                            "application/json"

                    },


                    body: JSON.stringify({


                        from,

                        to,

                        departDate,

                        returnDate,


                        tripType:

                            multiCityChecked
                                ?
                                "multi-city"

                                :

                                returnTripChecked
                                    ?
                                    "return"

                                    :

                                    "one-way",



                        secondFlight:

                            multiCityChecked
                                ?

                                {

                                    from: from2,

                                    to: to2,

                                    date: date2

                                }

                                :

                                null


                    })


                });


        const data =
            await response.json();

        displayResults(`


        <h2>Available Flights</h2>


        ${data.flights.map(f => `


        <div>


        <strong>
        ${f.airline}
        </strong>

        <br>


        ${f.from} → ${f.to}


        <br>

        ₱${f.price}

        </div>

        `).join("")}

        `);

    }

    catch (err) {

        console.error(err);
        errorBox.style.display = "block";
        errorBox.textContent =
            "Server not reachable.";

    }

}

// =====================================================
// DISPLAY RESULTS
// =====================================================


function displayResults(html) {

    let box =
        document.getElementById("results");

    if (!box) {

        box =
            document.createElement("div");

        box.id = "results";


        document
            .querySelector(".booking-box")
            ?.appendChild(box);


    }

    box.innerHTML = html;


}