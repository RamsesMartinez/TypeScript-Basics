function holaMundo(nombre) {
	return 'Hola Mundo!! Soy ' + nombre;
}

var nombre = "Ramsés Martínez";
var resultado = holaMundo(nombre);

var etiqueta = <HTMLElement>document.getElementById('container-saludo');
etiqueta.innerHTML = holaMundo(nombre);

// Variables y Tipos
var nombre:string = "Ramses Martinez";
var edad:number = 20; // :'c
var programador:boolean = true;
var langs:Array<string> = ['Java', 'Javascipt', 'Python']

etiqueta.innerHTML = nombre + ' - ' + edad;

console.log('Excelente!');


// Diferencia entre let y var

var a = 10;
var b = 2;
console.log('Valores iniciales: \t' + a + ' - ' + b);

if(a === 10) {
	let a = 5;
	var b = 25;
	console.log('Valores dentro del if: \t' + a + ' - ' + b);
}

console.log('Valores fuera del if: \t' + a + ' - ' + b);

// Funciones y Tipado

function devolverNumero(num:number):string {
	return 'El numero es: ' + num;
}

function esSaludo(saludo:string):boolean {
	if (saludo == 'Hola') {
		return true;
	}
	return false;
}
console.log(devolverNumero(4));
console.log(esSaludo('Hola'));