const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const users = {};

loginBtn.addEventListener('click', () => {
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
});

registerBtn.addEventListener('click', () => {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

const loginSubmit = document.getElementById('login-submit');
loginSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (users[username] && users[username].password === password) {
    alert(`Welcome, ${username}!`);
  } else {
    alert('Invalid username or password');
  }
});

const registerSubmit = document.getElementById('register-submit');
registerSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  if (users[username]) {
    alert('Username already exists');
    return;
  }

  users[username] = { password };
  alert(`User created successfully!`);
});