const btnMobile = document.querySelector(".btn-mobile");
const linksHeaderList = document.querySelector(".header__menu__links");
const links = document.querySelectorAll(".header__menu__links a");
const btnScrollToTop = document.querySelector(".btn-scroll-to-top");
const yearFooter = document.querySelector("#year");

// open or close menu mobile
function toggleMenuMobile() {
  btnMobile.classList.toggle("active");
  linksHeaderList.classList.toggle("active");
}

// scroll for top of page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// add activelink
function activeLink(link) {
  const url = location.href;
  const href = link.href;

  url.includes(href)
    ? link.classList.add("active")
    : link.classList.remove("active");
}

// get current year
yearFooter.innerText = new Date().getFullYear();

//questions
const questions = document.querySelectorAll(".questions button");
questions.forEach(questionsEvents);

function questionsEvents(question) {
  question.addEventListener("click", activeQuestion);
}

function activeQuestion(e) {
  const question = e.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

// add events
links.forEach(activeLink);
btnMobile.addEventListener("click", toggleMenuMobile);
btnScrollToTop.addEventListener("click", scrollToTop);
