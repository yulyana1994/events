const popupForClose = document.querySelector(".popup");
const popupTitleForClose = document.querySelector(".popup-title");
const popupTextForClose = document.querySelector(".popup-text");

popupTitleForClose.addEventListener("click", (e) => e.stopPropagation());
popupTextForClose.addEventListener("click", (e) => e.stopPropagation());
popupForClose.addEventListener("click", popupClose);

function popupClose() {
  popupForClose.classList.remove("open");
}
