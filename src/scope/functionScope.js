function saludo() {
  let nombre = 'Juan'
  console.log(nombre) //Se puede acceder a la variable nombre porque es local en la función saludo

  if(nombre === 'Juan') {
    console.log(`Hola ${nombre}`) //se puede acceder porque esta dentro de un if que esta dentro de la función saludo
  }
}

saludo()
//console.log(nombre) //No se puede acceder a la variable nombre porque es local en la función saludo