
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
}
function addObi() {
    const addObi = alert ("You have chosen Obi Wan Kenobi");
}

function addYoda() {
    const addYoda = alert ("You have chosen Master Yoda");
    
    const choice1 = prompt("Hello Master Yoda! Do you want to use your force or your lightsaber"); 
    
    confirm("You choose" + " " + choice1);
    
    if(choice1 === "force") {
        const choice2 = prompt("How do you want to use your force? Attack or Block");
        if(choice2 === "attack") 
            alert("Vader gets pushed to the ground");
        if( choice2 === "block")
            alert("Vader attacks you but you manage to block him");
        else if(choice2)
            alert("Wrong choice, Vader defeated you");
    }
    if(choice1 === "lightsaber") {
        const choice3 = prompt("How to do want to use your lightsaber? Attack or Block");
        if(choice3 === "attack")
            alert("You hit Vader with your lightsaber and cut his hand off");
        if(choice3 === "block")
            alert("Vader attacks you but you manage to block him");
        else if(choice3)
            alert("Wrong choice, Vader defeated you");
    }


}