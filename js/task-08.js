const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();

  const useremail = event.target.elements.email;
  const userpassword = event.target.elements.password;

  if (!useremail.value || !userpassword.value) {
    alert("Всі поля мають бути заповнені");
  } else {
    console.log({
      useremail: useremail.value,
      userpassword: userpassword.value,
    });
    event.target.reset();
  }
}
