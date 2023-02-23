// let myName = "Josh";
// alert("Welcome to my website!");

// // let and const only in 102
// // let can be changed
// // const cant change

// // Data types
// // string   "text" or "numbers"
// // numbers   numbers 123 etc
// // boolean   true of false

// console.log("Hello world!");

// let myFavColor = "cyan";
// console.log(myFavColor);

// let myAge = 28; 
// // input from user

// let userName = prompt("What is your name?");
// console.log(userName);

// alert("Hello, " + userName);

// // writing to the html doc

// document.write("Hello World");

let userName = prompt("Hello! What is your name?");
console.log(userName);
document.write("Hello, " + userName);

let favAnimal = prompt("Hello, " + userName + " which of these three animals do you like the most? Bush babies, owls, or dogs");
console.log(favAnimal)
document.write(" They are fascinating, did you know")

if(favAnimal == "dogs"){
    document.write(" dogs were bread for different reason all coming from wolves originally!");
}
else if(favAnimal == 'bush babies'){
    document.write(" bush babies jump from tree to tree making it look like they are able to fly!");
}
else document.write(" they are able to rotate their head 270 degrees!");

let moreInfo = prompt("Wanna know a secret about this page? yes or no")
if(moreInfo == "yes"){
    document.write(" Click the pictures!")
}
else document.write(" Fine I won't tell you...")
