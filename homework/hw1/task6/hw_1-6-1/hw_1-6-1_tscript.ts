// #dFeorS3m7u
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

let s1:string = 'hello world';
console.log(s1.length);
let s2:string = 'lorem ipsum';
console.log(s2.length);
let s3:string = 'javascript is cool';
console.log(s3.length);

const strn:string[] = [s1,s2,s3]
for (const s of strn) {
    console.log(s.length)
}

// #8lld9HMxXWB
// – Перевести до великого регістру наступні стрінгові значення
//  ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

let u1:string = 'hello world';
console.log(u1.toUpperCase());
let u2:string = 'lorem ipsum';
console.log(u2.toUpperCase());
let u3:string = 'javascript is cool';
console.log(u3.toUpperCase());

// #ClDsAm7xba7
// – Перевести до нижнього регістру наступні стрінгові значення
//‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

let l1:string = 'HELLO WORLD';
console.log(l1.toLowerCase());
let l2:string = 'LOREM IPSUM';
console.log(l2.toLowerCase());
let l3:string = 'JAVASCRIPT IS COOL';
console.log(l3.toLowerCase());

// #0b89BkYZwu
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.

let str:string = ' dirty string   ';
const s:string = str.trim();
console.log(s);
console.log(s.length);
console.log(str.length);

// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = ‘Ревуть воли як ясла повні’;
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

function stringToArray (string:string):string[]{
    if(string){
        return string.split(' ');
    }
    return ['']
}

console.log(stringToArray('Ревуть воли як ясла повні'));

// #Rbr5kEQ
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.

let numbers:number[] = [10,8,-7,55,987,-1011,0,1050,0];
let string:string[] = numbers.map(number => number + '');
console.log(string)

// #5hqyKTfmc
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого,
// або навпаки  – залежно від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,’ascending’) // [3,11,21]
// sortNums(nums,’descending’) // [21,11,3]

function sortNums(nums:number[], direction:string):number[]{
    if(direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    }
    if(direction === 'descending'){
        return nums.sort((a, b) => b - a);
    }
    return nums

}
console.log(sortNums([11,21,3],'descending'))

// #yo06d74c1C
// – є масив
// let coursesAndDurationArray = [
//{title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
// ];
//  — відсортувати його за спаданням за monthDuration
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

type CoursesType = {
    title:string,
    monthDuration:number
}

let coursesAndDurationArray:CoursesType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
];

const monthSort:CoursesType[] =
    coursesAndDurationArray
        .sort((a,b) => b.monthDuration-a.monthDuration)
        .filter(value =>value.monthDuration > 5)
        .map( (value, index) =>({id: index + 1, ...value}))

console.log(monthSort);

// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// –написати пошук всіх об’єктів, в яких в modules є sass
// –написати пошук всіх об’єктів, в яких в modules є docker

type CoursesArrayType ={
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules:string[],
}

let coursesArray:CoursesArrayType[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(course =>{
    return course.modules.includes('sass');
}));
console.log(coursesArray.filter(course =>{
    return course.modules.includes('docker');
}))
