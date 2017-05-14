function holaMundo(nombre) {
    return 'Hola Mundo!! Soy ' + nombre;
}
var nombre = "Ramsés Martínez";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById('container-saludo');
etiqueta.innerHTML = holaMundo(nombre);
// Variables y Tipos
var nombre = "Ramses Martinez";
var edad = 20; // :'c
var programador = true;
var langs = ['Java', 'Javascipt', 'Python'];
etiqueta.innerHTML = nombre + ' - ' + edad;
console.log('Excelente!');
// Diferencia entre let y var
var a = 10;
var b = 2;
console.log('Valores iniciales: \t' + a + ' - ' + b);
if (a === 10) {
    var a_1 = 5;
    var b = 25;
    console.log('Valores dentro del if: \t' + a_1 + ' - ' + b);
}
console.log('Valores fuera del if: \t' + a + ' - ' + b);
