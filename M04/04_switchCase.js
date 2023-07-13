//********** SWITCH CASE **********


function consultaPrecioKilogramo(expr){
    switch (expr) {
        case 'Naranjas':
          console.log('El kilogramo de naranjas cuesta $0.59.');
          break;
    
        case 'Manzanas':
          console.log('El kilogramo de manzanas cuesta $0.32.');
          break;
    
        case 'Platanos':
          console.log('El kilogramo de platanos cuesta $0.48.');
          break;
    
        case 'Cerezas':
          console.log('El kilogramo de cerezas cuesta $3.00.');
          break;
    
        case 'Mangos':
        case 'Papayas':
          console.log('El kilogramo de mangos y papayas cuesta $2.79.');
          break;
    
        default:
          console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
      }
      
      console.log("¿Hay algo más que te quisiera consultar?");
}


consultaPrecioKilogramo('Platanos'); //El kilogramo de platanos cuesta $0.48.
                                     //¿Hay algo más que te quisiera consultar?



//********** BREAK **********

function comprobarBreak(x) {
    var i = 0;
    while (i < 6) {
       if (i == 3)
          break; // Hace que termine el bucle.
       i++;
    }
    return i * x;
 }



//********** CONTINUE **********

i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
   n += i;
}