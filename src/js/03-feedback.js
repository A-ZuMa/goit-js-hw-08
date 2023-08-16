var throttle = require('lodash.throttle');
const form_state = 'feedback-form-state';
const input = document.querySelector('input');
const message = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');

let data = JSON.parse(localStorage.getItem(form_state)) || {};
input.value = data.email || '';
message.value = data.message || '';
input.addEventListener('input', throttle(chkInput), 500);
message.addEventListener('input', throttle(chkMessage), 500);
form.addEventListener('submit', putUsrData);

function chkInput(evt) {
  data[evt.target.name] = evt.target.value;
  localStorage.setItem(form_state, JSON.stringify(data));
}

function chkMessage(evt) {
  data[evt.target.name] = evt.target.value;
  localStorage.setItem(form_state, JSON.stringify(data));
}

function putUsrData(evt) {
  evt.preventDefault();
  data = {};
  localStorage.setItem(form_state, JSON.stringify(data));
  form.reset();
}
