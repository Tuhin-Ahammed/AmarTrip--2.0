const swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  autoplay: true,
  centeredSlides: true,
  slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  //responsive breakpoints
  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //   },
  // },
});

// Trogle button function start

const targetPassenger = document.getElementById("passenger");
const targetDriver = document.getElementById("driver");

// Get ALL buttons with these classes from both sections
const passengerButtons = document.querySelectorAll(".passenger-button");
// console.table(passengerButtons);
const driverButtons = document.querySelectorAll(".driver-button");
// console.table(driverButtons);

// Initially show passenger section and hide driver section
targetPassenger.style.display = "block";
targetDriver.style.display = "none";

// Function to show passenger section
function showPassengerSection() {
  targetDriver.style.display = "none";
  targetPassenger.style.display = "block";

  // Add active class to all passenger buttons and remove from driver buttons
  driverButtons.forEach((btn) => btn.classList.remove("active"));
  passengerButtons.forEach((btn) => btn.classList.add("active"));

  // console.log("Passenger section activated");
}

// Function to show driver section
function showDriverSection() {
  targetDriver.style.display = "block";
  targetPassenger.style.display = "none";

  // Add active class to all driver buttons and remove from passenger buttons
  driverButtons.forEach((btn) => btn.classList.add("active"));
  passengerButtons.forEach((btn) => btn.classList.remove("active"));

  // console.log("Driver section activated");
}

// Add event listeners to all passenger buttons (passengerButtons)
passengerButtons.forEach((btn) => (btn.onclick = showPassengerSection));

// Add event listeners to all driver buttons (driverButtons)
driverButtons.forEach((btn) => (btn.onclick = showDriverSection));

// Initialize with passenger section active
showPassengerSection();
