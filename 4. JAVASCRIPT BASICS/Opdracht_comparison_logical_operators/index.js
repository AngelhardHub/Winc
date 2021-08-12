const age = 50;
const firstName = "Piet";
const totalAmount = 26;

if(age >= 18 && age <= 25){
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Dikke pech, volle mep");
}

if(firstName === "Sarah" || firstName === "Bram" || age === 50){
    console.log("Gratis naam-bier!")
}  else {
    console.log("Dikke pech, volle mep");
}

if(totalAmount > 25 && totalAmount <= 50){
    console.log("Gratis portie (vega)bitterballen (8 stuks)");
} else if (totalAmount > 50 && totalAmount < 100) {
    console.log("Gratis portie nachos");
} else if (totalAmount >= 100){
    console.log("Gratis flesje champagne");
 }else {
     console.log("Geen gratis party portie")
 }

