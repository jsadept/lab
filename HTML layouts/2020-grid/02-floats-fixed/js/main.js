'use strict';

var buttons = document.querySelectorAll('.btn');
var display = document.getElementById('current');
var firstHistory = document.getElementById('history-1');
var secondHistory = document.getElementById('history-2');
buttons.forEach(function (button) {
  return button.addEventListener('click', function () {
    return todo(button.value);
  });
});

function todo(arg) {
  if (arg == 'equal') {
    calc();
  } else if (arg == 'clear') {
    clear();
  } else if (arg == 'dis') {
    return;
  } else {
    toDisplay(arg);
  }
}

function toDisplay(number) {
  if (Number.isInteger(+number) && display.textContent == "0") {
    display.textContent = "";
    display.textContent = String(number);
  } else if (number == "0" && display.textContent == '0') {
    display.textContent = "0";
  } else {
    display.textContent += String(number);
  }
}

function clear() {
  display.textContent = "0";
}

function calc() {
  var history = display.textContent,
      a = antiEval();
  display.textContent = +a.toFixed(5);
  toHistory(history + "=" + display.textContent);
}

function antiEval() {
  try {
    return Function("'use strict'; return ".concat(display.textContent))();
  } catch (e) {
    clear();
  }
}

function toHistory(string) {
  if (firstHistory.textContent) {
    toSecondHistory(firstHistory.textContent);
    firstHistory.textContent = string;
  }

  firstHistory.textContent = string;
}

function toSecondHistory(string) {
  secondHistory.textContent = string;
} 

