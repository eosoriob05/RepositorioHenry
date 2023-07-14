//********** BRACKET Y DOT NOTATION **********

var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// --> Bracket:

atuendos['piernas'] = ['Bermudas', 'Pantalones'];

console.log(atuendos); /* ==> {
    manos: [ 'Guantes', 'Anillos' ],
    pies: [ 'Zapatos', 'Soquetes' ],
    piernas: [ 'Bermudas', 'Pantalones' ]
    }*/

// --> DOT:

atuendos.pies = ['Medias', 'Tenis'];

console.log(atuendos); /* ==> {
    manos: [ 'Guantes', 'Anillos' ],
    pies: [ 'Medias', 'Tenis' ],
    piernas: [ 'Bermudas', 'Pantalones' ]
    }*/