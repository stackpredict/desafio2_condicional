/*Pedir un numero mediante promt y si es mayor a 100 mostrar alerta
*/ 
let numero = parseInt(prompt("Ingrese un número"));
if(numero >1000){
    alert("El número ingresado es: "+numero+" y es mayor a 1000");
}else{
    alert("El número ingresado es: "+numero+" y es menor a 1000");
}
//Pedir un texto por consola y si es igual a Hola mostrar un mensaje por consola

let texto = prompt("Ingrese un texto");
if(texto != "Bienvenido"){
    console.log("El texto ingresado es :  "+texto+" y es distinto a Bienvenido ");
}
// Pedir un número y comprobar si esta entre 10 y 100 si es así, mostrar alerta
let numero1 = parseInt(prompt("Ingrese un número para comparar",0));
let numero2 = parseInt(prompt("Ingrese el otro número",0));

if(numero1 >= 10 && numero2 <=100) {
    alert("Los números ingresados están entre 10 y 100 y son :  "+numero1+" y " +numero2);

}else{
    alert("Lo números ingresados NO están entre 10 y 100 y son :  "+numero1+" y  " +numero2);
}


