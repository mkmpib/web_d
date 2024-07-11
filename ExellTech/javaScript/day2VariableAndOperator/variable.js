// addition of two  njumber using let variable
// Let variable has local scope 
let a = 5;
let b = 9;
let c = a + b;
// let a = 5; // error show hoga kyoki iska local scope hai isem 2 bar let se ek hi variaBLE VALUE  nhi bta skte

console.log(c);
document.write(c);
document.write("<br>");// used for line break in UI window



// multiplication of two number using var
// var variable ka globle scope hai isme 2 baaar bhi variable value ko define kar skte hai

var n = 45;
var m = 34;
var k = n * m;
var n = 4;
document.write(n * m);
console.log(k);
document.write("<br>");
// const variable me value contant ho jati hai means we cant chanege that 
const x = 5;
// we want to change the value of x 
//  x = 56; // code nhi run hoga kyoki x ki value overwrite ho jayegi
document.write(x);
console.log(x);
document.write("<br>");

// comparison Opertor

//equal to == used for getting the value or check the value

let z = 12;
let v = 12;
let s = 11;
document.write("Check z is equl to v:");
document.write(z == v);// gives you true
document.write("<br>");
document.write("Check z is equl to s:");

document.write(z == s);// gives you false
document.write("<br>");

// === data type equl operator

let d = 12;
let f = "ram";
let g = 34;
document.write("Check  the data type of d is equl to data type of f: ");

document.write(d === f);// givs you false
document.write("<br>");
document.write("Check  the data type of d is equl to data type of g: ");
document.write(d === g);
document.write("<br>");

// assignment operator
let h = 3;
let j = 5;
h += j;// adding the a and b using assignment oprator
document.write("The addtion value of h and j using assignment oprator: ");
document.write(h);
document.write("<br>");

// check the age and give result the user is able to vote or not

// for inputing the value using the promt
// let age = prompt("Enter the age:");
// if (age == 18) {
//     document.write("You are able to vote")
// } elseif(age < 18)
// {
//     document.write("You are child");
// } else if(age >= 70)
// {
//    document.write("You are too OLD ");
// }



