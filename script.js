
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
