function saludo() {
    
alert('hola mundo');
return;
}
saludo();

function Parametro4(texto) {
 
   alert(`hola ${texto}`);
return;
}
Parametro4(`Juanita`);

function dameUnNumero(valorUsuario) {
  let numeroUsuario = prompt('Ingresa un numero');
  valorUsuario = numeroUsuario*2;
  alert(`tu numero por dos es: ${valorUsuario}`);
return;
}
dameUnNumero();
function promedioTresNumeros(numeroUno, segundoDato, tercerNumero) {

 numeroUno = prompt('ingresa un numero a promediar');
 segundoDato = prompt('ingresa el segundo numero');
 tercerNumero = prompt('ingresa el tercer numero');
 console.log(numeroUno,segundoDato,tercerNumero)
let promedioGeneral = (numeroUno/3)+(segundoDato/3)+(tercerNumero/3);
console.log(promedioGeneral)

alert(`Tu promedio general es: ${promedioGeneral}`);    
return;
}

promedioTresNumeros();
//sumo y lo divido entre 3 

function comparativaDosnumeros(numeroMenor,numeroMayor) {
  
numeroMenor = prompt ('tu primer numero');
numeroMayor = prompt ('tu segundo numero');
 
if(numeroMayor>numeroMenor){
  alert (`el numero mayor es ${numeroMayor}`)
}else{

  alert(`el numero mayor es ${numeroMenor}`);
}

}
comparativaDosnumeros();



