// #67kfznmiMl
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль.

const qwe:any[] =[ 10, 'vasya', true, 213, undefined, false, {}, [], null, NaN];

console.log(qwe[0]);
console.log(qwe[1]);
console.log(qwe[2]);
console.log(qwe[3]);
console.log(qwe[4]);
console.log(qwe[5]);
console.log(qwe[6]);
console.log(qwe[7]);
console.log(qwe[8]);
console.log(qwe[9]);

// #LARqoUj5I
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

type BookType = {
    title: string;
    pageCount: number;
    genre: string;
}

const bookOne:BookType = {
    title: 'Book Title One',
    pageCount: 145,
    genre: 'Fantasy',
};
console.log(bookOne);

const bookTwo:BookType ={
    title: 'Book Title Two',
    pageCount: 240,
    genre: 'Novel',
};
console.log(bookTwo);

const bookThree:BookType = {
    title: 'Book Title Three',
    pageCount: 220,
    genre: 'Science fiction',
};
console.log(bookThree);

// #sA3Gg1sCp
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.
type AuthorsType = {
    name:string;
    age:number;
}
type BookAndAuthorsType ={
    title:string;
    pageCount:number;
    genre:string;
    authors:AuthorsType[];
}

    const bookAndAuthorsOne:BookAndAuthorsType = {
    title: 'Book Title One',
    pageCount: 145,
    genre: 'Fantasy',
    authors: [
        {
            name: 'Vasya',
            age: 45,
        },
        {
            name: 'Maxim',
            age: 30,
        }
    ],
};
console.log(bookAndAuthorsOne);

let bookAndAuthorsTwo:BookAndAuthorsType = {
    title: 'Book Title Two',
    pageCount: 240,
    genre: 'Novel',
    authors: [
        {
            name: 'Petya',
            age: 34,
        },
        {
            name: 'Vanya',
            age: 35,
        },
    ],
};
console.log(bookAndAuthorsTwo)

let bookAndAuthorsThree:BookAndAuthorsType = {
    title: 'Book Title Three',
    pageCount: 220,
    genre: 'Science fiction',
    authors: [
        {
            name: 'Anna',
            age: 25,
        },
        {
            name: 'Olga',
            age: 28,
        },

    ],
};
console.log(bookAndAuthorsThree)

// #jCHFnEbdmFd
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача.
type UsersType ={
    name:string;
    username:string;
    password:string;
}
let user1:UsersType={name: 'Vasya', username: '_Vasya_123', password: '234asd809',};
let user2:UsersType={name: 'Petya', username: '20_Petya_04', password: 'FE2390OP',};
let user3:UsersType={name: 'Andrey', username: 'Andrey940', password: 'HErd56iok'};
const users :UsersType[]=[
    user1,{name: 'Vasya', username: '_Vasya_123', password: '234asd809',
    },
    user2,{name: 'Petya', username: '20_Petya_04', password: 'FE2390OP',
    },
    user3,{name: 'Andrey', username: 'Andrey940', password: 'HErd56iok'}
    // user4 = {
    //     name: 'Anna',
    //     username: '<_Anna_>',
    //     password: 'wepop234',
    // },
    // user5 = {
    //     name: 'Olga',
    //     username: '*Olga*',
    //     password: 'rq392lafs',
    // },
    // user6 = {
    //     name: 'Maxim',
    //     username: 'Maxson356',
    //     password: 'yrt943QEt',
    // },
    // user7 = {
    //     name: 'Natalia',
    //     username: 'Natali97',
    //     password: 'w32pfoKJe',
    // },
    // user8 = {
    //     name: 'Elizaveta',
    //     username: 'Liza523',
    //     password: 'qeroi1234P',
    // },
    // user9 = {
    //     name: 'Alexander',
    //     username: 'Sasha1985',
    //     password: 'jaijdIO1234',
    // },
    // user10 = {
    //     name: 'Kiril',
    //     username: 'Kiril432',
    //     password: '132PPOIasdc2',
    // },
];
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);
console.log(users[6]);
console.log(users[7]);
console.log(users[8]);
console.log(users[9]);

// #coYydZuaeEB
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати.
// Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу.
type WeaterType = {
    day:string;
    morning:number;
    afternoon:number;
    evening:number;
}

let weather:WeaterType[] = [
    { day: 'Monday',
        morning: -2,
        afternoon: -6,
        evening: -10,
    },
    {day: 'Tuesday',
        morning: -12,
        afternoon: -10,
        evening: -13,
    },
    {day: 'Wednesday',
        morning: -6,
        afternoon: -4,
        evening: -4,
    },
    {day: 'Thusday',
        morning: -4,
        afternoon: -2,
        evening: 0,
    },
    {day: 'Friday',
        morning: -1,
        afternoon: 1,
        evening: -2,
    },
    {day: 'Saturday',
        morning: 2,
        afternoon: 4,
        evening: 3,
    },
    {day: 'Sunday',
        morning: 5,
        afternoon: 8,
        evening: 6,
    },
];
console.log(weather);

// #bAUsaq6LI
// – Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3.

let strValue:string|null = prompt('Введіть число (завдання #bAUsaq6LI)');
if(strValue!==null) {
    let numValue:number =+strValue
    if (numValue!== 0) {
        console.log('Вірно');
    } else {
        console.log('Невірно');
    }
}

// #3ckURgvs
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число.
// (в першу, другу, третю або четверту частину години).

let time:string|null = prompt('Введіть число від 0до 59 (завдання #3ckURgvs)');
if(time!==null) {
    if (time >= '0' && time <= '15') {
        console.log("Перша чверть")
    } else if (time >= '16' && time <= '30') {
        console.log('Друга чверть')
    } else if (time >= '31' && time <= '45') {
        console.log('Третя чверть')
    } else if (time >= '46' && time <= '59') {
        console.log('Четверта чверть')
    } else {
        console.log('Це не підходить, виберіть число від 0 до 59')
    }
}

// #UMoNq4biWGe
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

let day:string|null = prompt('Введіть число від 1 до 31 (завдання #UMoNq4biWGe)');
if(day!==null) {
    if (day >= '1' && day <= '10') {
        console.log('Перша декада')
    } else if (day >= '11' && day <= '20') {
        console.log('Друга декада')
    } else if (day >= '21' && day <= '31') {
        console.log('Третя декада')
    } else {
        console.log('Це не підходить, виберіть число від 1 до 31')
    }
}
// #KzrtqyQ
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
let planDay:string|null = prompt('Введіть номер дня тижня (від 1 до 7) (завдання #KzrtqyQ)');
if(planDay!==null) {
    let key :number=+planDay;
    switch (key) {
        case 1:
            console.log('Monday')
            break
        case 2:
            console.log('Tuesday')
            break
        case 3:
            console.log('Wednesday')
            break
        case 4:
            console.log('Thusday')
            break
        case 5:
            console.log('Friday')
            break
        case 6:
            console.log('Saturday')
            break
        case 7:
            console.log('Sunday')
            break
        default:
            console.log('Це не підходить, виберіть число від 1 до 7')
    }
}
// #uwsz1RnTQJ1
// – Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати, коли введені рівні числа.

let num1:number = 5;
let num2:number = 5;

if(num1>num2){
    console.log(num1)
}else if(num1<num2){
    console.log(num2)
}else if(num1===num2){
    console.log('Числа рівні')
}else{
    console.log('Помилка, ведіть число!')
}

// #iBvqtjEm
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x:null|undefined|number|string|boolean = null;
if(!x){
    console.log('"default"')
}else {
    console.log(x)
}

// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.
type CourseType = {title: string, monthDuration: number};
let coursesAndDurationArray: CourseType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
];

const course1:CourseType = coursesAndDurationArray[0]!;

if(course1.monthDuration > 5){
    console.log('super')
} else {
    console.log('error')
}
