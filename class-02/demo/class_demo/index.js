'use strict';


let answer1 = confirm('Are you ready to rumble');

let name = "titus";




//TODO: if they answer true then we want to console.log('lets get ready to rumble)
// TODO: if they answer no, then we want to console.log ('oh well then')

if(answer1 === true){
  console.log('lets get ready to rumble');
}else{
  console.log('oh well then ');
}


let first = true;
let second = false;
let third = true;


if(first || second){
  console.log('first or second is true');
}else if (first && third){
  console.log('first or third is true');
}else {
  console.log('none of the variables are true');
}


let color = prompt('What is your favorite color');

color = color.toLowerCase().trim();

let grades = [1, 2, 3];

grades.pop()

switch (color.toLowerCase().trim()){

case 'red':
  console.log('your favorite color was red');
  break;

case 'blue':
  console.log('your favorite color was blue');
  break;

default:
  console.log('i do not know your favorite color');


}
console.log('Color is: ', grades);
