console.log(nameOfDog) // undefined
var nameOfDog = 'Elmo' // se asigna el valor de la variable
//se eleva la variable al inicio del código, pero no su valor, esto es hoisting
//por eso se imprime undefined
console.log(nameOfDog) // Elmo

nameOfCat() // el mejor gatico es Undefined

function nameOfCat() {
    console.log(`el mejor gatico es ${myCat}`) // las funciones siempre se elevan al inicio del código
}

var myCat = 'Olivia'//se asigna el valor de la variable y se eleva al inicio del código la variable

nameOfCat() // el mejor gatico es Olivia