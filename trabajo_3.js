//3. Una función que dado el numero me indique el siguiente numero primo

function siguentenumeroprimo( numero ) {
    if (typeof numero === 'number' && Number.isInteger(numero)){
        if ( numero >= 2){
            let esprimo; 
            for ( let i = numero + 1;; ++i) {
                esprimo = true;
                for ( let a = 2; a * a <= i; ++a){
                    if (i % a === 0 ){
                        esprimo = false;
                        break;
                    }
                }
                if ( esprimo){
                    return i;
                }
            }
        } else {
            throw Error ( ' el numero ser mayor o igual a 0 ');
        }
    } else {
        throw TypeError ( ' el numero deber entero ');
    }
}

try {
        console.log( siguentenumeroprimo (parseInt(prompt (' ingrese el numero '))));
} catch (v){
    console.log(`Error: ${v.message}`);
}
