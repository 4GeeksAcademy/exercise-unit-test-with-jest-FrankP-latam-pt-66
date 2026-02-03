const sum = (a, b) => {
    return a + b;
}

// Tasas de conversión basadas en 1 Euro (EUR)
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87,  // libra esterlina
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

// ESTA ES LA CLAVE: Exportar todo junto al final
module.exports = { sum, fromDollarToYen, fromYenToPound };