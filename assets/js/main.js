/* JS */
/* OPEN AND CLOSING MOBILE NAVBAR */
const $openNavbar = document.querySelector(".navbar__toggle");
const $navbarMobile = document.querySelector(".navbar-mobile");
const $navbarOverlay = document.querySelector(".navbar-mobile__overlay");
const $closeNavbar = document.querySelector(".navbar-mobile__toggle");
const $mobileLinks = document.querySelectorAll(".navbar-mobile__link");
const $body = document.querySelector("body");

function openMobileNav() {
  $navbarMobile.classList.add("show");
  $navbarOverlay.classList.add("show");
  $body.style.overflow = "hidden";
}

function closeMobileNav() {
  $navbarMobile.classList.remove("show");
  $navbarOverlay.classList.remove("show");
  $body.style.overflow = "auto";
}

$openNavbar.addEventListener("click", openMobileNav);
$closeNavbar.addEventListener("click", closeMobileNav);
$navbarOverlay.addEventListener("click", closeMobileNav);
$mobileLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeMobileNav);
});

/* MAKING NAVBAR DISAPPEAR AND APPEAR ON SCROLL */
const $mainNavbar = document.querySelector("header");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    $mainNavbar.classList.add("hide");
  } else {
    $mainNavbar.classList.remove("hide");
  }

  lastScrollTop = scrollTop;
});



/* CREATING PROJECTS ELEMENTS */
const $projectsContainer = document.querySelector(".projects__container");

/* Array containing all projects info */
const projects = [
  {
    title: "Python AI RPG",
    img: "../assets/img/python-ai-rpg.png",
    description:
      "A text-based RPG where players interact with an AI to explore a procedually generated story, and engage in turn-based combat. Built using Python and Ollama",
    tags: ["Python", "Ollama", "Text-Based", "RPG"],
  },
  {
    title: "HorrorTubbies Hotel",
    img: "../assets/img/tubbies-hotel.jpeg",
    description:
      "A short horror game prototype inspired by Outlast, where a distorted Teletubby stalks you through an abandoned hotel. Built in Unreal Engine 5 using Blueprints and custom AI behavior.",
    tags: ["UE5", "Blueprints", "AI"],
  },
  {
    title: "airbnb Clone",
    img: "../assets/img/airbnb-clone.png",
    description:
      "A full-stack web application that mimics the core functionalities of Airbnb, allowing users to browse listings.",
    tags: ["Full-Stack", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Ratchet & Clank 3 - Teardown",
    img: "../assets/img/ratchet-teardown.png",
    description:
      "A detailed analysis of Ratchet and Clank 3,exploring the systems, mechanics and design choices that make its simple premise exceptionally effective.",
    tags: ["Google Docs", "Game Design", "Level Design", "Photoshop"],
  }
];


/* Function to get tags */
function getTags(tags) {
  return tags.map((tag) => `<div class='project__tag'>${tag}</div>`).join("");
}

/* Creating single project */
projects.forEach((project) => {
  const newProject = document.createElement("article");

  newProject.innerHTML =
    `<div class="project__main-container"><img class='project__img' src='${project.img}' alt='${project.title}' title='${project.title}'/><div class='project__container'>
 <div class='project__info'><h3 class='project__title'>${project.title}</h3><p class='project__description'>${project.description}</p></div><div class='project__tag--container'>` +
    getTags(project.tags) +
    `</div></div></div>`;

  newProject.classList.add("project");
  $projectsContainer.appendChild(newProject);
});

/* CAROUSEL LOGIC */
const prevBtn = document.querySelector(".carousel__btn.prev");
const nextBtn = document.querySelector(".carousel__btn.next");

let currentIndex = 0;

function showProject(index) {
  const move =
    -index * 100; /* to calculate the movement from the starting position */
  $projectsContainer.style.transform = `translateX(${move}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex + 1) % projects.length; /* to create infinito carousel */
  showProject(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  showProject(currentIndex);
});
