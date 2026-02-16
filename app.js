const sum = (a, b) => {
    return a + b;
}

// Tasas de conversión basadas en 1 Euro (EUR)
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

// NUEVA FUNCIÓN: De Euro a Dólar
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}

// Exportar todas las funciones (incluyendo la nueva)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };