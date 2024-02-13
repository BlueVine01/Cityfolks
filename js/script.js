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



const sideBar = document.querySelector(".sidebar");
const mobileMenu = document.querySelector(".menu-mobile");
const closeMenu = document.querySelector(".menu-close");
const sideOverlay = document.querySelector('.overlay');

mobileMenu.addEventListener('click', () => {
    sideBar.style.display = 'block'
    closeMenu.style.display = 'block'
    mobileMenu.style.display = 'none'
    sideOverlay.style.display =" block"   
})

closeMenu.addEventListener('click', () => {
    sideBar.style.display = 'none'
    closeMenu.style.display = 'none'
    mobileMenu.style.display = 'block'
    sideOverlay.style.display =" none"   

})

const btns = document.querySelectorAll('.read-more-btn');

btns.forEach(btn => {
    btn.addEventListener('click', event => {
        const current = event.currentTarget;
        const currentText = current.parentNode.querySelector('.read-more-text');

        currentText.classList.toggle('read-more-text--show');

        current.textContent = currentText.classList.contains('read-more-text--show') ?
            "Read Less..." : "Read More...";
    });
});

