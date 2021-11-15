function promptMe() {
    if (prompt ("Please enter the secret password (tip, where is R2D2)") == "May the force be with you"){
        window.location.href = "./page2.html";
    }
}

function pressR2d2() {
    alert ("Not yet, find the stormtrooper");
}

function pressStorm() {
    alert ("Password: May the force be with you");
}

function pressHead1() {
    alert ("Y")
}
function pressHead2() {
    alert ("M")
}
function pressHead3() {
    alert ("C")
}
function pressHead4() {
    alert ("A")
}
function typeAnswer() {
    if (prompt("Please enter the password") == "YMCA"){
        document.getElementById("ymcaSound").play();
        alert("Correct!");
        alert("Move to next task");
        window.location.href = "./page3.html";

    }
}