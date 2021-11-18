
window.onload = main;

function main () {
    addEventListeners()
}

function addEventListeners() {
    const lukeSkywalker = document.getElementById("luke");
    lukeSkywalker.onclick = addLuke;

    const obiWanKenobi = document.getElementById("obi-wan");
    obiWanKenobi.onclick = addObi;

    const masterYoda = document.getElementById("yoda");
    masterYoda.onclick = addYoda;

    const secretPassword = document.getElementById("password");
    secretPassword.onclick = addPassword;
}

function addLuke() {
    const addLuke = alert ("You have chosen Luke Skywalker");

    const choice1 = prompt("Hello Master Luke! Do you want to use your 'force' or your 'lightsaber'");

    confirm("You choose" + " " + choice1);

    if(choice1 === "force"){
        const choice2 = prompt("Luke! You need to defeat Vader, use your force to 'push' Vader or 'pull' an object on him");
        if(choice2 === "push")
            alert("You pushed Vader, but he is too strong! Vader attacks you and defeats you. Try again or another character");
        if(choice2 === "pull")
            alert("Pull an object on Vader is a bad choice, he defeats you by this. Try again or another character");
    }

    if(choice1 === "lightsaber") {
        const choice3 = prompt("Luke is strong with his lightsaber, use your lightsaber to 'attack' or 'block'");
        if (choice3 === "attack")
            alert("Your attack is strong! Vader is defeated! Password: starwars ");
        if (choice3 === "block")
            alert("It is never good to block Vader, he is too strong and defeats you. Try again or another character");
    }






}


function addObi() {
    const addObi = alert ("You have chosen Obi Wan Kenobi");

    const choice1 = prompt("Hello Master Kenobi! Do you want to use your 'force' or your 'lightsaber'"); 

    confirm("You choose" + " " + choice1);

    if(choice1 === "force") {
        const choice2 = prompt("Vader has attacked you! Use your force to 'push' him away or 'escape' ");
        if(choice2 === "push")
            alert("Vader gets pushed away and you can plan a new attack");
        if(choice2 === "escape")
            alert("You ran away! Try another character");          
    }

    if(choice1 === "lightsaber") {
        const choice2 = prompt("You chose lightsaber! Now choose to 'attack' or 'block' Vader's attack ");
        
        if(choice2 === "attack")    
        
        alert("You attacked Vader, but he blocked you! Try again or another character");
        
        if(choice2 === "block")
        
        alert("Your block gets Vader on the ground, he is defeated! Password: starwars")

    }

}



function addYoda() {
    const addYoda = alert ("You have chosen Master Yoda");
    
    const choice1 = prompt("Hello Master Yoda! Do you want to use your 'force' or your 'lightsaber'"); 
    
    confirm("You choose" + " " + choice1);
    
    if(choice1 === "force") {
        const choice2 = prompt("How do you want to use your force? 'Attack' or 'Block'");
        
        if(choice2 === "attack") 
            alert("Good choice! Your attack is strong, too strong for Vader! He is defeated! password: starwars");
        
        if( choice2 === "block")
            alert("You tried to block Vader but he is too strong! You are defeated. Try again or another character");
  
            
    }
    if(choice1 === "lightsaber") {
        const choice3 = prompt("How to do want to use your lightsaber? 'attack' or 'block'");
        if(choice3 === "attack")
            alert("You hit Vader with your lightsaber and cut his hand off, Vader is defeated. Password: starwars");
        if(choice3 === "block")
            alert("You have to attack Vader! He is to strong for your block, you are defeated. Try again or another character");
    }

}

function addPassword() {
    if (prompt ("Please enter the secret password") == "starwars"){
        window.location.href = "./page4.html";
    }
}