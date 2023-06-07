/***** DOM SELECTORS ****/

let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let showResultsBtn = document.getElementById('show-results-btn');
let resultsContainer = document.getElementById('results');




/***** GLOBAL VARAIBLES  ****** */

let allGoats = [];
let maxCount = 15;
let count = 0;

/**** GOAT CONSTRUCTOR *******/

function Goat(name, src = '', fileExt = 'jpg') {
  this.name = name;
  this.src = `${src}.${fileExt}`;
  this.views = 0;
  this.votes = 0;
}

Goat.prototype.walk = function() {
  console.log('walking...');
};

/*** IMAGE CLICK EVENT LISTENER */
function handleClick (event) {
  if(count < maxCount){
    for(let i = 0 ; i < allGoats.length; i++){
      if(event.target.title === allGoats[i].name){
        allGoats[i].votes++;
      }
    }
    renderImg();
    count++;
  }
  else{
    showResultsBtn.style.display = "block";
  }
}
/******* RENDER CHART FUNCTION *******/
function renderResults() {
  let goatNames = [];
  let goatVotes = [];
  let goatViews = [];

  let allGoatsString = JSON.stringify(allGoats);
  localStorage.setItem('GoatArray', allGoatsString);

  for(let i = 0; i < allGoats.length; i++){
    goatNames.push(allGoats[i].name);
    goatVotes.push(allGoats[i].votes);
    goatViews.push(allGoats[i].views);
  }
  const chartConfig = {
    type: 'bar',
    data:{
      color:'white',
      labels:goatNames,
      datasets: [{
        label: '# of Votes',
        data:goatVotes,
        backgroundColor: 'red',
        borderWidth: 1,
      },
      {
        label: ' # of views',
        data:goatViews,
        backgroundColor:'blue',
        borderWidth: 1
      }
      ]
    },
    options: {
      plugins: {
        customCanvasBackgroundColor:{
          color: 'white'
        }
      },
      scales: {
        y: {
          beginAtZero:true
        }
      }
    }
  }

  Chart.defaults.color = '#FFFFFF';
  new Chart(resultsContainer, chartConfig);
}



/****** RENDER IMAGE FUNCTION *****/
let indexArray = [];
function renderImg() {
  //This block generates 6 random indexes and places them inside an array
  while(indexArray.length < 6){
    let randomNum = Math.floor(Math.random() * allGoats.length);
    if(!indexArray.includes(randomNum)){
      indexArray.push(randomNum);
    }
  }
  let imgOneIndex = indexArray.shift();
  let imgTwoIndex = indexArray.shift();
  let imgThreeIndex = indexArray.shift();

  imgOne.src = allGoats[imgOneIndex].src;
  imgOne.title = allGoats[imgOneIndex].name;

  imgTwo.src = allGoats[imgTwoIndex].src;
  imgTwo.title = allGoats[imgTwoIndex].name;

  imgThree.src = allGoats[imgThreeIndex].src;
  imgThree.title = allGoats[imgThreeIndex].name;

  allGoats[imgOneIndex].views++;
  allGoats[imgTwoIndex].views++;
  allGoats[imgThreeIndex].views++;

}

/******* EXECUTABLE CODE ********/

imgOne.addEventListener('click', handleClick);
imgTwo.addEventListener('click', handleClick);
imgThree.addEventListener('click', handleClick);


let previousGoatArray = localStorage.getItem('GoatArray');

//***** LOCAL STORAGE IMPLEMENTATION THAT REINSTANTIATES OBJECTS ******/
// if(previousGoatArray){
//   previousGoatArray = JSON.parse(previousGoatArray);
//   for(let i = 0; i < previousGoatArray.length; i++){
//     if(previousGoatArray[i].name === 'bunny-goat'){
//       let reconstructedGoat = new Goat(previousGoatArray[i].name);
//       reconstructedGoat.src = previousGoatArray[i].src;
//       reconstructedGoat.views = previousGoatArray[i].views;
//       reconstructedGoat.votes = previousGoatArray[i].votes;

//       allGoats.push(reconstructedGoat);
//     } else{
//       let reconstructedGoat = new Goat(previousGoatArray[i].name);
//       reconstructedGoat.src = previousGoatArray[i].src;
//       reconstructedGoat.views = previousGoatArray[i].views;
//       reconstructedGoat.votes = previousGoatArray[i].votes;

//       allGoats.push(reconstructedGoat);
//     }
//   }
//   console.log('Previous Goat Array  >>>', allGoats[0].walk())
// }
// else {
//   let bunnyGoat = new Goat('bunny-goat', `img/bunny-goat`, 'png');
//   allGoats.push(bunnyGoat);
//   let coolGoat = new Goat('cool-goat', 'img/cool-goat');
//   allGoats.push(coolGoat);
//   let floatYourGoat = new Goat('float-your-goat', 'img/float-your-goat');
//   allGoats.push(floatYourGoat);
//   let goatOutOfHand = new Goat('goat-out-of-hand', 'img/goat-out-of-hand');
//   allGoats.push(goatOutOfHand);
//   let kissingGoat = new Goat('kissing-goat', 'img/kissing-goat');
//   allGoats.push(kissingGoat);
//   let sassyGoat = new Goat('sassy-goat', 'img/sassy-goat');
//   allGoats.push(sassyGoat);
//   let smilingGoat = new Goat('smiling-goat', 'img/smiling-goat');
//   allGoats.push(smilingGoat);
//   let sweaterGoat = new Goat('sweater-goat', 'img/sweater-goat');
//   allGoats.push(sweaterGoat);

// }

//***** LOCAL STORAGE IMPLEMENTATION THAT DOES NOT REINSTANTIATE OBJECTS ******/
if(previousGoatArray){
  previousGoatArray = JSON.parse(previousGoatArray);
  allGoats = previousGoatArray;
}
else {
  let bunnyGoat = new Goat('bunny-goat', `img/bunny-goat`, 'png');
  allGoats.push(bunnyGoat);
  let coolGoat = new Goat('cool-goat', 'img/cool-goat');
  allGoats.push(coolGoat);
  let floatYourGoat = new Goat('float-your-goat', 'img/float-your-goat');
  allGoats.push(floatYourGoat);
  let goatOutOfHand = new Goat('goat-out-of-hand', 'img/goat-out-of-hand');
  allGoats.push(goatOutOfHand);
  let kissingGoat = new Goat('kissing-goat', 'img/kissing-goat');
  allGoats.push(kissingGoat);
  let sassyGoat = new Goat('sassy-goat', 'img/sassy-goat');
  allGoats.push(sassyGoat);
  let smilingGoat = new Goat('smiling-goat', 'img/smiling-goat');
  allGoats.push(smilingGoat);
  let sweaterGoat = new Goat('sweater-goat', 'img/sweater-goat');
  allGoats.push(sweaterGoat);
}

renderImg();






showResultsBtn.addEventListener('click' , renderResults);
