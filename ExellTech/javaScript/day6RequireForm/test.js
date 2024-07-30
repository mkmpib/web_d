function validation() {
    //event.preventDefault(); //prevent default from submission or blink screen
  var isValid = true;

  // contecting the input ids
  var name = document.getElementById("use").value;
  var pass = document.getElementById("pas").value;
  var cpass = document.getElementById("cpas").value;
  var emai = document.getElementById("ema").value;
  var numb = document.getElementById("num").value;
  // span ids
  var userr = (document.getElementById("userr").innerHTML = " ");
  var passer = (document.getElementById("passer").innerHTML = " ");
  var cpasser = (document.getElementById("cpasser").innerHTML = " ");
  var emailer = (document.getElementById("emailer").innerHTML = " ");
  var mobile = (document.getElementById("mobile").innerHTML = " ");

  // user validation
  if (name == "") {
    document.getElementById("userr").innerHTML = "Please enter the name";
    isValid = false;
  } else if (!isNaN(name)) {
    document.getElementById("userr").innerHTML = "Name  must be characters";
    isValid = false;
  } else if (name.length < 5 || name.length > 20) {
    document.getElementById("userr").innerHTML =
      "Name should be 5 to 20 characters long";
    isValid = false;
  }

  // password validation

  if (pass == "") {
    document.getElementById("passer").innerHTML = "Please enter the password";
    isValid = false;
  } else if (pass.length < 6) {
    document.getElementById("passer").innerHTML =
      "Password should be at least 6 characters long";
    isValid = false;
  }

  // confirm password

  if (cpass == "") {
    document.getElementById("cpasser").innerHTML =
      "Please Confirm Your Password";
    isValid = false;
  } else if (cpass != pass) {
    document.getElementById("cpasser").innerHTML =
      "Your confirm password does not match with your password";
    isValid = false;
  }

  // email

  if (emai == "") {
    document.getElementById("emailer").innerHTML = "Please Enter the Email";
    isValid = false;
  } else if (!emai.includes("@")) {
    document.getElementById("emailer").innerHTML =
      "Please Enter the  valid Email";
    isValid = false;
  } else if (emai.indexOf("@") <= 0) {
    document.getElementById("emailer").innerHTML = "Invalid Position Of @";
    isValid = false;
  }

  // number

  if (numb == "") {
    document.getElementById("mobile").innerHTML = "Please Enter the Number";
    return false;
  } else if (isNaN(numb)) {
    document.getElementById("mobile").innerHTML = "Number  must be integer";
    return false;
  } else if (numb.length <= 10) {
    document.getElementById("mobile").innerHTML =
      "Number should be at least 10 characters long";
    return false;
    }
    // for show the results
    document.getElementById("nm").innerHTML = name;
    document.getElementById("em").innerHTML = emai;
    document.getElementById("nmb").innerHTML = numb;
}
