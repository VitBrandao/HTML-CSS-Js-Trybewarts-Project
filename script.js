const firstButton = document.getElementsByClassName('btn')[0]; 
function checkButton() {
  const firstInput = document.getElementsByClassName('email')[0];
  const secondInput = document.getElementsByClassName('password')[0];
  if (firstInput.value === 'tryber@teste.com' && secondInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

firstButton.addEventListener('click', checkButton);
