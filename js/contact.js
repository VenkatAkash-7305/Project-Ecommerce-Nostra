const sideNavMenu = document.getElementById("side-navbar-activate");
const sidenavbar = document.querySelector(".side-navbar");
const sideNavbarClose = document.getElementById("side-navbar-close");


sideNavMenu.addEventListener("click", function(){
    sidenavbar.style.marginLeft = "0";
});


sideNavbarClose.addEventListener("click", function(){
    sidenavbar.style.marginLeft = "-60%";
});

