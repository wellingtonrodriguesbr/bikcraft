const btnMobile = document.querySelector(".btn-modal");
const listMobile = document.querySelector(".header__menu__links");

function toggleModal() {
  btnMobile.classList.toggle("active");
  listMobile.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleModal);
