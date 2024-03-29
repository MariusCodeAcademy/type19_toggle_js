'use strict';
console.log('app.js file was loaded');

const btnEl = document.getElementById('btn');
const stateEl = document.getElementById('state');

let isItOn = true;

btnEl.addEventListener('click', () => {
  console.log('toggle');
  // isItOn = !isItOn;
  if (stateEl.innerText === 'on') {
    stateEl.innerText = 'off';
  } else {
    // jie greiciausiai galbut yra off
    stateEl.innerText = 'on';
  }
  // console.log('isItOn ===', isItOn);
  // stateEl.innerHTML = isItOn ? 'on' : 'off';
});
