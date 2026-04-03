interface IUsers {
    id:number;
    name:string;
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users:IUsers[]) =>{
        console.log(users[0].name);
    });

async function foobar23(){
    let users: IUsers[] = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response:Response) => response.json());

    return users;
}



