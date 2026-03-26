class Userl26 {
   // private id:number;
   // private name:string;
   // private status:boolean;
   //  id:number;
   //  name:string;
   //  status:boolean;

    constructor(private _id: number, private _name: string, private _status: boolean) {
        this._id = _id;
        this._name = _name;
        this._status = _status;
    }
    public greeting(){
        console.log('hello')
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }
}
 let user =new Userl26(12, 'qwe', true)

console.log(user.name);
user.name ='wqeqe';

class Userl262 extends  Userl26 {
    // age: number

    constructor(id: number, name: string, status: boolean, private _age: number) {
        super(id, name, status);
        this._age = _age;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}
let userl262 = new Userl262( 2, 'wqe', true, 22);
console.log(userl262.name);
console.log(userl262.age);
