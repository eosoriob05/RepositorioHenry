//********** FUNCIONES **********


// --> Método 1:

function sumaTres(x) { // function <NOMBRE DE FUNCIÓN> (<ARGUMENTO1>, <ARGUMENTO2>,..., <ARGUMENTOn>) {
    console.log(x + 3);//           Cuerpo de función y output con console.log()
}                      //}

//Ahora se llama la función:

sumaTres(4); // 7


// --> Método 2:

function sumaCuatro(x) {
    return x + 4;
}

//Ahora se llama la función dentro de un < console.log() >:

console.log(sumaCuatro(4)); //8


// --> Método 3:

var sumaCinco = function (x) {
    return x + 5;
}

//Ahora se mete la variable en un < console.log() > para obtener el resultado:

console.log(sumaCinco(5)); //10


// --> Método 4: Función de flecha

var sumaSeis = (x) => {
    return x + 6;
}

//Ahora se mete la variable en un < console.log() > para obtener el resultado:

console.log(sumaSeis(10)); //16



// EL < console.log() > SOLAMENTE ES UN APOYO (NO DEBE APARECER EN UNA APLICACIÓN REAL).