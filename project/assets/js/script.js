const form = document.getElementById("form");
const eyeIcon = document.getElementById("eye-icon");
const passwordField = document.getElementById("password");
const username = document.getElementById("username");
const passwordInput = document.getElementById("password");
const userLabel = document.getElementById("userLabel");
const passLabel = document.getElementById("passLabel");
const userError = document.getElementById("userError");
const passError = document.getElementById("passError");
const button = document.getElementById("button");
const correctUsername = "09123456789";
const correctPassword = "123456";

function showUserError() {
    userLabel.classList.add("error-label");
    username.classList.add("error-input");
    userError.style.display = "flex";
}

function showPassError() {
    passLabel.classList.add("error-label");
    passwordInput.classList.add("error-input");
    passError.style.display = "flex";
}

function clearUserError() {
    userLabel.classList.remove("error-label");
    username.classList.remove("error-input");
    userError.style.display = "none";
}

function clearPassError() {
    passLabel.classList.remove("error-label");
    passwordInput.classList.remove("error-input");
    passError.style.display = "none";
}

function disableButton() {
    button.disabled = true;
    button.classList.add("disabled");
}

function enableButton() {
    button.disabled = false;
    button.classList.remove("disabled");
}

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // ابتدا خطاهای قبلی را پاک کن و دکمه را فعال کن
        clearUserError();
        clearPassError();
        enableButton();

        const userVal = username.value.trim();
        const passVal = passwordInput.value.trim();

        let hasError = false;

        // چک خالی بودن
        if (userVal === "") {
            showUserError();
            hasError = true;
        }

        if (passVal === "") {
            showPassError();
            hasError = true;
        }

        // چک اشتباه بودن (فقط اگر خالی نباشد خطا نشان بده)
        if (userVal !== "" && userVal !== correctUsername) {
            showUserError();
            hasError = true;
        }

        if (passVal !== "" && passVal !== correctPassword) {
            showPassError();
            hasError = true;
        }

        if (hasError) {
            disableButton();
            return;
        }

        // همه چیز درست است → برو به صفحه بعدی
        window.location.href = "main.html";
    });
}

username.addEventListener("focus", () => {
    clearUserError();
    enableButton();
});

passwordInput.addEventListener("focus", () => {
    clearPassError();
    enableButton();
});

if (eyeIcon && passwordField) {
    eyeIcon.addEventListener("click", () => {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            eyeIcon.src = "./assets/icon/eye-open.svg";
        } else {
            passwordField.type = "password";
            eyeIcon.src = "./assets/icon/eye-closed.svg";
        }
    });
}