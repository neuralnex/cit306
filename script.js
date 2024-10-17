// script.js
const form = document.getElementById('myForm');
const url = 'https://script.google.com/macros/s/AKfycbz_tBkrd5_G5lFntJa1apc6dq3W5IH2sADnP21wg81pJQTAxeZREuJ2UNNY7PRaKYSj/exec'; // Paste deployment URL

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});