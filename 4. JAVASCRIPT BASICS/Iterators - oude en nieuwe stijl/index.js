//OUDE STIJL LOOPS
// While loop

const colors = ["yellow", "red", "blue"];
let i = 0;
let text = "";

while (colors[i]) {
    text += colors[i];
    console.log(colors[i]);
    i++;
}

// For loop

for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//Nieuwe stijl: array methods, forEach:

colors.forEach(element => {
    console.log(element);   
}
);
    
// VRAAG 1: Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
//  While loop: 6 regels, for loop: 2 regels
// VRAAG 2: Hoeveel regels neemt mijn forEach method in beslag?
// 2 regels
// VRAAG 3: Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// Meestal heeft deze methode minder regels nodig,
// daardoor is deze makkelijker leesbaar,
// ook is deze methode minder foutgevoelig
// VRAAG 4: Kun je een array method gebruiken op een object?
// nee

const courses2 = {
    ajava2: 10,
    ajavascript2: 55,
    anodejs2: 10,
    aphp2: 20,
    acss2: 22,
    ajava3: 10,
    ajavascript3: 55,
    anodejs3: 10,
    aphp3: 20,
    acss3: 22
};

const keys2 = Object.keys(courses2);

keys2.forEach((key2, index) =>{
    console.log(`${key2}: ${courses2[key2]}`)
});

// nee, je bent hier niet aan het itereren, de index waarde is declared maar wordt niet gelezen, daarmee lijkt er geen beginpunt, eindpunt of stapgrootte voor een looping te wordenaangegeven.
// Het lijkt erop dat de properties en de values binnen het courses object in zijn geheel worden gecalled. 