// Offer Bar Close

const offerBar = document.querySelector(".offer-bar");

document.getElementById("offer-close").addEventListener("click", function () {
    offerBar.style.display = "none";
});


// Side Navbar Open

const sideNavMenu = document.getElementById("side-navbar-activate");
const sidenavbar = document.querySelector(".side-navbar");

sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0";
});


// Side Navbar Close

document.getElementById("side-navbar-close").addEventListener("click", function () {
    sidenavbar.style.marginLeft = "-60%";
});



// Slider

const sliderLeftButton = document.getElementById("slider-left-activate");
const sliderRightButton = document.getElementById("slider-right-activate");
const sliderImage = document.querySelector(".slider-image-container");

let sliderMargin = 0;


// Right Slide

sliderRightButton.addEventListener("click", function () {

    sliderMargin += 100;

    if (sliderMargin > 200) {
        sliderMargin = 0;
    }

    sliderImage.style.marginLeft = "-" + sliderMargin + "vw";
});


// Left Slide

sliderLeftButton.addEventListener("click", function () {

    if (sliderMargin === 0) {
        sliderMargin = 200;
    } else {
        sliderMargin -= 100;
    }

    sliderImage.style.marginLeft = "-" + sliderMargin + "vw";
});




// Like Button

const likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach(function (btn) {

    btn.addEventListener("click", function (e) {

        if (e.target.src.includes("blackheart")) {
            e.target.src = "images/icons/redheart.png";
        } 
        else {
            e.target.src = "images/icons/blackheart.png";
        }

    });

});




// Scroll Animation

const scrollElements = document.querySelectorAll(".initial-scroll-animate");

window.addEventListener("scroll", function () {

    const windowHeight = window.innerHeight;

    scrollElements.forEach(function (el) {

        const elementTop = el.getBoundingClientRect().top;

        if (windowHeight > elementTop - 100) {
            el.classList.remove("reveal-scroll-animate");
        }

    });

});


