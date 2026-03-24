// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }

let suits:string[] = [ 'spade','diamond','heart', 'clubs'];
let values:string[] = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

type Card ={
    suit:string,
    value:string,
    color:string,
}

const cards:Card[]=[];
for (const suit of suits) {
    for (const value of values) {
        const card:Card={suit: suit, value:value,color:(suit==='heart'||suit==='diamond')?'red':'black'};
        cards.push(card);
    }
}

console.log(cards);
console.log(cards.find(card =>card.value === 'ace'&& card.suit === 'spade'));
console.log(cards.filter(card=>card.value === '6'));
console.log(cards.filter(card=>card.color === 'red'));
console.log(cards.filter(card =>card.suit === 'diamond'));
console.log(cards.filter(card=>card.suit==='clubs'&&!['6','7','8'].includes(card.value)));
// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//   spades:[],
//   diamonds:[],
//   hearts:[],
//   clubs:[]
// }

type Deck ={
    [key:string]:Card[]
}
let desk = suits.reduce((accum:Deck, suit:string) =>{
    const color= (suit==='heart'||suit==='diamond')?'red':'black';
    accum[suit]=values.map(value => ({
        suit:suit,
        value:value,
        color:color,

    }));
    return accum
},{});
console.log(desk)
