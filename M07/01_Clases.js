//********** CLASES **********

//Entidades: Representación de conceptos del mundo real. Ejemplo: Usuarios y Publicaciones.

//Clases: plantilla o modelo de entidad.

// --> FUNCIÓN CONSTRUCTORA

function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    this.informacion = function (){
        console.log('Este es un ' + this.marca + ' de color ' + this.color);
    }
 }

 let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4); /* ==> Auto {
                                                                    puertas: 2,
                                                                    color: 'Rojo',
                                                                    marca: 'Ferrari',
                                                                    'año': 2018,
                                                                    ruedas: 4
                                                                    }
 */

 console.log(miPrimerAuto);

 console.log(miPrimerAuto.marca); // ==> Ferrari

 miPrimerAuto.informacion(); // ==> Este es un Ferrari de color Rojo


 // --> EXPRESIÓN DE CLASE

class Autob {
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
 }

 let miSegundoAuto = new Autob(4, 'Blanco', 'Fiat', 2015, 4);

 console.log(miSegundoAuto);

 console.log(miSegundoAuto.marca);