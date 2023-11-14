//esercizio n.3
let array_1 = [
    ['un' ,'per' ,'incatenarli.'],
    ['Anello' ,'trovarli,'],
    ['ghermirli' ,'e'],
    ['gondor' ,'Mark']
];
let array_2 = [
    [['trovarli,']],
    ['tu' ,'sciocchi'],
    ['tu' ,'sciocchi' ['padron' ,'Sauron']],
    ['nel' ,['fuggite' ,'Gandalf']],
    [['domarli' , 'passare'], 'buio' ]
];

var frase =`${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_2[4][0][0]},${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_1[1][1]} ${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_1[2][0]} ${array_1[2][1]} ${array_2[3][0]} ${array_2[4][1]} ${array_1[0][2]}`
console.log(frase)