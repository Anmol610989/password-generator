// // const passwordLenght = 12;
// // const includeLowercase = true;
// // const incluseUppercase = true;
// // const includeSymbols = true;

// // function passwordGenerator(){

// // }

// const passwordLength = document.getElementById("inputId");
// const includeLowercase = document.getElementById("chkBtn1");
// const includeUppercase = document.getElementById("chkBtn2");
// const includeNumbers = document.getElementById("chkBtn3");
// const includeSymbols = document.getElementById("chkBtn4");
// const result = document.getElementById("result");
// const submit =  document.getElementById("submitBtn");

// // console.log(submit);
// // console.log(passwordLength);
// // console.log(includeLowercase);
// // console.log(includeUppercase);
// // console.log(includeNumbers);
// // console.log(includeSymbols);
// // console.log(result);

// let passwords = "";

// const abc = submit.addEventListener('click', function generatePassword(passwordLength,
//                         includeLowercase,
//                         includeUppercase,
//                         includeNumbers,
//                         includeSymbols){

//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+-=";

//     let allowedChars = "";

//     if(includeLowercase = true){
//         allowedChars += lowercaseChars;
//     }
//     // allowedChars += includeLowercase ? lowercaseChars : "";
//     // allowedChars += includeUppercase ? uppercaseChars : "";
//     // allowedChars += includeNumbers ? numberChars : "";
//     // allowedChars += includeSymbols ? symbolChars : "";

//     if(passwordLength <= 0){
//         return `(password length must be at least 1)`;
//     }
//     if(allowedChars.length === 0){
//         return `(At least 1 set of character needs to be selected)`;
//     }

//     for(let i = 0; i < length; i++){
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         passwords += allowedChars[randomIndex];
//     }

//     return passwords;

// })
// // const xyz = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
// console.log(abc);
// result.textContent = `${passwords}`;

// console.log(abc);

// const passwordLength = 10;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const passwords = generatePassword(passwordLength.value,
//                              includeLowercase,
//                              includeUppercase,
//                              includeNumbers,
//                              includeSymbols);

// console.log(`Generated password: ${passwords}`);

// a = "abcdefghijkl"
// function truncatestr(str, num){
//     if(str.length > num){
//         let substr = str.substring(0, num);
//         return substr;
//     }
//     else{
//         return str
//     }
// }

// console.log(truncatestr(a, 10))
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=";

const includeLowercase = document.getElementById("chkBtn1");
const includeUppercase = document.getElementById("chkBtn2");
const includeNumbers = document.getElementById("chkBtn3");
const includeSymbols = document.getElementById("chkBtn4");
let inputValue = document.getElementById("inputId");

// console.log(includeLowercase)
const submit = document.getElementById("submitBtn");

// const result = document.querySelector('span');

function passwordGenerator(pasLen) {
  let password = "";
  let allowedChars = "";

  if (includeLowercase.checked) {
    allowedChars += lowercaseChars;
  }

  if (includeUppercase.checked) {
    allowedChars += uppercaseChars;
  }

  if (includeNumbers.checked) {
    allowedChars += numberChars;
  }

  if (includeSymbols.checked) {
    allowedChars += symbolChars;
  }

  if (pasLen <= 0) {
    window.alert("Input password length");
  }

  if (allowedChars.length == 0) {
    window.alert("Select some characters");
  } else {
    for (let i = 0; i < pasLen; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }
    document.getElementById("result").textContent = password;
  }

  includeLowercase.checked = false;
  includeUppercase.checked = false;
  includeNumbers.checked = false;
  includeSymbols.checked = false;
  inputValue.value = "";
}

const abc = submit.addEventListener("click", function () {
  passwordGenerator(inputValue.value);
});
