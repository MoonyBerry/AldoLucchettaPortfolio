/* JS */
/* OPEN AND CLOSING MOBILE NAVBAR */
const $openNavbar = document.querySelector(".navbar__toggle");
const $navbarMobile = document.querySelector(".navbar-mobile");
const $navbarOverlay = document.querySelector(".navbar-mobile__overlay");
const $closeNavbar = document.querySelector(".navbar-mobile__toggle");
const $mobileLinks = document.querySelectorAll(".navbar-mobile__links");

function openMobileNav() {
  $navbarMobile.classList.add("show");
  $navbarOverlay.classList.add("show");
}

function closeMobileNav() {
  $navbarMobile.classList.remove("show");
  $navbarOverlay.classList.remove("show");
}

$openNavbar.addEventListener("click", openMobileNav);
$closeNavbar.addEventListener("click", closeMobileNav);
$navbarOverlay.addEventListener("click", closeMobileNav);
$mobileLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeMobileNav);
});
