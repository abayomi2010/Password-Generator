// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password
  let length = parseInt(
    prompt("Enter the number of characters in the password: ")
    )
  
    // Check if length of password is a number
  if (isNaN(length)) {
    alert("Please enter a valid number.");
    return;
  }

  // Check if length of password is less than 10
  if (length < 10){
    alert("Please enter a password with at least 10 characters.");
    return;
  }

    // Check if length of password is gretaer than 64
  if (length > 64) {
    alert("Please enter a password with no more than 64 characters.");
    return;
  }


  // Ask the user to confirm the password characters they want
  let hasSpecialCharacters = confirm(
    "Press OK to include special characters"
  )

  let hasNumericCharacters = confirm(
    "Press OK to include numeric characters"
  )

  let hasLowerCaseCharacters = confirm(
      "Press OK to include lowercase characters"
    )

  let hasUpperCaseCharacters = confirm(
      "Press OK to include uppercase characters"
    )

  // Check if user chose a character type
  if (hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters === false && 
    hasNumericCharacters === false && 
    hasSpecialCharacters === false) {
      alert("Please select at least one character type.");
      return;
 
    }

  let passwordOptions = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasLowerCaseCharacters: hasLowerCaseCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasUpperCaseCharacters: hasUpperCaseCharacters
}

  // console.log(passwordOptions)

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  let randomElement = arr[index];
return randomElement;

}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();

  let result = [];

  let possibleCharacters = [];

  let guaranteedCharacters = [];

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters))
  }

  if (options.hasLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters))
  }

  if (options.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters))
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }


  for (let i = 0; i < options.length; i++) {
    let generatedCharacter = getRandom(possibleCharacters);
    result.push(generatedCharacter);
    
  }

  return result.join("")
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
