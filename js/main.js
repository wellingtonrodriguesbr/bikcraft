const btnMobile = document.querySelector(".btn-mobile");
const linksHeaderList = document.querySelector(".header__menu__links");
const links = document.querySelectorAll(".header__menu__links a");
const btnScrollToTop = document.querySelector(".btn-scroll-to-top");
const yearFooter = document.querySelector("#year");

function toggleModal() {
  btnMobile.classList.toggle("active");
  linksHeaderList.classList.toggle("active");
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function activeLink(link) {
  const url = location.href;
  const href = link.href;

  url.includes(href)
    ? link.classList.add("active")
    : link.classList.remove("active");
}

yearFooter.innerText = new Date().getFullYear();

links.forEach(activeLink);

btnMobile.addEventListener("click", toggleModal);
btnScrollToTop.addEventListener("click", scrollToTop);
