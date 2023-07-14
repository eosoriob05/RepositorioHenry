//********** OBJETOS **********

/*Un objeto tiene la forma ==> var object = {
    clave/propiedad: [valor1, valor2, ..., valorn],
    clave2/propiedad2: [valor1, valor2, ..., valorn]
};
*/

// Se guardan los objetos que necesitan un balón y los que no.

var deportes = {
    conBalon: ['Football', 'Basketball', 'Rugby'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking']
};


// Reunir la información de una persona.

var persona = {
    nombre: 'Eduardo',
    edad: 26,
    estudios: { esProgramador: true }
};



//********** TRABAJANDO CON OBJETOS **********

// --> Para acceder a una propiedad:

console.log(persona.edad); // ==> 26


// --> Para asignarle un valor a una propiedad:

persona.nombre = 'Martín';

console.log(persona.nombre); // ==> Martín


// --> Para crear una propiedad:

var autos = {};

autos.marcas = ['Ford', 'Audi', 'Ferrari']; // Se crea la propiedad marcas con sus valores

console.log(autos); // ==> { marcas: [ 'Ford', 'Audi', 'Ferrari' ] }


// --> Borrar una propiedad:

delete autos.marcas;

console.log(autos); // ==> {}
