
const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const submitBtn = document.getElementById("submitBtn");
const successMessage = document.getElementById("successMessage");

function validateName() {
    const name = nameInput.value.trim();

    if (name === "") {
        nameError.textContent = "Name is required.";
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
        return false;
    }

    nameError.textContent = "";
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");

    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email is required.";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        return false;
    }

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        return false;
    }

    emailError.textContent = "";
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");

    return true;
}

function validatePassword() {
    const password = passwordInput.value;

    if (password.length < 6) {
        passwordError.textContent =
            "Password must be at least 6 characters.";
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        return false;
    }

    passwordError.textContent = "";
    passwordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");

    return true;
}

function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    const isFormValid =
        isNameValid && isEmailValid && isPasswordValid;

    submitBtn.disabled = !isFormValid;

    return isFormValid;
}

// Validate while the user types
nameInput.addEventListener("input", () => {
    successMessage.textContent = "";
    validateForm();
});

emailInput.addEventListener("input", () => {
    successMessage.textContent = "";
    validateForm();
});

passwordInput.addEventListener("input", () => {
    successMessage.textContent = "";
    validateForm();
});

// Validate when the form is submitted
form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    successMessage.textContent =
        "Registration successful!";

    form.reset();

    nameInput.classList.remove("valid");
    emailInput.classList.remove("valid");
    passwordInput.classList.remove("valid");

    submitBtn.disabled = true;
});
