// @ts-check
'use strict';

function pageLoaded() {
  console.log('Page loaded!');
}

window.onload = pageLoaded;

const button = document.getElementById('the-button');

function buttonClicked() {
  console.log('Button clicked!');
}

if (button) {
  button.onclick = buttonClicked;
}

// Alternatively

/* window.onload = function () {
    console.log('Page loaded!');
};

button.onclick = function () {
    console.log('Button clicked!');
}; */
