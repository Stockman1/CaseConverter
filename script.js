// DOM Elements
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const upperCaseBtn = document.getElementById('upperCase');
const lowerCaseBtn = document.getElementById('lowerCase');
const sentenceCaseBtn = document.getElementById('sentenceCase');
const titleCaseBtn = document.getElementById('titleCase');
const alternatingCaseBtn = document.getElementById('alternatingCase');
const inverseCaseBtn = document.getElementById('inverseCase');
const copyTextBtn = document.getElementById('copyText');
const clearTextBtn = document.getElementById('clearText');
const modeToggleBtn = document.getElementById('modeToggle');
const body = document.body;

// Event Listeners
upperCaseBtn.addEventListener('click', () => convertCase('upper'));
lowerCaseBtn.addEventListener('click', () => convertCase('lower'));
sentenceCaseBtn.addEventListener('click', () => convertCase('sentence'));
titleCaseBtn.addEventListener('click', () => convertCase('title'));
alternatingCaseBtn.addEventListener('click', () => convertCase('alternating'));
inverseCaseBtn.addEventListener('click', () => convertCase('inverse'));
copyTextBtn.addEventListener('click', copyText);
clearTextBtn.addEventListener('click', clearText);
modeToggleBtn.addEventListener('click', toggleMode);

// Convert Case Function
function convertCase(type) {
  const text = inputText.value;
  let convertedText = '';

  switch (type) {
    case 'upper':
      convertedText = text.toUpperCase();
      break;
    case 'lower':
      convertedText = text.toLowerCase();
      break;
    case 'sentence':
      convertedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      break;
    case 'title':
      convertedText = text.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
      break;
    case 'alternating':
      convertedText = text.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
      break;
    case 'inverse':
      convertedText = text.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
      break;
    default:
      convertedText = text;
  }

  outputText.value = convertedText;
}

// Copy Text Function
function copyText() {
  outputText.select();
  document.execCommand('copy');
  alert('Text copied to clipboard!');
}

// Clear Text Function
function clearText() {
  inputText.value = '';
  outputText.value = '';
}

// Toggle Night Mode Function
function toggleMode() {
  body.classList.toggle('night-mode');
  modeToggleBtn.textContent = body.classList.contains('night-mode') ? '☀️ Day Mode' : '🌙 Night Mode';
}