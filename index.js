const btnLogin = document.querySelector(".btn_link");
const modal = document.querySelector(".modal");

const activeModalClass = "modal__active";

function openModal() {
  modal.classList.add(activeModalClass);
}

btnLogin.addEventListener("click", openModal);
modal.addEventListener("mousedown", closeModal);

function closeModal(event) {
  if (event.target === modal) {
    modal.classList.remove(activeModalClass);
  }
}
