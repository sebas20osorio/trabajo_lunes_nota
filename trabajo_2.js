// Si el numero es primo o no es primo

let numero = parseInt(prompt (' ingrese el numero '))
let divisor = 1; contador =0;
while( divisor <= numero ){
    if ( numero % divisor == 0){
        contador++;
    }
    divisor++;
}
contador ==2 ? document.write( " el numero SI es primo ") : document.write(" el numero NO es primo ")