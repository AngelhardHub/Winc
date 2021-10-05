
// Opdracht 1: Hey kiddo

const ageChecker = function(number) {
    if (number >= 18) {
        return true;
    }
    return false;
};

const sayHello = function(number) {
    if (number == true) {
        return "Hello there";
    }
     return "Hey kiddo";
};  

const areYouWelcome = function(number) {
    const whatsYourAge = ageChecker(number);
    const validate = sayHello(whatsYourAge);
    return validate;
};

console.log("Antwoord opdracht 1: ", areYouWelcome(17));

// Opdracht 2: VAT calculations 1

const vatCalculator = function(rate) {
    const sum = rate / 100 + 1;
    return sum;
};

const consumerPriceCalc = function(price) {
    const vat = vatCalculator(vatRate);
    const totalPrice = vat * price;
    return totalPrice;
};

let vatRate = 9;
let productPrice = 20;
console.log("Antwoord opdracht 2: ", consumerPriceCalc(productPrice));

// Opdracht 3: VAT calculations 2

const baseCalculator = function(consumerPrice, rate) {
    const basePrice = consumerPrice / (1 + rate / 100);
    return basePrice;
};

const vatAmountCalculator = function(consumerPrice) {
    const basePrice = baseCalculator(productPrice2, vatRate2);
    const vatValue = consumerPrice - basePrice;
    return [basePrice, vatValue];
}; 

let vatRate2 = 21;
let productPrice2 = 1210;

console.log("Antwoord opdracht 3: ", vatAmountCalculator(productPrice2));
