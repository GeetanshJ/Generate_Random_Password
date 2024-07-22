document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.createElement('button');
    toggleThemeButton.textContent = 'Toggle Theme';
    toggleThemeButton.style.position = 'fixed';
    toggleThemeButton.style.top = '20px';
    toggleThemeButton.style.right = '20px';
    toggleThemeButton.style.padding = '10px';
    toggleThemeButton.style.border = 'none';
    toggleThemeButton.style.borderRadius = '5px';
    toggleThemeButton.style.cursor = 'pointer';
    toggleThemeButton.style.backgroundColor = 'blue';
    toggleThemeButton.style.color = 'white';
    toggleThemeButton.style.fontSize = '16px';
    document.body.appendChild(toggleThemeButton);

    toggleThemeButton.addEventListener('click', () => {
        document.querySelector('.container').classList.add('theme-transition');
        setTimeout(() => {
            document.body.classList.toggle('theme-dark');
            document.querySelector('.container').classList.remove('theme-transition');
        }, 1000);
    });
});

function validatePassword() {
    const password = document.getElementById('password').value;
    const lengthCondition = document.getElementById('lengthCondition');
    const uppercaseCondition = document.getElementById('uppercaseCondition');
    const lowercaseCondition = document.getElementById('lowercaseCondition');
    const digitCondition = document.getElementById('digitCondition');
    const specialCharCondition = document.getElementById('specialCharCondition');

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    lengthCondition.classList.toggle('valid', password.length >= 6);
    lengthCondition.classList.toggle('invalid', password.length < 6);

    uppercaseCondition.classList.toggle('valid', hasUpperCase);
    uppercaseCondition.classList.toggle('invalid', !hasUpperCase);

    lowercaseCondition.classList.toggle('valid', hasLowerCase);
    lowercaseCondition.classList.toggle('invalid', !hasLowerCase);

    digitCondition.classList.toggle('valid', hasDigit);
    digitCondition.classList.toggle('invalid', !hasDigit);

    specialCharCondition.classList.toggle('valid', hasSpecialChar);
    specialCharCondition.classList.toggle('invalid', !hasSpecialChar);
}
