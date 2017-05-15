var Coche = (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.color = 'Negro';
        if (modelo == null) {
            this.modelo = 'BMW Generic';
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
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
console.log('Este auto tiene el modelo ' + coche_dos.getModelo());
/**
var coche2 = new Coche();
var coche3 = new Coche();

coche2.setColor('Azul');
coche3.setColor('Blanco');

console.log('El coche 1 es de color: '+ coche.getColor());
console.log('El coche 2 es de color: '+ coche2.getColor());
console.log('El coche 3 es de color: '+ coche3.getColor());
*/ 
