const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

// Move passwordLength declaration to the top and rename it
const passwordLength = 12;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const output1El = document.getElementById("output1-el");
    const output2El = document.getElementById("output2-el");

    function getRandomCharacter() {
        const randomChar = Math.floor(Math.random() * characters.length);
        return characters[randomChar];
    }

    function generateRandomPassword() {
        let randomPassword = "";
        let randomPassword2 = "";
        for (let i = 0; i < passwordLength; i++) {
            randomPassword += getRandomCharacter();
            randomPassword2 += getRandomCharacter();
        }
        output1El.textContent = randomPassword;
        output2El.textContent = randomPassword2;
    }

    // Add click event listener to the button
    document.querySelector('button').addEventListener('click', generateRandomPassword);
});



