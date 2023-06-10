'use strict';

let allProducts = [];
let maxVote = 25;
let imgContainer = document.getElementById('imgContainer');
let resultsButton = document.querySelector('button');
const ctx = document.getElementById('myChart');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');


let products = ['bag','banana','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','tauntaun','unicorn','water-can','wine-glass','sweep'];

// Constructor function to create a new product and push that product into the allProducts array
function Product(name, fileExt = 'jpg'){
  this.name = name;
  this.image = `img/${name}.${fileExt}`;
  this.timesShown = 0;
  this.timesVoted = 0;
  allProducts.push(this);
}

// Loops through product array to create an object for each index
function createProductObjects(){
  // for(let i=0; i<products.length; i++){
  //   new Product(products[i]);
  //   if(allProducts[i].name === 'sweep'){
  //     allProducts[i].image = `img/${allProducts[i].name}.png`;
  //   }
  for(let i=0; i<products.length; i++){
    if(products[i].name === 'sweep'){
      new Product(products[i], 'png');
    }else{
      new Product(products[i]);
    }
  }
}

// Helper function generates a random number to represent the array index with the length of all products as the maximum
function getRandomIndex(){
  return Math.floor(Math.random()* allProducts.length);
}
// Generate 3 random product images, assigns values to their attributes, and increments the number of times each is shown
let indexArray = [];

function generateRandomImg(){
  while(indexArray.length < 6){
    let randomNum = getRandomIndex();
    if(!indexArray.includes(randomNum)){
      indexArray.push(randomNum);
    }
  }
  let randomImg1 = allProducts.at(indexArray.shift());
  let randomImg2 = allProducts.at(indexArray.shift());
  let randomImg3 = allProducts.at(indexArray.shift());
  img1.src = randomImg1.image;
  img1.name = randomImg1.name;
  img1.alt = `product image of ${randomImg1.name}`;
  img2.src = randomImg2.image;
  img2.name = randomImg2.name;
  img2.alt = `product image of ${randomImg2.name}`;
  img3.src = randomImg3.image;
  img3.name = randomImg3.name;
  img3.alt = `product image of ${randomImg3.name}`;

  randomImg1.timesShown+=1;
  randomImg2.timesShown+=1;
  randomImg3.timesShown+=1;
}
// Event handler for when a product is clicked
function handleVote(event){
  let imgClicked = event.target.name;
  maxVote-=1;
  for(let i=0; i<allProducts.length; i++){
    if (imgClicked === allProducts[i].name){
      allProducts[i].timesVoted+= 1;
    }
  }
  if(maxVote<1){
    imgContainer.removeEventListener('click', handleVote);
    imgContainer.hidden = true;
  }
  generateRandomImg();
}
// Define Chart
let productVotes = [];
let productViews = [];
const chartConfig = {
  type: 'bar',
  data:{
    color:'white',
    labels:products,
    datasets: [{
      label: '# of Votes',
      data:productVotes,
      backgroundColor: 'red',
      borderWidth: 1,
    },
    {
      label: ' # of views',
      data:productViews,
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
};
// Event handler for when the user clicks view results - renders a chart
function handleResultButton(){
  let allProductsString = JSON.stringify(allProducts);
  localStorage.setItem('productArray', allProductsString);
  for(let i=0; i<allProducts.length; i++){
    productVotes.push(allProducts[i].timesVoted);
    productViews.push(allProducts[i].timesShown);
  }
  if(maxVote<1){
    resultsButton.hidden = true;
    new Chart(ctx, chartConfig);
  }else{
    alert('Please continue voting');
  }
}
// Implementing LocalStorage
function useStorage(){
  let previousProductArr = localStorage.getItem('productArray');
  if(previousProductArr){
    previousProductArr = JSON.parse(previousProductArr);
    allProducts = previousProductArr;
  }else{
    createProductObjects();
  }
}
// Executable Code 
createProductObjects();
generateRandomImg();
imgContainer.addEventListener('click', handleVote);
resultsButton.addEventListener('click', handleResultButton);
useStorage();
