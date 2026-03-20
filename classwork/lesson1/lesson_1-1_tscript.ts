let a :string = 'qwe';
let b :number = 123;
let c :boolean = true;
function foo (arg1:number, arg2:number):number{
    return arg1 + arg2;
}
let d :number[] = [];
d.push(123);

// type UserType ={
//     name: string;
//     age: number;
//     status: boolean;
//     greeting: (str:string) => string;
// }
// type IUser ={
//     name: string;
//     age: number;
//     status: boolean;
//     greeting: (str:string) => string;
// }
class User {
    // name: string;
    // age: number;
    // status: boolean;

    constructor(public name: string, public age: number, public status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting():void{
        console.log('asdas');
    }
}

let users: User[] = [
    new User('qwe',12,true)
    // {greeting:(str:string):string => 'hello1',name: 'vasya', age: 31, status: false},
    // {greeting:(str:string):string => 'hello2',name: 'petya', age: 30, status: true},
    // {name: 'kolya', age: 29, status: true},
    // {name: 'olya', age: 28, status: false},
    // {name: 'max', age: 30, status: true},
    // {name: 'anya', age: 31, status: false},
    // {name: 'oleg', age: 28, status: false},
    // {name: 'andrey', age: 29, status: true},
    // {name: 'masha', age: 30, status: true},
    // {name: 'olya', age: 31, status: false},
    // {name: 'max', age: 31, status: true}
];
console.log('user')
