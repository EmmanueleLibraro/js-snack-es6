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


    //END DOC READY
});