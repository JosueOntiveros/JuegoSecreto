let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//funcion para declarar 2 parametros y utilizarlos para manipular el texto y encabezado en el html
function intentoGenerico(encabezado, texto){
    let titulo = document.querySelector (encabezado);
titulo.innerHTML = texto;
return;
}
//funcion para utilizar el imput de html,convertirlo a entero y entregar un valor, es para no permitir texto 
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    //condicion que evalua si es correcto el numero secreto y muestra vez o veces y elimina el disabled al boton 
    //de reiniciar en html 
if (numeroDeUsuario === numeroSecreto) {
  intentoGenerico('p',`Adivinaste el numero secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); 
document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    //el usuario no acerto 
if(numeroDeUsuario>numeroSecreto){
//ayuda al usuario 
intentoGenerico ('p', 'el Numero Secreto es menor');

} else {

    intentoGenerico ('p','el Numero Secreto es mayor');
}
//aumento del contador 
    intentos++;
 
 limpiarCaja();



}
return;

}

function limpiarCaja() {
 document.querySelector('#valorUsuario').value= '';


}


function generarNumeroSecreto() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

//Si el numero generado esta en la lista 
if (listaNumerosSorteados.length == numeroMaximo) {
    intentoGenerico ('p', 'Ya se sortearon todos los numeros posibles');
}else{
if (listaNumerosSorteados.includes(numeroGenerado)) {
   return generarNumeroSecreto();

}else{
listaNumerosSorteados.push(numeroGenerado);
return numeroGenerado;
}

}

}

function condicionesIniciales() {
    intentoGenerico ('h1','Juego del numero Secreto');
    intentoGenerico ('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos =1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio 
    //generar num aleatorio 
    // inicialisar intentos
    condicionesIniciales();
    
    //deshabilitar boton nuevojuego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}




condicionesIniciales();