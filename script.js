const main = document.querySelector("#main");
const key = document.querySelector("#key");
const code = document.querySelector("#code");
const which = document.querySelector("#which");

window.addEventListener("keydown", (event) => {
  key.innerHTML = event.key;
  code.innerHTML = event.code;
  which.innerHTML = event.which;
  main.innerHTML = event.keyCode;
});
