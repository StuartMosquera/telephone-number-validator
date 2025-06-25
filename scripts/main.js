const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

const countryCode = '(1\\s?)?';
const areaCode = '(\\(\\d{3}\\)|\\d{3})';
const space = '[\\s\\-]?';
const telephonePrefix = '\\d{3}';
const lineNumber = '\\d{4}';

const PHONE_REGEX = new RegExp(
  `^${countryCode}${areaCode}${space}${telephonePrefix}${space}${lineNumber}$`
);

function checkValue(value) {
  if (!value) {
    alert('Please provide a phone number');
    return;
  }

  if (PHONE_REGEX.test(value)) {
    displayResult(`Valid US number: ${value}`);
  } else {
    displayResult(`Invalid US number: ${value}`);
  }

  userInput.value = '';
};

function displayResult(message) {
  const pTag = document.createElement('p');
  pTag.textContent = message;

  if (message.includes('Valid')) {
    pTag.className = 'valid-p';
  }

  resultsDiv.appendChild(pTag);
}

const clearValues = () => resultsDiv.innerHTML = '';

checkBtn.onclick = () => checkValue(userInput.value);

clearBtn.onclick = () => clearValues();

userInput.onkeydown = function(event) {
  if (event.key === 'Enter') {
    checkValue(userInput.value);
  }

  if (event.key === 'Delete') {
    clearValues();
  }
};
