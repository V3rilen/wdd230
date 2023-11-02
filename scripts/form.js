const passwordInput = document.querySelector("#passwordInput");
const passwordConfirm = document.querySelector("#passwordConfirm");
const form = document.querySelector("form");

//talk to datwyler about stave moulds video on spintronics!!
// console.log(passwordInput);
// console.log(passwordConfirm);
passwordConfirm.addEventListener("keyup", () => {
  if (passwordConfirm.value !== passwordInput.value) {
    // passwordConfirm.title.textContent = "test";
    passwordConfirm.classList.add("invalid");
    // console.log("invalid password");
  } else {
    passwordConfirm.classList.remove("invalid");
  }
});

// form.addEventListener("submit", () => {
//   console.log("submited!");
//   window.location = "./record.html";
// });
