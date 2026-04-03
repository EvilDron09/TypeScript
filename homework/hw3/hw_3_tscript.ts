// Створити функцію, яка робить запити на апі, та віддає результат свого запиту.
// Тип відповіді визначається дженеріком функції.
//
//     Сигнатур функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт, з якого чекаємо відповідь

async function foobarHW3<T>(url: string):Promise<T> {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error('Error');
    }
    return response.json() as Promise<T>;
}

interface IUserHW3{
    name: string,
    id: number
}
(async() =>{
    const userHW3:IUserHW3[] = await foobarHW3<IUserHW3[]>('https://jsonplaceholder.typicode.com/users');
    console.log(userHW3[0].name);
})();
