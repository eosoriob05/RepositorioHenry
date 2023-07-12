//********** CONDICIONALES **********

/* Supongamos que se está viajando a otro país y se tiene que decidir
hacia donde dirigirse para llegar al destino.
*/

function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };

//Ahora se llama la función y se verifica:

viajar('Brasil'); // ==> Gire a la izquierda

viajar('Argentina'); // ==> Gire a la derecha

viajar('Venezuela'); // ==> Nos perdimos


//Otro ejemplo:

function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
puedeManejar(17);