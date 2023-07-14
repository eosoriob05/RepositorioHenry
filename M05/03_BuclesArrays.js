//********** BUCLES EN ARRAYS **********

// --> FOR:

var arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);  //Se va imprimiendo cada elemento por separado.
}


// --> WHILE:

var arr = [];

while (arr.length < 5) {
   arr.push('Toby');
}

console.log(arr); // ==> [ 'Toby', 'Toby', 'Toby', 'Toby', 'Toby' ]