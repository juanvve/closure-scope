//Variables
var a; //declarando la variable
var b = 'b'; //declarando y asignando la variable
b = 'b1'; //reasignando la variable
var a = 'a'; //redeclarando la variable

//Global Scope
var fruit = 'apple';
console.log(fruit); 

function bestFruit() {
  console.log(fruit); 
}

bestFruit(); //apple

function countries() {
  countryGlobal = 'Panama'; //Se declara una variable sin var, let o const, por lo que se convierte en una variable global
  var country = 'Colombia'; //Se declara una variable con var, let o const, por lo que se convierte en una variable local
  console.log('Dentro Panama-->',countryGlobal); 
  console.log('Dentro Colombia-->',country); 
}

countries();
console.log('Fuera Panama-->',countryGlobal); //Se puede acceder a la variable countryGlobal
//console.log('Fuera Colombia-->',country); //No se puede acceder a la variable country
