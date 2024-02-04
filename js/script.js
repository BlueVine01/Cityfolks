///////////////////////////////////
///////////////////////////////////
//////////////COUNTDOWN TIMEOUT

var countDownDate = new Date("Feb 15, 2024 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


    if (distance < 0) {
        clearInterval();
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

}, 1000);


///////////////////////////////////
///////////////////////////////////
//////////////ACTIVE

const navLinks = document.querySelectorAll("header nav ul li a");
const windowPathname = window.location.pathanme;

navLinks.forEach(navLink => {
    const navLinkPathname = new URL(navLink.href).pathname;

    if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')) {
        navLink.classList.add("active");
        // document.querySelector('header nav ul li a[href*= ' +']').classList.add('active')
    }
});