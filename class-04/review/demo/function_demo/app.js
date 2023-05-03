function sayHello() {
  console.log('hello world')
}

sayHello();


function sayGoodbye(name){
  console.log(name)
}

sayGoodbye('titus')

function getFullName(firstName, lastName){
  return firstName + lastName
}

console.log(getFullName('titus', 'dolphus'))


const multipy = (num1,num2) => {
    let answer = num1 * num2;
    return answer;
}

console.log(multipy(2,2))

