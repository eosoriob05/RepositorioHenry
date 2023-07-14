//********** EXTENSIÓN DE CLASES **********

class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() { //Método 
       console.log(
          'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
       );
    }
 }

 let martin = new Persona('Martin', 26);

 martin.saludar(); // ==> Hola, mi nombre es  Martin. Tengo  26

// --> Extensión: extends

 class Programador extends Persona { //Programador se extiende de Persona
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad); //El super permite que la clase reciba propiedades heredadas y el contexto es de programador.
       this.añosDeExperiencia = añosDeExperiencia; // Esta propiedad no es heredada.
    }
    codear() { //Método
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       );
    }
 }
 
 let martin2 = new Persona('Martín', 26);

 let programador = new Programador('María', 37, 4);

 martin2.saludar(); // ==> Hola, mi nombre es  Martín. Tengo  26

 programador.codear(); // ==> Soy María . Codeo desde hace  4 años