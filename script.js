"use strict"
// console.log(document.querySelector(".message").textContent)
// console.log(document.querySelector(".message").textContent = "Correct Number")
// console.log(document.querySelector(".number").textContent = 15)
// console.log(document.querySelector(".guess").value = 20)

let secretnumber = Math.floor((Math.random()*20) + 1)
let score = 20
let highscore = 0
document.querySelector(".check").addEventListener("click",
function () {
    const guess = document.querySelector(".guess").value;
    if (!guess) {
        document.querySelector(".message").textContent = "Click Again"
        document.querySelector(".check").style.backgroundColor = "red"
    }
    else if (guess == secretnumber) {
        document.querySelector(".message").textContent = "🎉 Correct"
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").textContent = secretnumber
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore
        }
    }
    else if (parseInt(guess) + 3 == secretnumber || parseInt(guess) + 2 == secretnumber || parseInt(guess) + 1 == secretnumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Close but too low"
            score--
            document.querySelector(".score").textContent = score
        } 
        else{
            document.querySelector(".message").textContent = "You Lost!"
            document.querySelector(".score").textContent = 0
        }
    }
    else if (parseInt(guess) - 3 == secretnumber || parseInt(guess) - 2 == secretnumber || parseInt(guess) - 1 == secretnumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Close but too high"
            score--
            document.querySelector(".score").textContent = score
        } 
        else{
            document.querySelector(".message").textContent = "You Lost!"
            document.querySelector(".score").textContent = 0
        }
    }
    else if (guess > secretnumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too High"
            score--
            document.querySelector(".score").textContent = score
        }
        else{
            document.querySelector(".message").textContent = "You Lost!"
            document.querySelector(".score").textContent = 0
        }
    }
    else if (guess < secretnumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too Low"
            score--
            document.querySelector(".score").textContent = score
        } 
        else{
            document.querySelector(".message").textContent = "You Lost!"
            document.querySelector(".score").textContent = 0
        }
    }
});

document.querySelector(".again").addEventListener("click", 
function () {
    score = 20
    secretnumber = Math.floor((Math.random()*20) + 1)
    document.querySelector(".message").textContent = "Start Again ..."
    document.querySelector(".score").textContent = score
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".guess").value = ""
    document.querySelector(".number").textContent = "?"
} )