// @ts-check
'use strict';

const col = document.getElementsByTagName('a');

for (const a of col) {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    alert(e.target.href);
  });
}

document.addEventListener('click', () => {
  console.log('click');
});
