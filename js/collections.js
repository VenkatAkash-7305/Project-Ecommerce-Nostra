import { products } from "./products.js";

var offerBar = document.querySelector(".offer-bar");

document.getElementById("offer-close").addEventListener("click", function () {
    offerBar.style.display = "none";
});

var sideNavMenu = document.querySelector(".navbar-menu-toggle");
var sidenavbar = document.querySelector(".side-navbar");

sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px";
});

document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-60%";
});



/* Load Products */

var container = document.querySelector(".products");

products.forEach((product) => {

    var createItem = document.createElement("div");
    createItem.classList.add("product");

    createItem.innerHTML = `
        <img src="images/${product.src}">
        <h1>${product.name}</h1>
        <p>₹${product.price}</p>
        <span class="tags" style="display:none;">${product.tags}</span>
    `;

    container.append(createItem);
});



/* Filtering */

var filterList = [];

var tags = document.getElementsByName("tags");

tags.forEach((tag) => {

    tag.addEventListener("change", (e) => {

        if (e.target.checked) {
            filterList.push(e.target.value);
        }
        else {
            filterList = filterList.filter(item => item !== e.target.value);
        }

        update();

    });

});



function update() {

    var productList = document.querySelectorAll(".product");

    for (var i = 0; i < productList.length; i++) {

        var check = false;
        var product = productList[i];

        var temp = product.querySelector(".tags").innerHTML;

        const tempFilterArray = temp.split(',');

        filterList.forEach((j) => {
            tempFilterArray.forEach((i) => {
                if (j == i) {
                    check = true;
                }
            });
        });

        if (!check && filterList.length > 0) {
            product.style.display = "none";
        }
        else {
            product.style.display = "block";
        }

    }

}