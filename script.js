// Assignment Code

var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "1234567890"
var special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword () {
   passwordCriteria = getPasswordCriteria()
   
   var generatePwd = confirm(`You have chosen:
   ${passwordCriteria.length} characters in length with the following properties:

   Lowercase Characters: ${passwordCriteria.hasLowercase}
   Uppercase Characters: ${passwordCriteria.hasUppercase}
   Numeric Characters: ${passwordCriteria.hasNumeric}
   Special Characters: ${passwordCriteria.hasSpecial}
   
   Would you like to generate this password?`)

   if (generatePwd) {
        var password = randomizePassword(passwordCriteria)
        return password
   } else {
       alert("Okay we won't generate your password, come back later.")
   }
};

function getPasswordCriteria () {
    var password = {
        length: getLength(),
        hasLowercase: confirm("Would you like the password to contain Lowercase characters?"),
        hasUppercase: confirm("Would you like the password to contain Uppercase characters?"),
        hasNumeric: confirm("Would you like the password to contain Numeric characters?"),
        hasSpecial: confirm("Would you like the password to contain Special characters?")
   }

   if (password.hasLowercase || password.hasUppercase || password.hasNumeric || password.hasSpecial) {
       return password
   } else {
       alert("Your password must contain at least one character type. Try again.")
       password = getPasswordCriteria()
       return password
   }
}

function getLength () {
    var input = prompt("Enter a password length between 8 and 128 characters")
    

    if (input == null) {
        alert("You must enter a value")
        input = getLength()
        return input
    } else if (input < 8 || input > 128) {
        alert("Invalid value entered, please enter a value between 8 and 128")
        input = getLength()
        return input
    } else {
        alert(`You chose a password length of ${input} characters`)
        return input
    }
}

function randomizePassword(criteria) {
    var length = criteria.length
    var password = "";
    var string = "";
    
    if (criteria.hasLowercase) {
        string += lowercase
    }

    if (criteria.hasUppercase) {
        string += uppercase
    }

    if (criteria.hasNumeric) {
        string += numeric
    }

    if (criteria.hasSpecial) {
        string += special
    }

    for (var i = 0; i < length; i++) {
        var char = Math.floor(Math.random()*string.length + 1)

        password += string.charAt(char)
    }
    return password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
