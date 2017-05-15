interface CocheBase {
	getModelo():string;
	getVelocidad():number;
}

class Coche implements CocheBase{
	private color: string;	
	private velocidad: number;
	private modelo: string;

	constructor(modelo:string = null){
		this.velocidad = 0;
		this.color = 'Negro';
		
		if(modelo == null) {
			this.modelo = 'BMW Generic';
		} else {
			this.modelo = modelo;
		}
	}

	public getColor():string{
		return this.color;
	}

	public setColor(color: string){
		this.color = color;
	}

	public getModelo():string{
		return this.modelo;
	}

	public setModelo(modelo: string){
		this.modelo = modelo;
	}

	public acelerar(){
		this.velocidad++;
	}

	public frenar(){
		this.velocidad--;
	}
	public getVelocidad():number{
		return this.velocidad;
	}
}

var coche = new Coche();
console.log('El coche tiene una velocidad inicial de ' + coche.getVelocidad());
coche.setColor('Rojo');
coche.acelerar();
coche.acelerar();
coche.acelerar();

console.log('El coche tiene una velocidad de ' + coche.getVelocidad());

coche.frenar();
console.log('El coche tiene una velocidad final de ' + coche.getVelocidad());

var coche_dos = new Coche('Gran Marquiz');
console.log('Este auto tiene el modelo '+ coche_dos.getModelo());

/**
var coche2 = new Coche();
var coche3 = new Coche();

coche2.setColor('Azul');
coche3.setColor('Blanco');

console.log('El coche 1 es de color: '+ coche.getColor());
console.log('El coche 2 es de color: '+ coche2.getColor());
console.log('El coche 3 es de color: '+ coche3.getColor());
*/