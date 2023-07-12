//Var
var firstName //undefined //declaracion
firstName = 'Oscar' //Oscar //asignacion
console.log(firstName) //Oscar

var lastName = 'Aguilar' //Aguilar //declaracion y asignacion
lastName = 'Gonzalez' //Gonzalez //Re-asignacion
console.log(lastName) //Gonzalez

var secondName = 'David' //David //declaracion y asignacion
var secondName = 'Juan' //Juan //Re-declaracion y Re-asignacion
console.log(secondName) //Juan

//Let
let fruit = 'Apple' //Apple //declaracion y asignacion
fruit = 'Orange' //Orange //Re-asignacion
console.log(fruit) //Orange
// let fruit = 'Banana' //SyntaxError: Identifier 'fruit' has already been declared //Re-declaracion

//Const
const animal = 'Dog' //Dog //declaracion y asignacion
// animal = 'Cat' //TypeError: Assignment to constant variable. //Re-asignacion
// const animal = 'fish' //SyntaxError: Identifier 'animal' has already been declared //Re-declaracion
console.log(animal) //Dog

const vehicles = [] //declaracion y asignacion
vehicles.push('Car') //Car //Re-asignacion
vehicles.push('Motorcycle') //Motorcycle //Re-asignacion
console.log(vehicles) //[ 'Car', 'Motorcycle' ]

vehicles.pop() //Motorcycle //Re-asignacion
console.log(vehicles) //[ 'Car' ]

