const roll1 = Math.ceil(6*Math.random());
const roll2 = Math.ceil(6*Math.random());
re(roll1, roll2);

function diceButton() {
    const roll1 = Math.ceil(6*Math.random());
    const roll2 = Math.ceil(6*Math.random());
    re(roll1, roll2);
    winner(roll1, roll2);
}

function re(roll1, roll2) {
    console.log("This is roll 1: ", roll1);
    console.log("This is roll 2: ", roll2);
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
    if (roll1 > roll2){
        document.querySelector('h1').textContent = 'Player 1 Wins!';  
    } else if (roll1 < roll2){
        document.querySelector('h1').textContent = 'Player 2 Wins!';
    } else if (roll1 = roll2){
        document.querySelector('h1').textContent = 'It is a tie!';
    }
}