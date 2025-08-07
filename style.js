const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  autoplay: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Trogle button function start

const targetPassenger = document.getElementById("passenger");
const targetDriver = document.getElementById("driver");

// Get ALL buttons with these classes from both sections
const passengerButtons = document.querySelectorAll(".button-1");
const driverButtons = document.querySelectorAll(".button-2");

// Initially show passenger section and hide driver section
targetPassenger.style.display = "block";
targetDriver.style.display = "none";

// Function to show passenger section
function showPassengerSection() {
  targetPassenger.style.display = "block";
  targetDriver.style.display = "none";

  // Add active class to all passenger buttons and remove from driver buttons
  passengerButtons.forEach((btn) => btn.classList.add("active"));
  driverButtons.forEach((btn) => btn.classList.remove("active"));

  console.log("Passenger section activated");
}

// Function to show driver section
function showDriverSection() {
  targetDriver.style.display = "block";
  targetPassenger.style.display = "none";

  // Add active class to all driver buttons and remove from passenger buttons
  driverButtons.forEach((btn) => btn.classList.add("active"));
  passengerButtons.forEach((btn) => btn.classList.remove("active"));

  console.log("Driver section activated");
}

// Add event listeners to all passenger buttons (button-1)
passengerButtons.forEach((btn) => {
  btn.onclick = showPassengerSection;
});

// Add event listeners to all driver buttons (button-2)
driverButtons.forEach((btn) => {
  btn.onclick = showDriverSection;
});

// Initialize with passenger section active
showPassengerSection();

// Trogle button function end
