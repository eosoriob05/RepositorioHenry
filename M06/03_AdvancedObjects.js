//********** OBJETOS AVANZADOS **********

// --> Saber si el objeto tiene una propiedad específica: hasOwnProperty

var libro = {
    autor: "Borges",
    genero: "Policial",
    anio: 1990
};

var tienePropiedad = libro.hasOwnProperty("autor"); // Ver si el objeto libro tiene la propiedad nombre

console.log(tienePropiedad); // ==> true


// --> Devolver arreglo con todas las propiedades del objeto: keys

var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades); // ==> [ 'autor', 'genero', 'anio' ]


// --> Recorrer objeto con bucle: for in

var mundo = {
    continentes: 7,
    paises: 195,
    oceanos: 5
}

for (let prop in mundo) {

    console.log('Esta es la propiedad: ', prop);

    console.log('Este es el valor: ', mundo[prop]);
 }

//********** THIS **********

 // --> Contexto: this (para identificar que es un objeto)

var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function (){  //Función dentro del objeto
       console.log('Mi perro es un  ' + this.raza);
    }
 };

 mascota.info(); 