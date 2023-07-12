//sin strict mode
pi = 3.1416 // se asigna directamente
console.log(pi) // 3.1416

//con strict mode
'use strict'
var pi = 3.1416 // se asigna con var
// pi = 3.1416 // se asigna directamente y da error
console.log(pi) // 3.1416

function myFunction() {
    //sin strict mode
    myVar = 3.1416 // se asigna directamente
    console.log(myVar) // 3.1416

    //con strict mode
    'use strict'
    var myVar = 3.1416 // se asigna con var
    // myVar = 3.1416 // se asigna directamente y da error
    console.log(myVar) // 3.1416
}
