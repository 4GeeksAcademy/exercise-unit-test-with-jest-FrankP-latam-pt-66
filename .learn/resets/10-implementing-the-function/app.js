const sum =(a,b)=>{
    return a + b
 
}

console.log(sum(7,3))

module.exports = {sum};

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

// 1. De Euro a Dólar
const fromEuroToDollar = (valueInEuro) => {
    return valueInEuro * oneEuroIs["USD"];
}

// 2. De Dólar a Yen (Dólar -> Euro -> Yen)
const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = valueInDollar / oneEuroIs["USD"];
    return valueInEuro * oneEuroIs["JPY"];
}

// 3. De Yen a Libra (Yen -> Euro -> Libra)
const fromYenToPound = (valueInYen) => {
    let valueInEuro = valueInYen / oneEuroIs["JPY"];
    return valueInEuro * oneEuroIs["GBP"];
}

