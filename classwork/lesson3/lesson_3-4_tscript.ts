// class UserGen<T1>{
//     Id:T1;
//     name:string;
//
//     constructor(Id: T1, name: string) {
//         this.Id = Id;
//         this.name = name;
//     }
// }
//
// let userGen1 = new UserGen<number>(1,'dsad');
// let userGen2 = new UserGen<string>('sada','sada');
// let userGen = new UserGen<{x:number;}>({x: 132},'sad');
// let arre:Array<number> = [12,123,42];

interface IUser{
    id:number;
    name:string;
}

let item = localStorage.getItem('user');
if(item){
    let obj =JSON.parse(item);
    let user: IUser = obj as IUser;
}

interface IDog{
   aka:string
}

function foobar<T>(key:string):T{
    let objJSON:string|null = localStorage.getItem(key);
    if(objJSON){
       return JSON.parse(objJSON) as T

    }
    return {} as T
}

let iDog:IDog = foobar<IDog>('dog');
let iUser:IUser = foobar<IUser>('user')
