// Importamos todas las funciones necesarias al principio
const { sum, fromDollarToYen, fromYenToPound } = require('./app.js');

test('add 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One dollar should be 146.26 yens", function() {
    const yens = fromDollarToYen(1);
    expect(yens).toBeCloseTo(146.26, 1); 
});

test("1000 yens should be approximately 5.55 pounds", function() {
    const pounds = fromYenToPound(1000);
    expect(pounds).toBeCloseTo(5.56, 1);
});