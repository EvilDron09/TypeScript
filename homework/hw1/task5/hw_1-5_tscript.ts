// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

let square = (aNum:number,bNum:number):number=> aNum*bNum;
console.log(square(10,20));

// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r


let roundSquare = (radius:number):number => Math.PI*radius*radius
console.log(roundSquare(3));

// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

let squareCilinder = (height:number,radius:number) => 2*Math.PI*radius*height;
console.log(squareCilinder(3,5));

// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент

let foobarArray = (array:any):void => {
    for (const item of array){
        console.log(item);
    }
}

foobarArray([1,2,4,56,76])

// #59g0IsA
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент

let foobarText = (text:string):void =>
    document.write(`<p>${text}</p>`);

foobarText('Hello World' );

// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let foobarUl = (text:string[]):void =>{
        document.write(`<ul>`)
    for (const string of text) {
        document.write(`<li>${string}</li>`);
    }
    document.write(`</ul>`)
}

foobarUl(['Vasya','Petya','Max']);

// #0Kxco1edSN
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let foobarList = ( text:string, counter:number):void => {
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`
        <li>${text}</li>
        `);
    }
    document.write(`</ul>`)
}

foobarList('Hello World',5)

// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
type PrimitivesType2 = string | boolean |number
let foobarPrimitives = (arrayOfPrimitives:PrimitivesType2[]):void => {
    document.write(`<ul>`)
    for (const item of arrayOfPrimitives) {
        document.write(`
            <li>${item}</li>
        `);
    }
    document.write(`</ul>`)
}
foobarPrimitives([123,true,'vasya',5436])

// #bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об’єкту окремий блок.
type Users5Type = { id:number, name:string, age:number}
let users = (users:Users5Type[]):void => {
    for (const user of users) {
        document.write(`
        <div>${user.id} ${user.name} ${user.age} </div>
        `);
    }
}
users([
    {id:1, name:'Vasya', age:24},
    {id:2, name:'Vasya', age:24},
    {id:3, name:'Vasya', age:24},
    {id:4, name:'Vasya', age:24},
    {id:5, name:'Vasya', age:24},
]);

//#pghbnSB
// – створити функцію, яка повертає найменше число з масиву

let arrayMinValue = (numbers:number[]):number =>{
    let min:number = numbers[0]!;
    for (let i:number = 1; i<numbers.length; i++) {
        let number:number = numbers[i]!;
        if(number<min){
            min = number;
        }
    }
    return min;
}

console.log(arrayMinValue([111, 22, 33, 44]));

// #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let basket = 0;
let sum = (arr:number[]):void => {
    for (const item of arr) {
        basket = basket +item
    }
}

sum([1,2,10]);
console.log(basket);

// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr:number[],index1:number,index2:number):number|number[] => {
    if(index1<arr.length && index2<arr.length){
        let chel:number = arr[index1]!;
        arr[index1] = arr[index2]!;
        arr[index2] = chel;
        return arr
    }
    return -Infinity
}
console.log(swap([11,22,33,44],0,1))

// #mkGDenYnNjn
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

// let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
//     if(exchangeCurrency === 'USD'){
//         let sum = sumUAH/currencyValues[0].value;
//         console.log(sum)
//     }else if(exchangeCurrency === 'EUR'){
//         let sum = sumUAH/currencyValues[1].value;
//         console.log(sum)
//     }else {
//         console.log('Такої валюти немає!')
//     }
//
// }

let exchange = (sumUAH:number,currencyValues:{currency: string,value:number}[],exchangeCurrency:string) =>{
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    if(chosenCurrency){
        return sumUAH/chosenCurrency.value;
    }
    return -1;
}

console.log (exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));
