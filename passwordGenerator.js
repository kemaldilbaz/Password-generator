const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
let passEl1 = document.getElementById("rect1");
let passEl2 = document.getElementById("rect2");

function getPassword1() {
    let password1 = "";
    for (let i = 0; i < 16; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password1 += characters[randomIndex];
    }
    passEl1.textContent = password1;
    return password1;
}

function getPassword2() {
    let password2 = "";
    for (let i = 0; i < 16; i++) {
        let randomIndex2 = Math.floor(Math.random() * characters.length);
        password2 += characters[randomIndex2];
    }
    passEl2.textContent = password2;
    return password2;
}

function getPasswords() {
    getPassword1();
    getPassword2();
}
