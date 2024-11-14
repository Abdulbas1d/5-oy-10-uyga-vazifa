const inputUser = document.querySelector("#user");
const inputPassword = document.querySelector("#password");
const btn = document.querySelector("#btn");
const errorMessage = document.querySelector("#error-message");

function validate(input) {
    if (input.value.trim() === "") {
        alert("Login yoki parol bo'sh bo'lmasligi kerak");
        input.focus();
        return false;
    }
    return true;
}

function getData() {
    let data = [];
    if (localStorage.getItem('loginData')) {
        data = JSON.parse(localStorage.getItem('loginData'));
    }
    return data;
}

btn && btn.addEventListener('click', function (event) {
    event.preventDefault();

    const isUserValid = validate(inputUser);
    const isPasswordValid = validate(inputPassword);

    if (!isUserValid || !isPasswordValid) {
        return;
    }

    const username = inputUser.value;
    const password = inputPassword.value;

    const name = "admin";
    const passwordEl = "123456";

    if (username === name && password === passwordEl) {
        window.location.href = './pages/main.html';
    } else {
        alert("Login yoki parolni noto'g'ri kiritdingiz. Iltimos qaytadan kiriting!");
        alert(`Siz Usernamega "admin" Passwordga esa "123456" kiritishingiz zarur!`)
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let users = getData();
    alert(`Siz Usernamega "admin" Passwordga esa "123456" kiritishingiz zarur!`)
});