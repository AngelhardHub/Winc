

let nameA = prompt('Welkom, wat is je naam?', "naam");
alert(`Hoi ${nameA}! We gaan een spelletje spelen. Het heet Guess the number.`);

let floor = prompt("Noem het eerste nummer van de range waarbinnen je een getal wilt raden.");
let ceiling = prompt("Noem het laatste nummer van de range waarbinnen je een getal wilt raden.");

const letsPlay = function () {
    matchMaker();
    alert(`Het spel is nu afgelopen, dag ${nameA}, tot de volgende keer!`);
};

const matchMaker = function () {
    for (i = 1; i <= 5; i++) {
        let input = prompt(`Ik heb een nummer in gedachte tussen de ${floor} en ${ceiling}. Welk nummer denk jij dat het is?`, `nummer tussen de ${floor} en ${ceiling}`);
        let output = (randomNumber(floor, ceiling));
        if (input == output) {
            return alert("Gefeliciteerd, je hebt gewonnen.");
        } else if (i < 5) {
            alert(`Dat is niet correct, het goede antwoord was ${output}, wil je opnieuw raden?`);
        } else {
            alert(`Dat is niet correct, het goede antwoord was ${output}`);
        }
    }
};

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

letsPlay();




































// let name = prompt('Welkom, wat is je naam?', "naam");
// let greeting = alert(`Hoi ${name}!`);
// let number = prompt("We gaan een spelletje spelen, ik heb een nummer in mijn hoofd tussen de 0 en 25. Welk nummer denk jij dat het is?", "nummer tussen de 0 en 25");
// let output = Math.floor(Math.random() * 26);

// const uitkomst = function (output){
//     if (output == number){
//         return document.write(alert("Gefeliciteerd, je hebt gewonnen."));
//     }
//     else {
//         return document.write(alert(`${number} is niet correct, ik had ${output} in gedachten.`));
//     }
// };

// document.write(uitkomst(output));




































































