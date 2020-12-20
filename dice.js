const roll1 = Math.ceil(6*Math.random());
const roll2 = Math.ceil(6*Math.random());
re(roll1, roll2);
var counter = 6;

function diceButton() {
    counter = 6;
    playDice();
    diceLoop = setInterval(playDice, 250);
    setTimeout(winner, 1550,roll1, roll2) 
}

function playDice() {
    const roll1 = Math.ceil(6*Math.random());
    const roll2 = Math.ceil(6*Math.random());
    re(roll1, roll2);
    counter--;
    if (counter === 0) {
    clearInterval(diceLoop);
    } 
}

function re(roll1, roll2) {
    switch(roll1){
        case 1: 
            document.getElementsByClassName('img1')[0].src='images/dice1.png';
            break;
        case 2: 
            document.getElementsByClassName('img1')[0].src='images/dice2.png';
            break;
        case 3: 
            document.getElementsByClassName('img1')[0].src='images/dice3.png';
            break;
        case 4: 
            document.getElementsByClassName('img1')[0].src='images/dice4.png';
            break;
        case 5: 
            document.getElementsByClassName('img1')[0].src='images/dice5.png';
            break;
        case 6: 
            document.getElementsByClassName('img1')[0].src='images/dice6.png';
    }
    switch(roll2){
        case 1: 
            document.getElementsByClassName('img2')[0].src='images/dice1.png';
            break;
        case 2: 
            document.getElementsByClassName('img2')[0].src='images/dice2.png';
            break;
        case 3: 
            document.getElementsByClassName('img2')[0].src='images/dice3.png';
            break;
        case 4: 
            document.getElementsByClassName('img2')[0].src='images/dice4.png';
            break;
        case 5: 
            document.getElementsByClassName('img2')[0].src='images/dice5.png';
            break;
        case 6: 
            document.getElementsByClassName('img2')[0].src='images/dice6.png';
    }
}

function winner(roll1, roll2){
    setTimeout(winner, 1500,roll1, roll2)
    if (roll1 > roll2){
        document.querySelector('h1').textContent = 'Player 1 Wins!'; 
    } else if (roll1 < roll2){
        document.querySelector('h1').textContent = 'Player 2 Wins!';
    } else if (roll1 = roll2){
        document.querySelector('h1').textContent = 'It is a tie!';
    }
}

/* The answer on Udemy
var roll1 = Math.floor(Math.random() * 6) + 1;
var roll1Image = "dice" + roll1 + ".png";
var roll1Source = "images/" + roll1Image;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", roll1Source);

var roll2 = Math.floor(Math.random() * 6) + 1;
var roll2Source2 - "images/dice" + roll2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); */