const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateButton = document.getElementById("generatePassword");

let passwordArray = []
let passwordTwoArray = []

let passwordOne = document.getElementById("passwordOne");
let passwordTwo = document.getElementById("passwordTwo");

let passwordMessage = document.getElementById("passwordMessage");
let passwordMessageTwo = document.getElementById("passwordMessageTwo");

let passwordLength = document.getElementById("passwordLength");
let passwordLengthValue = passwordLength.value;
passwordLength.addEventListener("change", (event) => {
    passwordLengthValue = event.target.value;
})
let isEmpty = true;

generateButton.addEventListener("click", function password() {
    if (passwordLengthValue != " " && isEmpty === true) {
        for (let index = 0; index < passwordLengthValue; index++) {
            let passwordIndex = Math.floor(Math.random() * characters.length);
            passwordArray.push(passwordIndex);
        }
        for (let index = 0; index < passwordArray.length; index++) {
            let passwordArrayIndex = passwordArray[index];
            passwordOne.textContent += characters[passwordArrayIndex];
            console.log(passwordOne.textContent)
        } 
    }
})
generateButton.addEventListener("click", function secondPassword() {
    if (passwordLengthValue != " " && isEmpty === true) {
        for (let index = 0; index < passwordLengthValue; index++) {
            let passwordTwoIndex = Math.floor(Math.random() * characters.length);
            passwordTwoArray.push(passwordTwoIndex);
        }
        for (let index = 0; index < passwordArray.length; index++) {
            let passwordTwoArrayIndex = passwordTwoArray[index];
            passwordTwo.textContent += characters[passwordTwoArrayIndex];
            console.log(passwordTwo.textContent)
        }
        isEmpty = false;
    } else {
        passwordMessage.textContent = "Your password has been generated";
        passwordMessageTwo.textContent = "Refresh to get a new password";
        passwordMessage.style.color = "#4bde88";
        passwordMessageTwo.style.color = "#4bde88";
    }
})

