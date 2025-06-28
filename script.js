let display = document.getElementById('display');
function appendToDisplay(value) {
  if (display.innerText === '0' && value !== '.') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}
function clearDisplay() {
  display.innerText = '0';
}
function calculate() {
  try {
    let result = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    display.innerText = Number.isFinite(result) ? result : 'Error';
  } catch {
    display.innerText = 'Error';
  }
}
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (/[0-9]/.test(key)) appendToDisplay(key);
  else if (key === '+') appendToDisplay('+');
  else if (key === '-') appendToDisplay('-');
  else if (key === '*') appendToDisplay('×');
  else if (key === '/') appendToDisplay('÷');
  else if (key === '.') appendToDisplay('.');
  else if (key === '(' || key === ')') appendToDisplay(key);
  else if (key === 'Enter') calculate();
  else if (key === 'Escape' || key === 'c' || key === 'C') clearDisplay();
  else if (key === 'Backspace') {
    display.innerText = display.innerText.slice(0, -1) || '0';
  }
});
