const form = document.getElementById("form");
const loading = document.querySelector(".loading");
const popup = document.querySelector(".popup");
const popupTitle = document.querySelector(".popup-title");
const popupText = document.querySelector(".popup-text");

form.addEventListener("submit", formSend);
const url = "https://jsonplaceholder.typicode.com/posts";

async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);

  let formData = new FormData(form);

  if (error === 0) {
    loading.classList.add("_sending");

    let response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      let result = await response.json();
      loading.classList.remove("_sending");
      popupTitle.innerText = "SUCCESS!";
      popupText.innerText =
        "You have successfully subscribed to the email newsletter";
      popup.classList.add("open");
      form.reset();
    } else if (!response.ok) {
      loading.classList.remove("_sending");
      popupTitle.innerText = "ERROR!";
      popupText.innerText = "Please try later";
      popup.classList.add("open");
    }
  } else {
    alert("Заполните Ваш Email правильно!");
  }
}

function formValidate(form) {
  let error = 0;
  let formReq = document.querySelector("._req");
  formRemoveError(formReq);

  if (formReq.classList.contains("_email")) {
    if (emailTest(formReq)) {
      formAddError(formReq);
      error++;
    } else {
      if (formReq.value.trim() === "") {
        formAddError();
        error++;
      }
    }
  }
  return error;
}

function formAddError(formReq) {
  formReq.parentElement.classList.add("_error");
  formReq.classList.add("_error");
}

function formRemoveError(formReq) {
  formReq.parentElement.classList.remove("_error");
  formReq.classList.remove("_error");
}

function emailTest(formReq) {
  return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
    formReq.value
  );
}
