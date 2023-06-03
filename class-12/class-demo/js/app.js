/***** DOM SELECTORS ****/

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let showResultsBtn = document.getElementById('show-results-btn');
let resultsContainer = document.getElementById('results');




/***** GOAT CONSTURCTOR  ****** */

let allGoats = [];
let maxCount = 15;
let count = 0;
let previousIndexes = []

function Goat(name, src, fileExt = 'jpg') {
  this.name = name;
  this.src = `${src}.${fileExt}`;
  this.views = 0;
  this.votes = 0;
}



/*** CLICK EVENT LISTENER */

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

imgOne.addEventListener('click', handleClick);
imgTwo.addEventListener('click', handleClick);
imgThree.addEventListener('click', handleClick);


/****** HELPER FUNCTIONS *****/
let indexArray = [];
function renderImg() {

  while(indexArray.length < 6){
    let randomNum = Math.floor(Math.random() * allGoats.length);
    if(!indexArray.includes(randomNum)){
      console.log('index has been pushed');
      indexArray.push(randomNum);
    }
  }

  // console.log('indexArray', indexArray)

  let imgOneIndex = indexArray.shift();
  let imgTwoIndex = indexArray.shift();
  let imgThreeIndex = indexArray.shift();




  imgOne.src = allGoats[imgOneIndex].src;
  imgOne.title = allGoats[imgOneIndex].name;
  imgTwo.src = allGoats[imgTwoIndex].src;
  imgTwo.title = allGoats[imgTwoIndex].name;

  imgThree.src = allGoats[imgThreeIndex].src;
  imgThree.title = allGoats[imgThreeIndex].name;

  // while (imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgThreeIndex === imgTwoIndex){
  //   imgTwoIndex = Math.floor(Math.random() * allGoats.length);
  //   imgThreeIndex = Math.floor(Math.random() * allGoats.length);
  // }

  imgTwo.src = allGoats[imgTwoIndex].src;
  imgTwo.title = allGoats[imgTwoIndex].name;

  imgThree.src = allGoats[imgThreeIndex].src;
  imgThree.title = allGoats[imgThreeIndex].name;


  allGoats[imgOneIndex].views++;
  allGoats[imgTwoIndex].views++;
  allGoats[imgThreeIndex].views++;






  return [imgOneIndex, imgTwoIndex, imgThreeIndex];
}

//TODO: make a function that will render two random goats
//TODO: Get a random goat from the allGoats array
//TODO: make a function that will render the results


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



renderImg();

function renderResults() {
//   if(count === maxCount){
//    for(let i = 0; i < allGoats.length;i++){
//       let li = document.createElement('li');
//       li.textContent = `${allGoats[i].name} has ${allGoats[i].votes} votes and ${allGoats[i].views} views.`;
//       resultsContainer.append(li);
//     }
// } else{
//  alert("Voting needs to happen at least 15 times for results")
// }
  let goatNames = [];
  let goatVotes = [];
  let goatViews = [];
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
  console.log('Chart Config', chartConfig);


}





showResultsBtn.addEventListener('click' , renderResults);
