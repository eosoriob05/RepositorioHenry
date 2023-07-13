//********** BUCLES FOR, WHILE Y DO WHILE **********

// --> For:

var suma = 0;

for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);


 // --> While:

var suma = 0;

 while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
    };


 // --> Do While:


let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result); // ==> "12345"