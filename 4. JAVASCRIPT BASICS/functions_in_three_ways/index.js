// Opdracht 1: function declaration
function Sommetjes(getal1, getal2){
    a = getal1 * getal1;
    b = getal2 * getal2;
    c = a + b;
    return d = c * c;
}

console.log(Sommetjes(2, 4)); //400


// Opdracht 2: function expression
const Sommetjes2 = function (getal3, getal4){
    a = getal3 * getal3;
    b = getal4 * getal4;
    c = a + b;
    return d = c * c;
};

console.log(Sommetjes2(2, 4)); //400

// Opdracht 2: function expression
const Sommetjes3 = (getal5, getal6) => {
    a = getal5 * getal5;
    b = getal6 * getal6;
    c = a + b;
    return d = c * c;
};

console.log(Sommetjes3(2, 4)); //400

// Uit alle drie de functies geven met dezelfde argumenten dezelfde output.