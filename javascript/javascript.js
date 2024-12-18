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
        if (currentIndex < totalCards - 2) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
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

const about=document.getElementById("aboutnavbtn");
about.addEventListener('click',function(){
    window.location.href="about us.html";
})

const home=document.getElementById("homenavbtn");
home.addEventListener('click',function(){
    window.location.href="index.html";
})
