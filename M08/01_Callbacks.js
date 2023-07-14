//********** CALLBACKS **********

//Las funciones callback son un tipo de funciones que se pasan por parámetro a otras funciones

function devuelvoUsuario() {
    return 'Eduardo';
 }

 function devuelvoSaludo() {
    return 'Hola';
 }

 function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
 }

 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);

 console.log(resultado); // ==> Hola Eduardo