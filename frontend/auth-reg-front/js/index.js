const form = document.querySelector('.login-form');
const email = document.querySelector('.login-form__email');
const password = document.querySelector('.login-form__password');
const formError = document.querySelector('.login-form__error');
const submit = document.querySelector('.login-form__submit');

let error = '';

const fetchUserLogin = async (email, password) => {
  let user = { email: email, password: password };
  const userCreadentials = await fetch(
    'http://localhost:4000/api/user/signin',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }
  );

  const userLoginResponse = await userCreadentials.json();

  console.log(userLoginResponse);
};

email.addEventListener('focusout', (e) => {
  if (email.value == '') {
    error = 'Please fill up email';
    email.style.border = '3px solid red';
    formError.style.color = 'red';
    formError.innerText = error;
  }
  error = '';
});

password.addEventListener('focusout', (e) => {
  if (password.value == '') {
    error = 'Please fill up password';
    password.style.border = '3px solid red';
    formError.style.color = 'red';
    formError.innerText = error;
  }
  error = '';
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  fetchUserLogin(email.value, password.value);
});
