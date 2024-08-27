'use strict';


console.log(document.querySelector('.message').textContent);


console.log('whats up');

let highScore = 0;

let score = document.querySelector('.score').textContent = 20;
console.log(score)

const secretNumberr = 4;
let secretNumber = Math.trunc(Math.random()*20) + 1 ;
// document.querySelector('.number').textContent = secretNumber;
const displayMessage = function (message){
    document.querySelector('.message').textContent =
    message;
}
const displayNumber = function (number){
    document.querySelector('.number').textContent =
    number;
}


document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value) ;
    console.log(guess, typeof guess)
    
    if (!guess){
        // document.querySelector('.message').textContent =
        //  'Invalid Input';
         displayMessage('Invalid Input')

         //when guess is right 
    }else if (guess === secretNumber){
        // document.querySelector('.message').textContent = 
        // '🥳✅ Congratulations youre correct.';
        displayMessage('🥳✅ Congratulations youre correct.')
        document.querySelector('.number').textContent = 
        secretNumber;
        document.querySelector('.number').style.width =
        '30rem';
        document.querySelector('body').style.backgroundColor = 
        'green';
        
        if (score > highScore){
            highScore = score ;
            document.querySelector('.highscore').textContent =
            highScore;
        }

        //when guess is wrong 
    } else if (guess !== secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 
            guess > secretNumber ? '📈Too high' : '📉Too low';
            score--;
            document.querySelector('.score').textContent = 
            score;
        }else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 
            'You Lost The Game';
            document.querySelector('body').style.backgroundColor = 
            'darkRed';
        }
    }
    // else if (guess > secretNumber){
    //     if (score > 1){
    //         document.querySelector('.message').textContent = 
    //         '📈Too high';
    //         score--;
    //         document.querySelector('.score').textContent = 
    //         score;
    //     }else {
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('.message').textContent = 
    //         'You Lost The Game';
    //         document.querySelector('body').style.backgroundColor = 
    //         'darkRed';
    //     }

       
    // }else if (guess < secretNumber){
    //     if (score > 1){
    //         document.querySelector('.message').textContent = 
    //         '📉 Too Low';
    //         score--;
    //         document.querySelector('.score').textContent = 
    //         score;
    //     }else {
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('.message').textContent = 
    //         'You Lost The Game';
    //         document.querySelector('body').style.backgroundColor = 
    //         'darkRed';
    //     }

       
    // } 
})

document.querySelector('.again').addEventListener
('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1 ;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 
    '#222';
    document.querySelector('.message').textContent =
    "Start guessing..."
    document.querySelector('.number').textContent = "?"
})









