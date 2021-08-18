const wallColor = function (){
    console.log("yellow")
};    

wallColor();

const wallColor1 = function(color){
    console.log(color);
};

wallColor1("green");
wallColor1("pink");

const wallColor2 = function(wall, color){
    console.log("The " + wall + " has been painted " + color);
};
const wallLocation = "north-wall";
const paintedColor = "gold";

wallColor2(wallLocation, paintedColor);



const bakingPizza = function () {
    console.log("make dough")
    console.log("add toppings")
    console.log("bake pizza")
};



