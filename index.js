const form = document.getElementById('registerForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const mesg= document.getElementById('submitMsg');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit',  async (e)=> {

  e.preventDefault();
  let valid = true;

  if (nameInput.value.trim().length < 4) {
    nameError.classList.remove('hidden');
    valid = false;
  } else {
    nameError.classList.add('hidden');
  }

  const emailPattern = /^[^@]+@(gmail\.com|yahoo\.com|hotmail\.com)$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.classList.remove('hidden');
    valid = false;
  } else {
    emailError.classList.add('hidden');
  }

  if (passwordInput.value.length < 8 || passwordInput.value.length > 12) {
    passwordError.classList.remove('hidden');
    valid = false;
  } else {
    passwordError.classList.add('hidden');
  }

  

  await fetch("https://backend-auth-9g0f.onrender.com/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: nameInput.value, email: emailInput.value, password: passwordInput.value })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
if (valid) {  
  form.classList.add('hidden');
  submitMsg.classList.remove('hidden');
}

});