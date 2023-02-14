/**
 * Fichero con la especificación de las pruebas TDD para monedas.js
 * Este fichero DEBE llamarse monedas-spec.js
 * Este fichero DEBE ubicarse en el subdirectorio spec/
 */

// Carga las funciones disponibles en monedas.js
var monedas = require("../monedas.js");

/* 
=================================================================
   Primera parte: 
=================================================================
Ir descomentando los expect 1 por 1. 
A continuación:
 - Ejecutar el test > RED
 - Solcuionar el error > GREEN
 - Refactorizar si se considera necesario > REFACTOR
 
 */


describe("Comprobación del dinero", function () {
    it("Valores negativos, 0 y null no deben ser legales",
        function () {
            //expect(monedas.esMonedaValida()).toBeFalse()
            //expect(monedas.esMonedaValida(0)).toBeFalse()
            //expect(monedas.esMonedaValida(-10)).toBeFalse()
        });
    it("Valor distinto de 0.05, 0.10, 0.20, 0.50, 1, 2, 5, 10, 20, 50, 100, 200 y 500 debe dar false",
        function () {
            //expect(monedas.esMonedaValida(0.23)).toBeFalse()
        });
    it("Valor igual a uno de 0.05, 0.10, 0.20, 0.50, 1, 2, 5, 10, 20, 50, 100, 200 y 500 debe dar true",
        function () {
            //expect(monedas.esMonedaValida(0.05)).toBeTrue()
            //expect(monedas.esMonedaValida(0.10)).toBeTrue()
            //expect(monedas.esMonedaValida(0.20)).toBeTrue()
            //expect(monedas.esMonedaValida(0.50)).toBeTrue()
            //expect(monedas.esMonedaValida(1)).toBeTrue()
            //expect(monedas.esMonedaValida(2)).toBeTrue()
            //expect(monedas.esMonedaValida(5)).toBeTrue()
            //expect(monedas.esMonedaValida(10)).toBeTrue()
            //expect(monedas.esMonedaValida(20)).toBeTrue()
            //expect(monedas.esMonedaValida(50)).toBeTrue()
            //expect(monedas.esMonedaValida(100)).toBeTrue()
            //expect(monedas.esMonedaValida(200)).toBeTrue()
            //expect(monedas.esMonedaValida(500)).toBeTrue()
        });
});



/* 
=================================================================
   Segunda parte: 
=================================================================
En los siguientes expect que debes escribir, debes llamar a la función: monedas.suficienteParaPagar
Recuerda que dicha función necesita dos parámetros: un vector de valores reales y un número real.
Por tanto:
 - Escribe un expect (o dos, según se indica) por cada uno de los comentarios que he dejado, y vuelve a ejecutar el ciclo RED > GREEN > REFACTOR 
 */
// 
describe("Pago de una factura:", function () {
    it("Un montante negativo devuelve -2",
        function () {
            // Escribe el expect necesario
        }
    );
    it("Un vector vacío o nulo solo permite pagar montantes iguales a 0",
        function () {
            // Escribe el expect que para los valores null y 0, devuelva 1
            // Escribe el expect que para los valores null y un valor mayor que 0, devuelva 0
            // Escribe el expect que para un vector vacío y 0, devuelva 1
            // Escribe el expect que para un vector vacíoy un valor mayor que 0, devuelva 0
            
        }
    );

    it("Una moneda no válida en el vector, devuelve -1",
        function () {
            // Escribe el expect que para un vector conteniendo un valor de moneda negativo, devuelve -1
            // Escribe el expect que para un vector conteniendo un valor de moneda positivo, pero no válido, devuelve -1
        }
    );
    it("La suma del vector menor que el montante, devuelve 0",
        function () {
            // Escribe dos expect que para un vector de monedas válidas y un valor a pagar mayor que la suma de dichas monedas, conpruebe que devuelve 0
        }
    );
    it("La suma del vector igual que el montante, devuelve 1",
        function () {
             // Escribe dos expect que para un vector de monedas válidas y un valor a pagar exactamente igual que la suma de dichas monedas, conpruebe que devuelve 1
        }
    );

    it("La suma del vector mayor que el montante, devuelve 2",
        function () {
            // Escribe dos expect que para un vector de monedas válidas y un valor a pagar menor que la suma de dichas monedas, conpruebe que devuelve 2
        }
    );
});