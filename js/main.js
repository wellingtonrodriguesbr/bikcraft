const btnMobile = document.querySelector(".btn-modal");
const listMobile = document.querySelector(".header__menu__links");
const btnScrollToTop = document.querySelector(".btn-scroll-to-top");
const yearFooter = document.querySelector("#year");

function toggleModal() {
  btnMobile.classList.toggle("active");
  listMobile.classList.toggle("active");
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

yearFooter.innerHTML = new Date().getFullYear();

btnMobile.addEventListener("click", toggleModal);
btnScrollToTop.addEventListener("click", scrollToTop);
