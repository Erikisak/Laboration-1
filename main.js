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

function pressHead() {
    const firstClue = prompt ("Please enter first clue")
    document.getElementsByClassName("first button")

}