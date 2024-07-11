// let a = "Hello Mohit";
// alert(a);
// check the age and give result the user is able to vote or not

// for inputing the value using the promt
document.write("mohit");
let age = prompt("Enter the age:");
if (age == 18) {
    document.write("You are able to vote")
}else if(age < 18)
{
    document.write("You are child");
}else (age > 70)
{
   document.write("You are too OLD ");
}