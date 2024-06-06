function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const button = document.querySelector(`button[id="toggle${inputId.replace("input", "")}"]`);
    if (input.type === "password") {
        input.type = "text";
        button.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        input.type = "password";
        button.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

function toggleConfirmPasswordVisibility() {
    const input = document.getElementById('inputConfirmPassword');
    const button = document.getElementById('toggleConfirmPassword');
    if (input.type === "password") {
        input.type = "text";
        button.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        input.type = "password";
        button.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

function registerUser() {
    const username = document.getElementById('inputUsername').value.trim();
    const email = document.getElementById('inputEmail').value.trim();
    const password = document.getElementById('inputPassword').value.trim();
    const confirmPassword = document.getElementById('inputConfirmPassword').value.trim();

    if (username && email && password && confirmPassword && password === confirmPassword) {
        window.location.href = '../login/login.html';
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
}

document.getElementById('togglePassword').addEventListener('click', () => togglePasswordVisibility('inputPassword'));
document.getElementById('toggleConfirmPassword').addEventListener('click', toggleConfirmPasswordVisibility);
document.getElementById('registerButton').addEventListener('click', registerUser);

function redirectToLogin() {
    setTimeout(function() {
        window.location.href = '../login/login.html';
    }, 2000);
}

function registerUser() {
    const username = document.getElementById('inputUsername').value.trim();
    const email = document.getElementById('inputEmail').value.trim();
    const password = document.getElementById('inputPassword').value.trim();
    const confirmPassword = document.getElementById('inputConfirmPassword').value.trim();

    if (username && email && password && confirmPassword && password === confirmPassword) {
        redirectToLogin();
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
}

document.getElementById('registerButton').addEventListener('click', registerUser);
