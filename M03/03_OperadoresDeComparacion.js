//********** OPERADORES DE COMPARACIÓN **********

console.log (4 < 7); // ==> true

console.log (4 < 1 ); // ==> false

console.log (4 > 4); // ==> false

console.log (4 == 7); // ==> false



//********** IGUALDAD VS ESTRICTAMENTE IGUAL **********

// --> Igualdad: Igual Valor

// --> Igualdad estricta: Igual Tipo de Dato y Valor

console.log (3 == 3); // ==> true

console.log (3 === 3); // ==> true

console.log (3 == "3"); // ==> true

console.log (3 === "3"); // ==> false

console.log (7 == "7"); // ==> true

console.log (7 === "7"); // ==> false


//********** ASIGNACIÓN Y ASOCIATIVIDAD **********

var a = 1; // a = 1

var b = 2; // b = 2

var c = a = b; // Si b = 2 ; a = 2 ==> c =2 

console.log (c); // ==> 2