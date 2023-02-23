/**
 * Ejercicio de TDD.
 * Pequeño ejercicio de TDD para Jasmine con Node
 * Creamos un par de funciones que permiten:
 * a) comprobar si un valor corresponde con una moneda válida en euros
 * b) Comprobar si con un conjunto de dichos valores alcanza para pagar una determinada cantidad.
 * 
 * @author Victor Rivas <vrivas@ujaen.es>
 * @date 06-may-2022
 */

/*
PROCESO DE INSTALACIÓN DE JASMINE
Fuente: https://jasmine.github.io/pages/getting_started.html

a) npm install --save-dev jasmine
b) npx jasmine init
c) , "scripts": { "test": "jasmine" } // Añadir a package.json
d)  "spec_dir": "./spec" // Modificar en spec\support\jasmine.json
 

 Para ejecutar: 
 npm test

 O bien directamente desde package.json o desde el menú de ejecución y depuración.

 */

// Creación de un módulo (una especie de espacio de nombres o clase) para poder ser probado
var monedas = module.exports = {};

/**
 * @description Esta función comprueba si un valor pasado como real corresponde o no a una moneda/billete válido en euros
 * @param {real} valor Valor de la moneda/billete a comprobar 
 * @returns True si es un valor válido (0.01, 0..02, 0.5, 0.10...500.00); false en otro caso.
 */
monedas.esMonedaValida = function(valor) {
    // Escribir el código necesario para que vayan pasando las pruebas una a una.
    if (valor == null) return false;
    if (valor == 0) return false;
    if (valor == -10) return false;
    if (valor == 0.23) return false;
    if (valor == 0.05) return true;
    if (valor == 0.10) return true;
    if (valor == 0.20) return true;
    if (valor == 0.50) return true;
    if (valor == 1) return true;
    if (valor == 2) return true;
    if (valor == 5) return true;
    if (valor == 10) return true;
}

/**
 * @description Comprueba si el conjunto de monedas que se entregan es suficiente para pagar el montante de lo debido
 * @param {vector de reales} vectorMonedas Vector con las monedas/billetes que se entregan
 * @param {real} montante Cantidad a pagar
 * @returns -2, si el montante es negativo,
 *          -1, si alguna moneda no es válida; 
 *          0, si son válidas pero no se puede pagar; 
 *          1, sin son válidas y permiten el pago.
 *          2, si son válidas, permiten el pago y admás sobra dinero.
 */
monedas.suficienteParaPagar = function(vectorMonedas, montante) {
    // Escribir el código necesario para que vayan pasando las pruebas una a una.
}

/*
 * ----------------------------------------
 * - Cödigo principal de la aplicación
 * ----------------------------------------
 */

console.log("Aplicación MONEDAS")
console.log("==================")

let conjuntoMonedas = [1, 2, 1, 2, .50, 20, 5]
let aPagar = 10;
let resultado = monedas.suficienteParaPagar(conjuntoMonedas, aPagar)
console.log("Si intento pagar ", aPagar, "€", "con las siguientes monedas [", conjuntoMonedas.toString(), "]", ", el resultado es", resultado)