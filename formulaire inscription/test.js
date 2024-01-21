let form = document.querySelector('form');
let errorContainer = document.querySelector('.error-container');
let errorMessage = document.querySelector('#error-message');
let successContainer = document.querySelector('.message-success');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    errorContainer.style.display = 'none';
    successContainer.style.display = 'none';

    let email = document.querySelector('#email');
    let pseudo = document.querySelector('#pseudo');
    let password = document.querySelector('#password');
    let passwordRepeat = document.querySelector('#password2');

    function showError(input) {
        input.classList.remove('success');
        input.classList.add('error');
    }

    function showSuccess(input) {
        input.classList.remove('error');
        input.classList.add('success');
    }

    function resetStyles() {
        email.classList.remove('success', 'error');
        pseudo.classList.remove('success', 'error');
        password.classList.remove('success', 'error');
        passwordRepeat.classList.remove('success', 'error');
    }

    resetStyles();

    let errors = [];

    if (email.value.trim() === '') {
        errors.push("Le champ email ne peut pas être vide");
        showError(email);
    } else {
        showSuccess(email);
    }

    if (pseudo.value.trim().length < 6) {
        errors.push("Le champ pseudo doit contenir au moins 6 caractères");
        showError(pseudo);
    } else {
        showSuccess(pseudo);
    }

    let passCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/;

    if (password.value.trim().length < 10 || !passCheck.test(password.value)) {
        errors.push("Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial");
        showError(password);
    } else {
        showSuccess(password);
    }

    if (passwordRepeat.value.trim() === '' || password.value !== passwordRepeat.value) {
        errors.push("Les mots de passe ne correspondent pas");
        showError(passwordRepeat);
    } else {
        showSuccess(passwordRepeat);
    }

    if (errors.length > 0) {
        errorContainer.style.display = 'block';
        errorMessage.innerText = errors.join('\n');
    } else {
        successContainer.classList.remove('error');
        successContainer.classList.add('success');
        successContainer.style.display = 'block';
    }
});
