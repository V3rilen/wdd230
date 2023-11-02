const passwordInput = document.querySelector("#passwordInput");
const passwordConfirm = document.querySelector("#passwordConfirm");
const form = document.querySelector("form");
const passwordMessage = document.querySelector("#passwordMessage");

//talk to datwyler about stave moulds video on spintronics!!
// console.log(passwordInput);
// console.log(passwordConfirm);
passwordConfirm.addEventListener("blur", () => {
  console.log("it");
  if (passwordConfirm.value !== passwordInput.value) {
    // passwordConfirm.title.textContent = "test";
    passwordConfirm.classList.add("invalid");
    passwordMessage.textContent = "Passwords do not match!";
    passwordInput.focus();
    passwordConfirm.value = "";
    passwordInput.value = "";
    // console.log("invalid password");
  } else {
    passwordConfirm.classList.remove("invalid");
    passwordMessage.textContent = "";
  }
});
