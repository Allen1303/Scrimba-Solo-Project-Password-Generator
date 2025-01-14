"use strict";
const button = document.getElementById("button-el");
const inputBox_1 = document.getElementById("input-boxEl-1");
const inputBox_2 = document.getElementById("input-boxEl-2");
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[]|:;<>.?/";
/* function to handle the random character generation */
function getRandomPassword() {
  return characters[Math.floor(Math.random() * characters.length)];
}
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy text:", err);
    });
}
/* EventListener function to handle the button click */
button.addEventListener("click", () => {
  let password_1 = "";
  let password_2 = "";

  for (let index = 0; index < 15; index++) {
    password_1 += getRandomPassword();
    password_2 += getRandomPassword();
  }
  inputBox_1.textContent = password_1;
  inputBox_2.textContent = password_2;
});
/* Eventlistener to handle the copy on clip board feature */
inputBox_1.addEventListener("click", () => {
  copyToClipboard(inputBox_1.textContent);
});
inputBox_2.addEventListener("click", () => {
  copyToClipboard(inputBox_2.textContent);
});
