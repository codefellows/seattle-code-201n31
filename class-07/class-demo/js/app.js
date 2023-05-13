// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed


function Kitten(name,age,interests, isGoodWithKids, isGoodWithDogs,isGoodWithCats){
  this.name = name;
  this.age = age;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
}

Kitten.prototype.getAge = function(){
  this.age = Math.floor(Math.random() * (10 - 0) + 0);
};

Kitten.prototype.render = function(){

  let tableRow = document.createElement('tr');

  const kittenName = document.createElement('td');
  kittenName.textContent = this.name;
  tableRow.append(kittenName);

  const kittenAge = document.createElement('td');
  kittenAge.textContent = this.age;
  tableRow.append(kittenAge);

  const kittenisGoodWithKids = document.createElement('td');
  kittenisGoodWithKids.textContent = this.isGoodWithKids;
  tableRow.append(kittenisGoodWithKids);

  const kittenIsGoodWithDogs = document.createElement('td');
  kittenIsGoodWithDogs.textContent = this.isGoodWithDogs;
  tableRow.append(kittenIsGoodWithDogs);

  const isGoodWithCats = document.createElement('td');
  isGoodWithCats.textContent = this.isGoodWithCats;
  tableRow.append(isGoodWithCats);


  for(let i = 0; i < this.interests.length; i++){
    //Loops through the interests array and create a string with all the interestes delmited by a comma
    // 'cuddling, catnip, yanr'

    // if(i == this.interests.length - 1){
    //   interestsString += this.interests[i] ;
    // }else{
    //   interestsString += this.interests[i] + ' ,';
    // }

    const interestesCell = document.createElement('td');
    interestesCell.textContent = this.interests[i];
    tableRow.append(interestesCell);


  }

  // console.log('Interests String: ', interestsString)
  // const interestesCell = document.createElement('td');
  // interestesCell.textContent = interestsString;
  // tableRow.append(interestesCell);




  const parentElement = document.querySelector('#kittenProfiles');
  const article = document.createElement('article');

  parentElement.append(article);



  const h2 = document.createElement('h2');

  h2.textContent = this.name;

  article.append(h2);
  const p = document.createElement('p');

  p.textContent = this.age;

  article.append(p);

  // const ul = document.createElement('ul');

  // article.append(ul);

  // for(let i = 0; i < this.interests.length; i++){
  //   const li = document.createElement('li');
  //   li.textContent = this.interests[i];
  //   ul.append(li);
  // }

  document.querySelector('#kittenTable').append(tableRow);

  const img = document.createElement('img');

  img.setAttribute('src', `images/${this.name}.jpeg`);
  article.append(img);
};

const frankie = new Kitten('frankie', 0, ['cuddling', 'chasing string', 'catnip'], true,true,true);
const jumper = new Kitten('jumper', 0, ['sitting in laps', 'chasing string', 'treats'], true,false,true);
const serena = new Kitten('serena', 0, ['subeams', 'milk', 'yarn'], true,false,true);

frankie.getAge();
frankie.render();

jumper.getAge();
jumper.render();

serena.getAge();
serena.render();

// Loop though every hour
// For each hour
// Loop though every city
// Grab the number of cookies sold for the hour that matches the index for the first loop
// Store that value in a 'total cookies variable'
// Take that totalCookies palce that inside of a <td> that is at the footer.


// const frankie = {
//   name: 'frankie',
//   age:'1',
//   interests:['cuddling', 'chasing string', 'catnip'],
//   isGoodWithKids:true,
//   isGoodWithDogs:false,
//   isGoodWithCats:true,
//   getAge:function(){
//     console.log(this.name);
//     this.age = Math.floor(Math.random() * (10 - 0) + 0);
//   }
// };

// frankie.getAge();

// console.log(frankie);


// const parentElement = document.querySelector('#kittenProfiles');

// // create a new element, or elements, that represent frankie
// // article
// // inside that article, h2 for the name, paragraph with their age, ul and some lis with their interests, image


// const article = document.createElement('article');

// parentElement.append(article);

// const h2 = document.createElement('h2');

// h2.textContent = frankie.name;

// article.append(h2);


// const p = document.createElement('p');

// p.textContent = frankie.age;

// article.append(p);

// const ul = document.createElement('ul');

// article.append(ul);

// for(let i = 0; i < frankie.interests.length; i++){
//   const li = document.createElement('li');
//   li.textContent = frankie.interests[i];
//   ul.append(li);
// }

// const img = document.createElement('img');

// img.setAttribute('src', 'images/frankie.jpeg');
// article.append(img);






