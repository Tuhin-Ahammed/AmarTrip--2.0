
    // === Your Local Images Here ===
    const imageFiles = [
      // "img/commision-trip-logo.png",
      // "img/negotiation-trip-logo.png",
      // "img/commision-free-logo.png",
      // "img/commision-trip-logo.png",
      // "img/negotiation-trip-logo.png",
      // "img/commision-free-logo.png",
          "https://s3.brilliant.com.bd/s3.volume9.com/cms/passenger/2b638bb684b47f0d8b591cc956aa646a",
          "https://s3.brilliant.com.bd/s3.volume9.com/cms/passenger/1da7e09b610543eb51c266e84f613dcb",
          "https://s3.brilliant.com.bd/s3.volume9.com/cms/passenger/78a5bd06c5c5d6ddc78b2f4d6e9db6ad",
          "https://s3.brilliant.com.bd/s3.volume9.com/cms/passenger/07f5f58031e355def437faaacc249a9d",
          "https://s3.brilliant.com.bd/s3.volume9.com/cms/passenger/2a463c71c57d09b927d0168ee05fef5d",
          "https://s3.brilliant.com.bd/s3.volume9.com/cms/passenger/1e4b566396c6b9ab201371a9e23033fb",
          "https://s3.brilliant.com.bd/s3.volume9.com/cms/9e3d62abe768863cb73186b1fdc41a26",
          "https://s3.brilliant.com.bd/s3.volume9.com/cms/ab00224b25b5d14f4ea794c897349ec7",
          "https://s3.brilliant.com.bd/s3.volume9.com/cms/16479d6a8193bb43a4fc48052cb6ed69",
          "https://s3.brilliant.com.bd/s3.volume9.com/cms/1f1581f64be4b917773004a02011d77d",


    ];

    let currentIndex = 0;
    const carousel = document.getElementById('carousel');

  const pagination = document.getElementById('swiper-pagination');

  function renderPagination() {
    pagination.innerHTML = '';
    imageFiles.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === currentIndex) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
        currentIndex = index;
        renderCarousel();
      });
      pagination.appendChild(dot);
    });
  }

    function renderCarousel() {
      carousel.innerHTML = '';

      // Previous Image
      const prevIndex = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
      const prevImg = document.createElement('img');
      prevImg.src = imageFiles[prevIndex];
      prevImg.classList.add('side');
      carousel.appendChild(prevImg);

      // Current Image (Bigger)
      const currentImg = document.createElement('img');
      currentImg.src = imageFiles[currentIndex];
      currentImg.classList.add('center');
      carousel.appendChild(currentImg);
    


      // Next Image
      const nextIndex = (currentIndex + 1) % imageFiles.length;
      const nextImg = document.createElement('img');
      nextImg.src = imageFiles[nextIndex];
      nextImg.classList.add('side');
      carousel.appendChild(nextImg);

       renderPagination();
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % imageFiles.length;
      renderCarousel();
    }

    // Initial Render
    renderCarousel();

    // Auto Change Every 3s
    setInterval(nextImage, 3000);
  






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
