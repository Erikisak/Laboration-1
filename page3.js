
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
}

function addLuke() {
    const addLuke = alert ("You have chosen Luke Skywalker");

    const choice1




}


function addObi() {
    const addObi = alert ("You have chosen Obi Wan Kenobi");

    const choice1 = prompt("Hello Master Kenobi! Do you want to use your force or your lightsaber"); 

    confirm("You choose" + " " + choice1);

    if(choice1 === "force") {
        const choice2 = prompt("Vader has attacked you! Use your force to 'push' him away or 'escape' ");
        if(choice2 === "push")
            alert("Vader gets pushed away and you can plan a new attack");
        if(choice2 === "escape")
            alert("You tried to escape but Vader used his forced to hurt you instead");
        
            
    }
    if(choice1 === "lightsaber") {
        const choice2 = prompt("You chose lightsaber! Now choose to 'attack' or 'block' Vader's attack ");
        if(choice2 === "attack")
            
        alert("You attacked Vader, but he blocked you");
        
        const choiceAgain = prompt("Choose 'attack again' or 'use the force'");

        if(choiceAgain === "attack again")
        alert("Vader cannot block you this time, he is defeated");
        if(choiceAgain === "use the force")
        alert("You used the force, but Vader is to strong! You are defeated! Try another character");


    }

}



function addYoda() {
    const addYoda = alert ("You have chosen Master Yoda");
    
    const choice1 = prompt("Hello Master Yoda! Do you want to use your 'force' or your 'lightsaber'"); 
    
    confirm("You choose" + " " + choice1);
    
    if(choice1 === "force") {
        const choice2 = prompt("How do you want to use your force? 'Attack' or 'Block'");
        
        if(choice2 === "attack") 
            alert("Good choice! Your attack is strong, too strong for Vader! He is defeated");
        
        if( choice2 === "block")
            alert("You tried to block Vader but he is too strong! You are defeated. Try again or another character")
  
            
    }
    if(choice1 === "lightsaber") {
        const choice3 = prompt("How to do want to use your lightsaber? Attack or Block");
        if(choice3 === "attack")
            alert("You hit Vader with your lightsaber and cut his hand off, Vader escapes");
        if(choice3 === "block")
            alert("You have to attack Vader! He is to strong for your block, you are defeated. Try again or another character");
    }

}