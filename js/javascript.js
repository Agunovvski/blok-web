
// heart click --> like
var heart = document.querySelectorAll('.fa-heart-o');

function toggleHeart(e){
  e.target.classList.toggle('fa-heart');
}

for(i=0; i<heart.length; i++){
  heart[i].addEventListener('click', toggleHeart);
}

// download click --> download
var download = document.querySelectorAll('.fa-download');

function toggleDownload(e){
  e.target.classList.toggle('fa-download-clicked');
}

for(i=0; i<download.length; i++){
  download[i].addEventListener('click', toggleDownload);
  download[i].addEventListener('click', move);
}

var elem = document.querySelector('.progressbar');

function move() {
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      elem.style.backgroundColor = "#00d66c";
      elem.style.color = "white";
      elem.innerHTML = "Gedownload!";
    } else {
      width++;
      elem.style.display = "block";
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}


// Bookmark click --> Laat zien
var icon = document.querySelectorAll('.fa-bookmark-o');
var popUp = document.querySelector('.popup');

function toggleBookmark(e){
  amountMarked++;
  e.target.classList.toggle('fa-bookmark-o-clicked');
  popUp.classList.toggle('popup-clicked');
  amountBookmark();
}

for(i=0; i<icon.length; i++){
  icon[i].addEventListener('click', toggleBookmark);
}


// weghalen van popup
function removePopup(){
  popUp.classList.remove('popup-clicked');
}
popUp.addEventListener('click', removePopup);

// tellen hoeveel zijn opgeslagen

var bookmarkCount = document.querySelector('.bookmarkCount');
var amountMarked = 0;

function amountBookmark(){
  bookmarkCount.innerHTML = "("+ amountMarked + ")";
}


// header hide and show

var searchIcon = document.querySelector('.fa-search');
var header = document.querySelector('.home-header');

function toggleHeader(){
  header.classList.toggle('header-clicked');
  console.log('klik 2');
}

searchIcon.addEventListener('click', toggleHeader);


// social share hide and shadow
var shareIcon = document.querySelector('.fa-share-alt');
var socialBar = document.querySelector('.social-verhaal');

function toggleSocial(){
  socialBar.classList.toggle('social-verhaal-clicked');
  console.log('gelukt');
}

  shareIcon.addEventListener('click', toggleSocial);



// email error state

var email = document.getElementById("registreren-email");
var submitRegistreren = document.querySelector(".submitRegistreren");

submitRegistreren.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Is je e-mail wel goed geschreven?");
  } else {
    email.setCustomValidity("");
  }
});


// When the user scrolls down 20px from the top of the document, slide down the navbar
var lastScrollTop = 0;

window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
       document.querySelector(".social-verhaal").style.bottom = "-100%";
   } else {
      document.querySelector(".social-verhaal").style.bottom = "0";
   }
   lastScrollTop = st;
}, false);
