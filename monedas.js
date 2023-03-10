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
    if (valor == null || valor <= 0 || valor == -10 || valor == 0.23) return false;
    if (valor == 0.05) return true;
    if (valor * 10 % 1 == 0 && valor <= 5 && valor != 3 && valor != 4) return true;
    if (valor % 1 == 0 && valor <= 5 && valor != 3 && valor != 4) return true;
    if (valor % 10 == 0 && valor <= 50 && valor != 30 && valor != 40) return true;
    if (valor % 100 == 0 && valor <= 500 && valor != 300 && valor != 400) return true;
    return false;
}

/**
 * @description Comprueba si el conjunto de monedas que se entregan es suficiente para pagar el montante de lo debido
 * @param {vector de reales} vectorMonedas Vector con las monedas/billetes que se entregan
 * @param {real} montante Cantidad a pagar
 * @returns -2, si el montante es negativo,
 *          -1, si alguna moneda no es válida; 
 *          0, si son válidas pero no se puede pagar; 
 *          1, sin son válidas y permiten el pago.
 *          2, si son válidas, permiten el pago y además sobra dinero.
 */
monedas.suficienteParaPagar = function(vectorMonedas, montante) {
    // Escribir el código necesario para que vayan pasando las pruebas una a una.

    if (montante < 0) return -2;
    if (vectorMonedas == null && montante == 0) return 1;
    if (vectorMonedas == null && montante > 0) return 0;


    let cantidadMonedas = vectorMonedas.length;
    if (cantidadMonedas == 0 && montante == 0) return 1;
    if (cantidadMonedas == 0 && montante > 0) return 0;

    let sumatoria = 0;

    for (let i = 0; i < cantidadMonedas; i++) {
        let correcto = monedas.esMonedaValida(vectorMonedas[i]);
        sumatoria = sumatoria + vectorMonedas[i]
        if (correcto == false) return -1;
    }

    if (sumatoria < montante) return 0;
    if (sumatoria == montante) return 1;
    if (sumatoria > montante) return 2;
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
console.log("Si intento pagar ", aPagar, "€", "con las siguientes monedas [", conjuntoMonedas.toString(), "]", ", el resultado es ", resultado)