// #XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)
// ts-ignore
class User{

    id:number;
    name:string;
    surname:string;
    email:string;
    phone:string;
constructor(id:number, name:string, surname:string, email:string, phone:string ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    }
}
let users:User[] = [
    new User(3,'vasya','petrov', 'vpetron543@gmail.com','+380999999999'),
    new User(5,'petya','stoliarov', 'hhudw23@gmail.com', '+380673229102'),
    new User(2,'max','petrov', 'ajdkajsdki323@gmail.com', '+38076431212'),
    new User(4,'olga','pupkina','tjdfgjdo@gmail.com', '+380234556332'),
    new User(1,'anna','pupkina','shdfikie@gmail.com', '+380765454456'),
    new User(6, 'nikita','ivanov', 'dasd4321@gmail.com','+380694837342'),
    new User(7,'andrey', 'ivanov', 'ajsdiji@gmail.com',"+380436534567"),
    new User(10,'natalia', 'petrova', 'jijiasjai@gmail.com', '+380345245234'),
    new User(9, 'lena', 'oleinik', 'shfuisiu@gmail.com', '+380645367896'),
    new User(8, 'tanya', 'petrova', 'gfdgjdio@gmail.com', '+380536738278'),
]

console.log(users);

// #2ikXsE2WiKZ
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

const filter = users.filter((user)=> user.id %2 ===0);
console.log(filter);

// #pOeHKct
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sort = users.sort((user1, user2) => user1.id-user2.id);
console.log(sort);

// #nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client

class Client {
    id:number;
    name:string;
    surname:string;
    email:string;
    phone:string;
    order:Products[];

    constructor(id:number, name:string, surname:string , email:string, phone:string, order: Products[]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

class Products {
    title:string;
    pries:number;

    constructor(title: string, pries: number) {
        this.title = title;
        this.pries = pries;
    }
}

let clients:Client[] = [
    new Client(1,'vasya','petrov','vpetron543@gmail.com','+380999999999',
        [new Products('tv', 13500), new Products('phone', 5600)]),
    new Client(2,'petya','stoliarov','hhudw23@gmail.com','+380673229102',
        [new Products('phone', 22500)]),
    new Client(3,'roma', 'ivanov','hasdhuii@gmail.com', '+380543447378',
        [new Products('computer', 150000)]),
    new Client(4,'max','petrov','ajdkajsdki323@gmail.com','+38076431212',
        [new Products('tv', 50000)]),
    new Client(5,'tanya', 'petrova', 'gfdgjdio@gmail.com', '+380536738278',
        [new Products('monitor', 25000)]),
    new Client(6,'andrey', 'ivanov', 'ajsdiji@gmail.com','+380436534567',
        [new Products('keyboard', 1500,), new Products('computer mouse', 600), new Products('headphones', 1000)]),
    new Client(7,'natalia', 'petrova', 'jijiasjai@gmail.com', '+380345245234',
        [new Products('fridge', 30000)]),
    new Client(8,'nikita','ivanov', 'dasd4321@gmail.com','+380694837342',
        [new Products('boiler', 7000)]),
    new Client(9,'anna','pupkina','shdfikie@gmail.com', '+380765454456',
        [new Products('vacuum cleaner', 3000,), new Products('boiler', 4000)]),
    new Client(10,'sveta', 'ivanova', 'hsdkjfi@gmail.com', '+380673929291',
        [new Products('electric kettle', 500), new Products('vacuum cleaner', 5000)]),
]

console.log(clients)

// #8abtVjRv
// // – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

console.log(clients.sort((a,b) => a.order.length - b.order.length));


// #5kla3yMpgp
// – (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт
type DriverType={
    name:string;
    surname:string;
}
class CarClass{
    model:string;
    producer:string;
    year:number;
    maxSpeed:number;
    engineVolume:number;
    driver?: DriverType;
    constructor(model:string, producer:string, year:number, maxSpeed:number, engineVolume:number) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive():void{
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info():void{
        for (const key in this) {
            console.log(key,this[key]);
        }
    }
    increaseMaxSpeed(maxSpeed:number):void{
        if(maxSpeed > 0) this.maxSpeed = this.maxSpeed + maxSpeed;
    }
    changeYear(newYear:number):void{
        if(newYear > 1812) this.year = newYear
    }
    addDriver(driver:DriverType):void{
        if(driver) this.driver = driver;
    }
}
const carClass = new CarClass('911', 'Porsche', 1998, 230, 2.2);
console.log(carClass);
carClass.drive();
carClass.info();
carClass.increaseMaxSpeed(100);
console.log(carClass);
carClass.changeYear(2004);
console.log(carClass);
carClass.addDriver({name: 'vasya', surname: 'pupkin'});
console.log(carClass);

// #zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {
    name:string;
    age:number;
    footSize:number

    constructor(name: string, age: number, footSize: number) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}
class Prince {

    name:string;
    age:number;
    slipper:number;
    wife?:Cinderella;

    constructor(name: string, age: number, slipper: number) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const  cinderellas:Cinderella[]  =[
    new Cinderella('cinderella1', 20,34),
    new Cinderella('cinderella2', 21, 35),
    new Cinderella('cinderella3', 23, 36),
    new Cinderella('cinderella4', 25,37),
    new Cinderella('cinderella5', 22,38),
    new Cinderella('cinderella6', 26, 39),
    new Cinderella('cinderella7', 24, 40),
    new Cinderella('cinderella8', 26, 41),
    new Cinderella('cinderella9', 25,42),
    new Cinderella('cinderella10', 24,43),
]

const prince:Prince = new Prince('prince', 27,37);

for (const cinderella of cinderellas) {
    if(cinderella.footSize === prince.slipper){
        console.log(cinderella);
    }
}

console.log(cinderellas.find(cinderella =>cinderella.footSize === prince.slipper));

// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
//
// @ts-ignore
declare global {
    interface Array<T> {
        myFilter(predicate: (value: T) => boolean): T[];
    }
}
Array.prototype.myFilter = function<T>( predicate: (value: T) => boolean): T[] {
    const result = [];
    for (const item of this) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

type Users17Type = {
    name: string,
    age: number,
    status: boolean,
}

let users17: Users17Type[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


const result = users17.myFilter((user) => user.status);
console.log(result);


