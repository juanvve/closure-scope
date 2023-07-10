function fruits(){
    if(true){
        var fruit1 = 'apple';//funciona como una variable global
        let fruit2 = 'banana';//funciona como una variable de bloque
        const fruit3 = 'kiwi';//funciona como una variable de bloque
        console.log(fruit2);//solo se puede acceder dentro del bloque
        console.log(fruit3);//solo se puede acceder dentro del bloque
    }
    console.log(fruit1);//se puede acceder fuera del bloque
}

fruits();