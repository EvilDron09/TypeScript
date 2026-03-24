// #iz6emEsP2BA
// – є масив
// let coursesAndDurationArray = [
// {title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
// ];
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції
//
class Course18 {
    title:string;
    monthDuration:number

    constructor(title: string, monthDuration: number) {
        this.title = title;
        this.monthDuration = monthDuration;
    }
}

class Course18_2 extends Course18{
    id:number

    constructor(title: string, monthDuration: number, id: number) {
        super(title, monthDuration);
        this.id = id;
    }
}
let coursesAndDurationArray18:Course18[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
];

console.log(coursesAndDurationArray18.map<Course18_2>((courses:Course18,index:number)=>({id:index+1,...courses})));

// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об’єкта.
//     Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.
type FunClonObj ={
    functClone:Function,key:string;
}
function cloner<T> (obj: T):T{
    if(obj){
        let funct :Array<FunClonObj> =[]
        for (const key in obj) {
            if(typeof obj[key] === 'function'){
                const functClone = (obj[key] as Function).bind({});
                funct.push({functClone, key});
            }
        }
        const parse:T = JSON.parse(JSON.stringify(obj));
        for (const f of funct) {
            (parse as any)[f.key]=f.functClone;
        }
        console.log(parse)
        return parse;
    }
    throw new Error('!!!!!');
}

const clon = cloner({id:1, name:'vasya', greeting(){console.log('hello')}, foo(){}});
clon.greeting()
