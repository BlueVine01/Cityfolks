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


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function moveAbout(sectionId) {
    let aboutClub = document.getElementById('aboutClub');
    let aboutCommitee = document.getElementById('committee');
    let aboutPage = document.getElementById('about--page');
    let aboutActivities = document.getElementById('activities');
    let aboutPatron = document.getElementById('about--patron');
    let aboutNewMembers = document.getElementById('about--newMembers');

    if (sectionId === 'aboutClub') {
      aboutClub.style.display = 'block';
      aboutPage.style.display = 'none';
      aboutActivities.style.display = 'block';
      aboutPatron.style.display = 'none';
      aboutCommitee.style.display = 'none';
      aboutNewMembers.style.display = 'none'
    } else if (sectionId === 'about--page') {
      aboutClub.style.display = 'none';
      aboutPage.style.display = 'block';
      aboutActivities.style.display = 'none';
      aboutNewMembers.style.display = 'none'
      aboutPatron.style.display = 'none';
      aboutCommitee.style.display = 'none';
    } else if (sectionId === 'committee') {
      aboutClub.style.display = 'none';
      aboutPage.style.display = 'none';
      aboutActivities.style.display = 'none';
      aboutPatron.style.display = 'none';
      aboutCommitee.style.display = 'block';
    } else if (sectionId === 'about--patron') {
      aboutClub.style.display = 'none';
      aboutPage.style.display = 'none';
      aboutActivities.style.display = 'none';
      aboutCommitee.style.display = 'none';
      aboutNewMembers.style.display = 'none';
      aboutPatron.style.display = 'block';
    } else if (sectionId === 'about--newMembers') {
      aboutClub.style.display = 'none';
      aboutPage.style.display = 'none';
      aboutActivities.style.display = 'none';
      aboutCommitee.style.display = 'none';
      aboutPatron.style.display = 'none';
      aboutNewMembers.style.display = 'block';
    } 
    else {
      aboutClub.style.display = 'none';
      aboutPage.style.display = 'none';
      aboutActivities.style.display = 'block';
      aboutCommitee.style.display = 'none';
    }
  }