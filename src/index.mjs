import "./styles.css";

function catButton() {
  let email = prompt("What is your email?");
  alert("Thank you very much. Sending details on the way!");
}
let changeButton = document.querySelector("button");
changeButton.addEventListener("click", catButton);
