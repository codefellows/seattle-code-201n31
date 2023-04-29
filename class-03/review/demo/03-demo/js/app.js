'use strict';

let user = prompt('What is your name');

let score = 0;

while(!user){
    user = prompt('You can\'t see my site unles you give me your name ')
}

let favoriteFood = prompt('What is my favorite food').toLowerCase();

const myFavoriteFood = 'pizza'


switch(true){
    case 'pizza' == favoriteFood:
    alert('Yes my favorite food is piza');
    score++;
    console.log('YOUR SCORE IS ', score)
    break;

    case 'brussel sprouts' == favoriteFood:
    alert('I hate brussel sprouts');
    score--;
    console.log('YOUR SCORE IS ', score)
    break;
    
    default:
        alert('Nope my favorite food is pizza')
}


let favoriteGames = ['mario', 'dark souls', 'minecraft'];

let promptFavoriteGame = prompt('What is my favorite game').toLowerCase();

for(let i = 0; i < favoriteGames.length; i++){
    console.log('Input is:  ',promptFavoriteGame, 'CHECKING FOR ', favoriteGames[i] )
    if(promptFavoriteGame == favoriteGames[i]){
        score++;
        alert('Yes I love ' + promptFavoriteGame)
    }
}


let favoriteBandNames = [];


let answer1 = prompt('Tell me one of your favoite bands');

// favoriteBandNames.push(answer1)
let answer2 = prompt('Tell me another one of your favorite bands');
// favoriteBandNames.push(answer2)
let answer3 = prompt('Tell me again another one of your favorite bands');
// favoriteBandNames.push(answer3)


favoriteBandNames = [answer1, answer2, answer3];

console.log('Bands ',favoriteBandNames )


for(let i = 0; i < favoriteBandNames.length; i++){
    console.log(favoriteBandNames[i] )
    score++;
}

console.log('YOUR SCORE IS: ', score)


