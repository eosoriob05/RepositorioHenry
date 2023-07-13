//********** OPERADORES LÓGICOS **********

// --> AND: &&

function mayorYMenor(num){
    if (num > 5 && num < 10){
        console.log(true);
    } else{
        console.log(false);
    }
}

mayorYMenor(2); // ==> false

mayorYMenor(7); // ==> true


// --> OR: ||


function operadorOr(str) {
    if(str === 'Henry' || str.length < 3){
        console.log(true);
    } else{
        console.log(false);
    }
}

operadorOr('Henry'); // ==> true

operadorOr('Py'); // ==> true



// --> NOT: !

function negacion(permiso) {
    if (permiso) console.log('Tiene permiso');
 }

 negacion(false); // ==> Tiene permiso

 