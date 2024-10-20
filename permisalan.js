function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var message = document.getElementById("message");

  const correctUsername = "admin";
  const correctPassword = "12345";

  if (!username && !password) {
    message.style.color = "red";
    message.textContent = "Harap Isi Username atau Password!";
    return false;
  }

  if (!username) {
    message.style.color = "red";
    message.textContent = "Harap Isi username!";
    return false;
  }

  if (!password) {
    message.style.color = "red";
    message.textContent = "Harap Isi password!";
    return false;
  }

  if (username === correctUsername && password === correctPassword) {
    message.style.color = "green";
    message.textContent = "Login Succes!";

    setTimeout(function () {
      window.location.href = "./dashboard/dashboard.html";
    }, 0);
  } else if (username !== correctUsername && password !== correctPassword) {
    message.style.color = "red";
    message.textContent = "Username atau Password salah!";

    setTimeout(function () {
      window.location.href = "./index.html";
    }, 0);
  }

  return false;
}
