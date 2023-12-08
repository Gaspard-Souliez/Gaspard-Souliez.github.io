// script.js
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    // Si vous descendez, cachez le header
    if (prevScrollpos < currentScrollPos) {
        document.querySelector("header").classList.add("hidden");
    } else {
        // Si vous remontez, affichez le header
        document.querySelector("header").classList.remove("hidden");
    }

    prevScrollpos = currentScrollPos;
};
