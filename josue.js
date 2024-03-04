//variables
let numeroMaximoposible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoposible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 7;
console.log(numeroSecreto);
//condicion pricipal
while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoposible} por favor`));

    console.log(typeof(numeroUsuario));

     /*este codigo hace la comparacion  */
    if(numeroUsuario == numeroSecreto){
    alert (`acertaste,el numero es: ${numeroUsuario}  los hiciste en: ${intentos} ${intentos ==1 ? 'vez' : 'veces' }`);
//condicionales para ayudar al usuario
    }else{
        if(numeroUsuario > numeroSecreto){
    alert('El numero secreto es menor');   
    }else{

        alert('el numero secreto es mayor');
    }
    //incrementacion del contador al no acertar 
    intentos++;
    
//ruptura de la condicion en x itentos
        if (intentos > maximosIntentos){
        alert(`lo siento llegaste al numero maximo de ${maximosIntentos} intentos`);
        break;
    }

    }
}




