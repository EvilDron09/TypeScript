// #sH8c4er
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

const button:HTMLButtonElement = document.getElementsByTagName('button')[0];

button.addEventListener('click', () =>{
    document.getElementById('text').remove();
});

// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом.

const divForm:HTMLDivElement = document.createElement('div')
const someForm = document.forms.form;
someForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = someForm.name.value;
    const surname = someForm.surname.value;
    const age = someForm.age.value;
    let obj = {name,surname,age};
    localStorage.setItem('obj',JSON.stringify(obj))
    divForm.append(`${name}, ${surname}, ${age}`);
})
document.body.appendChild(divForm);

// #2VaLt4vDczH
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let currentNumber = +localStorage.getItem('number');
currentNumber +=1;
localStorage.setItem('number', currentNumber);
document.getElementById('target').innerText = currentNumber;

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM.

let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
sessionsList.push(new Date());
localStorage.setItem('sessionsList',JSON.stringify(sessionsList));

// #Jg0gPO00
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const kilogram = document.getElementById('kilogram');
const funts = document.getElementById('funts');
kilogram.oninput = function (){
    funts.innerText = +this.value * 2.2;
};

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName,objToAdd){
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

const table = document.getElementById('table');
const tableGenerate = document.forms['tableGenerate'];
tableGenerate.onsubmit = function (e){
    e.preventDefault();
    const linesValue = +tableGenerate.lines.value;
    const cellsValue = +tableGenerate.cells.value;
    const textValue = tableGenerate.text.value;
    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = textValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
