const form = document.querySelector('.login-form');
const email = document.querySelector('.login-form__email');
const password = document.querySelector('.login-form__password');
const formError = document.querySelector('.login-form__error');
const submit = document.querySelector('.login-form__submit');

let error = '';

const fetchUserLogin = async (email, password) => {
  let user = { email: email, password: password };
  const userCredentials = await fetch('http://localhost:4000/api/user/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  const userLoginResponse = await userCredentials.json();

  return userLoginResponse;
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
  const fetchResponse = fetchUserLogin(email.value, password.value)
    .then((data) => {
      console.log(data);
      switch (data.status) {
        case 401:
          error = data.error;
          formError.innerText = error;
          break;

        case 403:
          window.location.replace('./../pages/email-verify.html');
          break;

        default:
          document.cookie = `userId=${data.id}`;
          window.location.replace('./../pages/user-page.html');
          break;
      }
    })
    .catch((error) => console.log(error));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Yo');
});
