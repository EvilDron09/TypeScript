
let w:string = 'hello';
console.log(w);

let v:string = 'own';
console.log(v);

let t:string = "com";
console.log(t);

let d:string = 'ua';
console.log(d);

let e:number = 1;
console.log(e);

let f:number = 10;
console.log(f);

let n:number = -999;
console.log(n);

let g:number = 123;
console.log(g);

let j:number = 3.14;
console.log(j);

let q:number = 2.7;
console.log(q);

let h:number = 16;
console.log(h);

let y:boolean =true;
console.log(y);

let r:boolean = false;
console.log(r);


// #6Qb97gsv
// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)

let firstName:string = 'Андрій';
let middleName:string = 'Олександрович';
let lastName :string= 'Антоненко';

let person:string = `${lastName} ${firstName} ${middleName}`;
console.log(person);

// #4N0y5tufA
// – За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = ‘100’; let c = true;

let a:number =100;
console.log(typeof a);

let b:string = '100';
console.log(typeof b);

let c:boolean =true;
console.log(typeof c);

// #ruUtWDUI
// Додаткове для тих, хто цікавився prompt`oм
// – За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль

let yourFirstName:string|null = prompt('Your name:');
if(yourFirstName!==null) {
    console.log(yourFirstName);
}

let yourMiddleName:string|null = prompt('Your middle name:');
if(yourMiddleName!==null) {
    console.log(yourMiddleName);
}

let yourAge:string|null = prompt('Your age:');
if(yourAge!==null) {
    console.log(yourAge);
}


