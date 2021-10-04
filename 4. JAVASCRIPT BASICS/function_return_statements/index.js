//Assignment: Checking if a number is big
const numberChecker = function(number){
    if (number > 100){
        return "this is true";
    }
    return "this is false";
};

const result = numberChecker(110);
console.log(result);

// Assignment: Bouncer at club

// Multiple return statements 
const BouncerBotEntreeJudgement1 = function(people, age){
    if (people > 100){
        return "it's too busy now, come back later";
    }
    else if (age <= 18) {
        return "this is a club for adults";
    } return "come in";
};

const result2 = BouncerBotEntreeJudgement1(90, 17);
console.log(result2);

// general rejection
const BouncerBotEntreeJudgement2 = function(people, age){
    if (people < 100 && age >= 18){
        return "come in";
    }
        return "no entrance for you!"
};

const result3 = BouncerBotEntreeJudgement2(11, 20);
console.log(result3);


// undefined when access is denied
const BouncerBotEntreeJudgement3 = function(people, age){
    if (people < 100 && age >= 18){
        return "come in";
    }
};

const result4 = BouncerBotEntreeJudgement3(99, 20);
console.log(result4);

//Assignment: Calculating the average

// Calculate avarage by looping
const numbers1 = [4, 6, 2, 8, 10];

function AvarageCalculator1(avarageArray1) {
    total1 = 0
    for(i=0; i < avarageArray1.length; i++){
        total1 += avarageArray1[i]
    };

    return total1/ avarageArray1.length;

};
console.log("The array avarage is " + AvarageCalculator1(numbers1));

// Calculate avarage with the reduce function
const numbers = [4, 6, 2, 8, 11];

function AvarageCalculator(AvarageArray) {
    return AvarageArray.reduce((accumulator, item) => {
    return total = (accumulator + item);
    },
    0
    )/ AvarageArray.length;
};

console.log(AvarageCalculator(numbers)); 

// This function produces the avarage of an array
