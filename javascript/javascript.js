document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".testimonial-slider");
    const testimonials = document.querySelectorAll(".testimonial");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
    const dots = document.querySelectorAll(".dot"); 

    const totalCards = testimonials.length;
    let currentIndex = 0;

    function updateSliderPosition() {
        const cardWidth = testimonials[0].offsetWidth;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    nextButton.addEventListener("click", () => {
        // Check the screen width
        const isSmallScreen = window.innerWidth > 767;
    
        // Update logic based on screen width
        if (isSmallScreen) {
            if (currentIndex < totalCards - 2) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
        } else {
            if (currentIndex < totalCards - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
        }
        // Update the slider position
        updateSliderPosition();
    });
    

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - 2; 
        }
        updateSliderPosition();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSliderPosition();
        });
    });

    updateSliderPosition();
});

// Select menu button and side navigation menu
const menuBtn = document.getElementById("menubtn");
const sideNav = document.getElementById("sidenav");
const closeBtn = document.getElementById("closebtn");

// Open the side navigation
menuBtn.addEventListener("click", () => {
    sideNav.style.width = "300px"; // Open to 250px
});

// Close the side navigation
closeBtn.addEventListener("click", () => {
    sideNav.style.width = "0"; // Collapse to 0
});

// function for About Navigation 

const about=document.getElementById("aboutnavbtn");
about.addEventListener('click',function(){
    window.location.href="about us.html";
})

// function for Home Navigation 
const home=document.getElementById("homenavbtn");
home.addEventListener('click',function(){
    window.location.href="index.html";
})
// function for Home Navigation 
const academic=document.getElementById("academicnavbtn");
academic.addEventListener('click',function(){
    window.location.href="preschool.html";
})


// automatic Counter
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const increment = target / 100; // Adjust the divisor to control speed

        let currentValue = 0;

        const updateCounter = () => {
            if (currentValue < target) {
                currentValue = Math.min(currentValue + increment, target);
                counter.textContent = Math.floor(currentValue);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target; // Ensure the exact target value is displayed
            }
        };

        updateCounter();
    });
});



window.addEventListener('scroll', function() {
    var scrollablePart = document.querySelector('.scrollable_part');
    var fixedPart = document.querySelector('.fixed_part');

    if (scrollablePart.scrollTop > 0) {
        fixedPart.style.display = 'block';
    } else {
        fixedPart.style.display = 'block';
    }
});



// Adverthisment

window.onload = function () {
    const adPopup = document.getElementById("adPopup");
    const closePopup = document.getElementById("closePopup");

    // Check if the popup has been shown during the current session
    if (!sessionStorage.getItem("popupShown")) {
      // Display the popup
      adPopup.style.display = "flex";

      // Set the flag in sessionStorage
      sessionStorage.setItem("popupShown", "true");
    }

    // Close the popup when the close button is clicked
    closePopup.onclick = function () {
      adPopup.style.display = "none";
    };

    // Close the popup when clicking outside the popup content
    window.onclick = function (event) {
      if (event.target === adPopup) {
        adPopup.style.display = "none";
      }
    };
  };
  