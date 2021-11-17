
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
}

let text = document.getElementById("text");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");

start();

function start(); {}