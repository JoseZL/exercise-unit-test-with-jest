// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("Un euro debe ser 1.07 dolares", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("Un dolar debe ser 146,26 yenes", function() {
    // Importar la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(5)).toBe(731,30);
})

test("Un yen debe ser 0.0055 pounds", function() {
    // Importar la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(100)).toBe(0.55);
})