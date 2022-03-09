//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
for (let i=0; i < Object.keys(person3).length; i++){
    if (Array.isArray(Object.values(person3)[i])){
        console.log(Object.values(person3)[i])
    } else {
        console.log(Object.values(person3)[i])
    }
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function person (name){
    this.name = name;
    
    
    this.printInfo = () => {
        return ` Name : ${this.name}`
    }
    
}    

let addAge = function(age)  {
    console.log(`Orignal Age: ${age}`)   
    let incrAge = function(increment){
        return  age + increment
    };
        console.log(`Incremented Age:`)
        return incrAge
}
 // 1st person name and age increase by 1   
let sam = new person ('Sam')
console.log(sam.printInfo())
let sam_age = new addAge(34)
console.log(sam_age(1))

// 2nd person name and age increase by 3
let Ram = new person ('Ram')
console.log(sam.printInfo())
let ram_age = new addAge(34)
console.log(ram_age(3))


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const answer = (word) => {
    return new Promise ((resolve,reject)=> {
        if (word.length < 10){
            resolve('small word')
        } else {
            reject ('Big word')
        }
    })
}
answer('coding')
.then((result) => {
  console.log(`Answer is ${result} `)
})

.catch((error) => {
    console.log(`Answer is ${error} `)
  })

  

//codewar 1

//Complete the solution so that it reverses the string passed into it.

//'world'  =>  'dlrow'
//'word'   =>  'drow'

function solution(str){
    return str.split('').reverse().join('')
}


//codewar 2
//Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

function rockPaperScissors(p1, p2) {
    if (p1 === p2) {
      return `Draw!`;
    }
    if (p1 === 'rock' && p2 === 'scissors') {
      return `Player 1 won!`;
    } else if (p1 === 'paper' && p2 === 'rock') {
      return `Player 1 won!`;
    } else if (p1 === 'scissors' && p2 === 'paper') {
      return `Player 1 won!`;
    } else {
      return `Player 2 won!`;
    }
  }