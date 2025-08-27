test("Un euro debe ser 1.07 dolares", function() {
    // Importar la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("Convirtiendo dolares en yenes (1 dolar = 149.03 yen)", function() {
    // Importar la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(3.5)).toBe(521,605);
})

test("Convirtiendo yenes en pounds (1 yen = 0.0072 pound)", function() {
    // Importar la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(100)).toBe(0.72);
})
