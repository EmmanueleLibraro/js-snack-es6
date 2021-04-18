$('document').ready(function(){

// jsnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

    const bike1 = {
        nome: "Pink",
        peso: 7
    }
    const bike2 = {
        nome: "Brown",
        peso: 8
    }
    
    const bike3 = {
        nome: "bianchi",
        peso: 7.5
    }
    
    //ECMA 6 VERSION
    const bikes = [
        bike1,
        bike2,
        bike3
    ];
    
    //SETTIAMO A ZERO LA BICI PER COMODITA'
    let pesoBici = 0;
    
    //CICLIAMO SUL BIKES QUAL'E' LA PIU' LEGGERA
    for(let i = 0; i < bikes.length; i++){
    
            if(bikes[i].peso < bikes[pesoBici]){
                pesoBici = i;
        }
        const {nome, peso} = bikes[i];
        console.log(nome, peso)
    }
    

// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

    //GENERAZIONE NUMERI RANDOM
    const randomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() *(max - min + 1) ) + min;
    };

    const teams = [
       {
        nome: "Palermo",
        points: 0,
        falli: 0,
       },
       {
        nome: "Napoli",
        points: 0,
        falli: 0,
       },
       {
        nome: "Inter",
        points: 0,
        falli: 0,
       },
    ];

    console.log('Before', teams);
    let updatedTeams = [...teams];
    for(let i = 0; i < updatedTeams.length; i++){
        updatedTeams[i].points = randomNumber(0, 100);
        updatedTeams[i].fouls = randomNumber(0, 100); 
        
    }

console.log('Results', updatedTeams);


let newArrayResults = [];

for(let i = 0; i < updatedTeams.length; i++){
    newArrayResults.push({
        name: updatedTeams[i].name,
        fouls: updatedTeams[i].fouls
    })
}

console.log('New results', newArrayResults);



const myArray = ["Paolo", "Lorenzo", "Fabio", "Lillo", "Luna"];

 let min = parseInt( prompt("Inserisci un numero tra 0 e 5"));
while(isNaN(min) || min < 0 && min > myArray.length){
    min = parseInt( prompt("Inserisci un numero tra 0 e 5"));
};

 let max = parseInt( prompt("Inserisci un numero tra 0 e 5"));
while(isNaN(max) || max < min || max > myArray.length){
    max = parseInt( prompt("Inserisci un numero tra 0 e 5"));
};



let myArrayX = [];

function filterArray(arr, min, max){
    for( let i = 0; i < arr.length; i++){
        const newArray = arr[i];
        if(min <= i && max >= i){
            newArray.push(newArray);
        };
    };
};


filterArray(myArrayX, min, max);

newArrayFilter = myArray.filter((element, index) =>{
    return min <= index && max >= index;
});


    //END DOC READY
});