

const test = require('../scrape');
alert(test);
console.log('Client-side code running');

const button = document.getElementById('click');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
  console.log(m);
});

console.log(m);