// #j693ca8
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18,
// та повідомити про це користувача

const formAge: HTMLCollectionOf<HTMLFormElement> = document.forms
const ageAdmissionForm:HTMLFormElement = formAge[0]
let div:HTMLDivElement = document.createElement('div');

if(ageAdmissionForm){
    ageAdmissionForm.onsubmit = function (e:SubmitEvent):void {
        e.preventDefault()
        const ageInput  = document.getElementById('ageAdmission') as HTMLInputElement;
        const age:number = Number(ageInput.value);
        if (age >= 18) {
            div.innerText = 'Ласкаво просимо!'
        } else {
            div.innerText = 'Вам немає 18'
        }
        document.body.appendChild(div);
    }
}

// #bq1zkx7WP
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження,
// які відбулись пізніше ніж 10 секунд після попереднього.
//При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

let summ:number = Number(localStorage.getItem('number')) || 100;
let date:number = Date.now();
let visitt:number = Number(localStorage.getItem('time'))|| date;
if(date-visitt > 10000){
    summ+=10;
    localStorage.setItem('number', summ.toString());
    localStorage.setItem('time', date.toString());

    }
    const sumElement:HTMLElement | null = document.getElementById('summ');
    if(sumElement){
        sumElement.innerText = summ.toString();
}

// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів.
// При натисканні prev виводяться попередні 10 об’єктів.

const nums:number[] = Array.from({length: 100} ,(_ , index):number =>index+1);
let currentPage:number = 1
const elementPage:number = 10
const mathCeil:number = Math.ceil(nums.length/elementPage);

function changePage(page:any):void {
    const ulList:HTMLElement|null = document.getElementById('ul');
    if(ulList){
    ulList.innerHTML = '';
    const start:number = (page -1) * elementPage;
    const end:number = start + elementPage;
    const sliceArr:number[] = nums.slice(start,end);
    sliceArr.forEach(value => {
        const li:HTMLLIElement = document.createElement('li');
        li.innerText = `${value}`;
        ulList.appendChild(li);
    })
    }
}

const prevItem:HTMLElement|null = document.getElementById('prev');
prevItem?.addEventListener('click', ():void => {
    if(currentPage > 1){
        currentPage --;
        changePage(currentPage);
    }
})

const nextItem:HTMLElement|null = document.getElementById('next');
nextItem?.addEventListener('click', ():void =>{
    if(currentPage < mathCeil){
        currentPage++;
        changePage(currentPage);
    }
})

changePage(currentPage);
