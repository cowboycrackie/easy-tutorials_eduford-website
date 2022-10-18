var navLinks = document.querySelector('.header nav .nav-list');
var hamburger = document.querySelector('.header .open-icon .fa');
var menuIconClose = document.querySelector('.header .nav-list .close-icon .fa');
var mobileMenuItem = document.querySelectorAll('.header .nav-list ul li a');

function showMenu(){
  navLinks.style.right = "0";
}

function hideMenu(){
  navLinks.style.right = "-200px";
}

hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('inactive');
  menuIconClose.classList.toggle('inactive');
})

menuIconClose.addEventListener('click', ()=>{
  menuIconClose.classList.toggle('inactive');
  hamburger.classList.toggle('inactive');
})

document.addEventListener('scroll', ()=>{
  var scroll_position = window.scrollY;

  if (scroll_position > 600) {
    hamburger.style.color = 'var(--brand-red)';
  } else {
    hamburger.style.color = 'var(--text-color-white)';
  }
})

mobileMenuItem.forEach((item)=>{
  item.addEventListener('click', ()=>{
    hamburger.classList.toggle('inactive');
    mobileMenu.classList.toggle('inactive');
  })
})