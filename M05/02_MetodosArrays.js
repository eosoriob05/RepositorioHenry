//********** MÉTODOS DE INSERCIÓN **********

/* Los Arreglos son un Objeto global dentro de JavaScript. Por tanto, están asociados a una
   serie de Métodos.
   
   Métodos: Funciones nativas/preestablecidas en los lenguajes de programación.*/

var colores = ['amarillo', 'azul'];

// --> Agregar un elemento al final: push

colores.push('rojo');

console.log(colores); // ==> [ 'amarillo', 'azul', 'rojo' ]


// --> Agregar elemento al inicio: unshift

colores.unshift('verde');

console.log(colores); // ==> [ 'verde', 'amarillo', 'azul', 'rojo' ]


// --> Eliminar último elemento: pop

colores.pop();

console.log(colores); // ==> [ 'verde', 'amarillo', 'azul' ]


// --> Eliminar primer elemento: pop

colores.shift();

console.log(colores); // ==> [ 'amarillo', 'azul' ]


//********** MÉTODOS VARIOS **********


// --> Verificar si un elemento está incluido: includes

var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];

var existeDali = pintores.includes('Dalí');

console.log(existeDali); // ==> true

var existeMonet = pintores.includes('Monet');

console.log(existeMonet); // ==> false


// --> Saber si TODOs los elementos cumplen con una condición: every

var numeros = [ 1, 6, 8, 9, 43 ];

var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion); // ==> false


// --> Convertir String en un Arreglo: split

var palabra = 'Eduardo';

var palabraSeparada = palabra.split('');

console.log(palabraSeparada); // ==> [ 'E', 'd', 'u', 'a', 'r', 'd','o' ]

var palabraSeparadaPorD = palabra.split('d');

console.log(palabraSeparadaPorD); // ==> [ 'E', 'uar', 'o' ]


// --> Convertir un Arreglo en String: join

var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada); // ==> Eduardo

var palabraArregladaD = palabraSeparadaPorD.join('d');

console.log(palabraArregladaD); // ==> Eduardo



//********** MÉTODOS DE RECORRIDO **********

// --> Recorrer arreglo y realizar acción para cada elemento: forEach

var numeros = [ 1, 2, 3, 4 ];

numeros.forEach( (num) => { console.log(num) } ) //Imprime cada elemento


// --> Recorrer arreglo y realizar acción para cada elemento. Pero, devuelve arreglo: map

var numeros = [ 1, 2, 3, 4 ];

var masUno = numeros.map( (num) => { return num + 1 } ); //Les suma 1 a cada elemento

console.log(masUno); // ==> [ 2, 3, 4, 5 ]