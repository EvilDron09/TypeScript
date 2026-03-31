// #sH8c4er
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

const button:HTMLButtonElement | null = document.getElementsByTagName('button')[0] ;
if(button) {
    button.addEventListener('click', () => {
        document.getElementById('text')?.remove();
    });
}
// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом.

const divForm:HTMLDivElement = document.createElement('div')
const someForm:HTMLCollectionOf<HTMLFormElement> = document.forms;
const form: HTMLFormElement = someForm[0]
form.addEventListener('submit', (e:SubmitEvent):void =>{
    e.preventDefault();
    const formData = new FormData(form);
    let obj = {
        name:formData.get('name') as string,
        surname:formData.get('surname') as string,
        age:formData.get('age') as string
    };
    localStorage.setItem('obj',JSON.stringify(obj))
    divForm.append(`${obj.name}, ${obj.surname}, ${obj.age}`);
})
document.body.appendChild(divForm);

// #2VaLt4vDczH
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let currentNumber:number= Number(localStorage.getItem('number')??0);
currentNumber +=1;
localStorage.setItem('number', String(currentNumber));
const target= document.getElementById('target') as HTMLElement;
target.innerText = String(currentNumber);

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM.

let sessionsList: string[] = JSON.parse(localStorage.getItem('sessionsList') || '[]');
sessionsList.push(new Date().toString());
localStorage.setItem('sessionsList',JSON.stringify(sessionsList));

// #Jg0gPO00
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const kilogram = document.getElementById('kilogram') as HTMLInputElement|null;
const funts:HTMLElement|null = document.getElementById('funts');
if(kilogram && funts){
kilogram.oninput = function ():void {
    const resolt:number = Number(kilogram.value)*2.2
    funts.innerText = resolt.toFixed(2);
    }
}

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName:string,objToAdd:any):void{
    const lsItem = localStorage.getItem(arrayName);
    if(!lsItem){
        throw new Error('Error');
    }
    const array = JSON.parse(lsItem);
    if(typeof objToAdd === 'object'){
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('todos', {age:122})

// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const table:HTMLElement | null = document.getElementById('table');
const tableGenerate:HTMLCollectionOf<HTMLFormElement> = document.forms;
const tableGenerateForm:HTMLFormElement = tableGenerate[0];
tableGenerateForm.onsubmit = function (e:SubmitEvent):void{
    e.preventDefault();
    const linesValue:number = +tableGenerateForm.lines.value;
    const cellsValue:number = +tableGenerateForm.cells.value;
    const textValue:string = tableGenerateForm.text.value;
    for (let i = 0; i < linesValue; i++) {
        const tr:HTMLTableRowElement = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            const td:HTMLTableCellElement = document.createElement('td');
            td.innerText = textValue;
            tr.appendChild(td);
        }
        if(table){
        table.appendChild(tr);
        }
    }
}
