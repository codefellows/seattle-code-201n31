/***** DOM SELECTORS ****/

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let showResultsBtn = document.getElementById('show-results-btn');
let resultsContainer = document.getElementById('results-container');




/***** GOAT CONSTURCTOR  ****** */

let allGoats = [];
let maxCount = 15;
let count = 0;

function Goat(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.votes = 0;
}



/*** CLICK EVENT LISTENER */

function handleClick (event) {
if(count < maxCount){
    console.log(event);


    for(let i = 0 ; i < allGoats.length; i++){
      if(event.target.title === allGoats[i].name){
        allGoats[i].votes++;
      }
    }
    console.log(allGoats);


    renderImg();
    count++;
}
else{
showResultsBtn.style.display = "block"
}
}

imgOne.addEventListener('click', handleClick);
imgTwo.addEventListener('click', handleClick);


/****** HELPER FUNCTIONS *****/

function renderImg() {
  let imgOneIndex = Math.floor(Math.random() * allGoats.length);
  let imgTwoIndex = Math.floor(Math.random() * allGoats.length);

  imgOne.src = allGoats[imgOneIndex].src;
  imgOne.title = allGoats[imgOneIndex].name;
  imgTwo.src = allGoats[imgTwoIndex].src;
  imgTwo.title = allGoats[imgTwoIndex].name;

  while (imgOneIndex === imgTwoIndex){
    imgTwoIndex = Math.floor(Math.random() * allGoats.length);
    imgTwo.src = allGoats[imgTwoIndex].src;
    imgTwo.title = allGoats[imgTwoIndex].name;
  }

  allGoats[imgOneIndex].views++;
  allGoats[imgTwoIndex].views++;
}
//TODO: make a function that will render two random goats
//TODO: Get a random goat from the allGoats array
//TODO: make a function that will render the results


let bunnyGoat = new Goat('bunny-goat', 'img/bunny-goat.png');
allGoats.push(bunnyGoat);
let coolGoat = new Goat('cool-goat', 'img/cool-goat.jpg');
allGoats.push(coolGoat);
let floatYourGoat = new Goat('float-your-goat', 'img/float-your-goat.jpg');
allGoats.push(floatYourGoat);
let goatOutOfHand = new Goat('goat-out-of-hand', 'img/goat-out-of-hand.jpg');
allGoats.push(goatOutOfHand);
let kissingGoat = new Goat('kissing-goat', 'img/kissing-goat.jpg');
allGoats.push(kissingGoat);
let sassyGoat = new Goat('sassy-goat', 'img/sassy-goat.jpg');
allGoats.push(sassyGoat);
let smilingGoat = new Goat('smiling-goat', 'img/smiling-goat.jpg');
allGoats.push(smilingGoat);
let sweaterGoat = new Goat('sweater-goat', 'img/sweater-goat.jpg');
allGoats.push(sweaterGoat);



renderImg();

function renderResults() {
  if(count === maxCount){
   for(let i = 0; i < allGoats.length;i++){
      let li = document.createElement('li');
      li.textContent = `${allGoats[i].name} has ${allGoats[i].votes} votes and ${allGoats[i].views} views.`;
      resultsContainer.append(li);
    }
} else{
 alert("Voting needs to happen at least 15 times for results")
}
}





showResultsBtn.addEventListener('click' , renderResults);
