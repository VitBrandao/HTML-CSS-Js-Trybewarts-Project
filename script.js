let firstButton = document.getElementsByClassName("btn")[0]; 

firstButton.addEventListener("click", checkButton);

function checkButton() {
  let firstInput = document.getElementsByClassName("email")[0];
  let secondInput = document.getElementsByClassName("password")[0];
  
  if (firstInput.value === "tryber@teste.com" && secondInput.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}