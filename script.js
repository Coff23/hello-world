function greeting(){
    let userName = prompt("Hello! What is your name?");
    console.log(userName);
    document.write("Hello, " + userName);
    return document.write();
}



function animalChoice(){
    let favAnimal = prompt("Which of these three animals do you like the most? Bush babies, owls, or dogs");
    console.log(favAnimal);
    if(favAnimal == "dogs"){
        document.write(" They are fascinating, did you know dogs were bread for different reason all coming from wolves originally!");
    }
    else if(favAnimal == "owls"){
        document.write(" They are fascinating, did you know they are able to rotate their head 270 degrees!");
    }
    else if(favAnimal == "bush babies"){
        document.write(" They are fascinating, did you know bush babies jump from tree to tree making it look like they are able to fly!");
    }
    else fix = prompt("Error " + favAnimal + " was not one of the options!");
    

    if(fix == "dogs"){
        document.write(" They are fascinating, did you know dogs were bread for different reason all coming from wolves originally!");
    }
    else if(fix == "owls"){
        document.write(" They are fascinating, did you know they are able to rotate their head 270 degrees!");
    }
    else if(fix == "bush babies"){
        document.write(" They are fascinating, did you know bush babies jump from tree to tree making it look like they are able to fly!");
    }
    else return animalChoice();
    
    return document.write();
}

function secretLinks(){
    let moreInfo = prompt("Wanna know a secret about this page? yes or no");
    console.log(moreInfo);
    if(moreInfo == "yes"){
        document.write(" Click the pictures!");
    }
    else document.write(" Fine I won't tell you...");
    return document.write();
}
