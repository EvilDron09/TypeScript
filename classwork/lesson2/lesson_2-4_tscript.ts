type MyString = string;
let sl24: MyString = 'octen is cool';

type PrimitiveType = string | number | boolean;
let xl34:PrimitiveType = 123;

type FalseType = 0 | false | null | '' | undefined;
let fl23: FalseType = 0;

type Usersl24Type ={
    name:string,
    age:number,
    status:boolean,
}
type Usersl24Type2 = Usersl24Type &{id:number};
let usersl24: Usersl24Type2[] = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 1, name: 'petya', age: 30, status: true},
    {id: 1, name: 'kolya', age: 29, status: true},
    {id: 1, name: 'olya', age: 28, status: false},
    {id: 1, name: 'max', age: 30, status: true},
    {id: 1, name: 'anya', age: 31, status: false},
    {id: 1, name: 'oleg', age: 28, status: false},
    {id: 1, name: 'andrey', age: 29, status: true},
    {id: 1, name: 'masha', age: 30, status: true},
    {id: 1, name: 'olya', age: 31, status: false},
    {id: 1, name: 'max', age: 31, status: true},
];

type MyFn = (a:number)=>void
