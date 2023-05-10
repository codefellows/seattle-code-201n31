// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed


const frankie = {
  name: 'frankie',
  age:'1',
  interests:['cuddling', 'chasing string', 'catnip'],
  isGoodWithKids:true,
  isGoodWithDogs:false,
  isGoodWithCats:true,
  getAge:function(){
    console.log(this.name);
    this.age = Math.floor(Math.random() * (10 - 0) + 0);
  }


};

frankie.getAge();

console.log(frankie);


const parentElement = document.querySelector('#kittenProfiles');

// create a new element, or elements, that represent frankie
// article
// inside that article, h2 for the name, paragraph with their age, ul and some lis with their interests, image


const article = document.createElement('article');

parentElement.append(article);

const h2 = document.createElement('h2');

h2.textContent = frankie.name;

article.append(h2);


const p = document.createElement('p');

p.textContent = frankie.age;

article.append(p);

const ul = document.createElement('ul');

article.append(ul);

for(let i = 0; i < frankie.interests.length; i++){
  const li = document.createElement('li');
  li.textContent = frankie.interests[i];
  ul.append(li);
}

const img = document.createElement('img');

img.setAttribute('src', 'images/frankie.jpeg');
article.append(img);






