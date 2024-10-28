// Function to generate a random captcha
function generateCaptcha() {
    const length = document.getElementById("captchaLength").value;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/~`";
    
    let characterSet = "";

    if (includeLowercase) characterSet += lowercase;
    if (includeUppercase) characterSet += uppercase;
    if (includeNumbers) characterSet += numbers;
    if (includeSymbols) characterSet += symbols;

    if (characterSet.length === 0) {
        alert("Please select at least one character type.");
        return;
    }

    let captcha = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        captcha += characterSet[randomIndex];
    }

    document.getElementById("captchaText").innerText = captcha;
}

// Function to verify the entered captcha
function verifyCaptcha() {
    const captchaText = document.getElementById("captchaText").innerText;
    const userInput = document.getElementById("userInput").value;
    const resultMessage = document.getElementById("resultMessage");

    if (userInput === captchaText) {
        resultMessage.style.color = "green";
        resultMessage.innerText = "Captcha Verified Successfully!";
    } else {
        resultMessage.style.color = "red";
        resultMessage.innerText = "Captcha Mismatch! Please try again.";
    }
}

// Initial captcha generation
generateCaptcha();
