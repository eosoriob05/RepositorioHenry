//********** PROTOTIPOS **********

/*Los prototipos son un mecanismo por el cual todos los objetos o elementos pueden
   extender sus propiedades y métodos. */


// Transformar todos los números mayores que 3 del arreglo en el valor booleano false

Array.prototype.mayoresQueTres = function (){   // <objetoGlobal>.prototype.<nombre>=function(){ 
    var arregloModificado = [];                 // Arreglo vacío

    for(let i = 0;i < this.length; i++){        //Recorrer el arreglo. el this.length se refiere a la longitud de este arreglo.

        if(this[i] > 3){                        //El this se refiere al arreglo que invoca el método.
            arregloModificado.push(false);
        } else{
            arregloModificado.push(this[i]);
        }

    }

    return arregloModificado;
}


//Ahora se crea un arreglo para aplicar el nuevo método creado:


var arreglo = [1, 2, 3, 4, 5];

var nuevoArreglo =  arreglo.mayoresQueTres();

console.log(nuevoArreglo); // ==> [ 1, 2, 3, false, false ]



// --> Otro ejemplo:

// Primero se crea una clase

class LatinoAmerica {
	constructor() {
		this.paises = [ ];
	};
};

// Ahora se crea un prototipo para pushear paises
LatinoAmerica.prototype.agregarPais = function (pais) {
    this.paises.push(pais);
};


let continente = new LatinoAmerica();  //Se crea una nueva instancia (objeto) de la clase Latinoamerica.

continente.agregarPais('México'); // <objeto>.<nombreDePrototipo>('Mexico')

console.log(continente.paises); // ==> [ 'México' ]
