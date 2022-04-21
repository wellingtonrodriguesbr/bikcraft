const btnMobile = document.querySelector(".btn-modal");
const listMobile = document.querySelector(".header__menu__links");
const btnScrollToTop = document.querySelector(".btn-scroll-to-top");

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

btnMobile.addEventListener("click", toggleModal);
btnScrollToTop.addEventListener("click", scrollToTop);
