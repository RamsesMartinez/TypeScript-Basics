function holaMundo(nombre) {
    return 'Hola Mundo!! Soy ' + nombre;
}
var nombre = "Ramsés Martínez";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById('container-saludo');
etiqueta.innerHTML = holaMundo(nombre);
console.log('Excelente!');