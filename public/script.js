
// ----------------------VALIDATION--------------------
const validateUserName = () => {
  let text = document.querySelector("#text").value;
  if (text[0] === text[0].toUpperCase()) {
    return true;
  } else {
    alert("Enter First letter capital of full name.");
    return false;
  }
};

const validatePassword = () => {
  let password = document.querySelector("#password").value;
  if (
    password.length >= 8 &&
    password.match(/[0-9]/g) &&
    password.match(/[a-z]/g) &&
    password.match(/[A-Z]/g) &&
    password.match(/[^a-zA-Z\d]/g)
  ) {
    console.log("validatePassword Function called");
    return true;
  } else {
    alert(
      "Password Should Contain Atleast 1 Number, 1 Upppercase Letter, 1 Lowercase Letter, 1 Special Character and Length of 8 Characters or more."
    );
    return false;
  }
};

const confirmPassword = () => {
  let password = document.querySelector("#password");
  let repeatPassword = document.querySelector("#repeatPassword");

  if (password.value == repeatPassword.value) {
    return true;
  } else {
    alert("Confirm password should be equal to password");
    return false;
  }
};

// --------------------VALIDATION FOR SIGN UP FORM
const signUpValidation = () => {
  if(validateUserName() && validatePassword() && confirmPassword() ){
    return true;
  }else{
    return false;
  }
}
