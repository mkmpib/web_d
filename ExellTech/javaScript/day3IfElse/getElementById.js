function check() {
   let a= document.getElementById("first").value;
    let b = document.getElementById("second").value;
     
    if (a == ""&& b=="") {
      document.getElementById("result").innerHTML = " Password is required ";
    } else if (a == "") {
      document.getElementById("result").innerHTML = "Please Enter The Password";
    } else if (b == "") {
      document.getElementById("result").innerHTML =
        "Please Confirm The Password";
    } else if (a == b) {
        document.getElementById("result").innerHTML = "Correct";
    } else {
      document.getElementById("result").innerHTML = "InCorrect";
    }
    
}