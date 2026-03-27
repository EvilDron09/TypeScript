// #8Nmt60ZT
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.

const div211:HTMLDivElement = document.createElement('div');
div211.classList.add('alpha');
div211.classList.add('beta');
div211.classList.add('asd');
div211.classList.add('qwe');
div211.style.background = 'red';
document.body.appendChild(div211);

const clonDiv:Node = div211.cloneNode(true);

document.body.appendChild(clonDiv);

// #OPLI89c9G
// – Є масив:
//     [‘Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr:string[] = ['Main','Products','About us','Contacts'];

const menu:HTMLMenuElement = document.createElement('ul');
menu.classList.add('menu');

for (const item of arr) {
    const li:HTMLLIElement =  document.createElement('li');
    li.innerText = item;
    menu.appendChild(li)
}
document.body.appendChild(menu)

// #jeBqHV525U5
// – Є масив
// let coursesAndDurationArray = [
// {title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
type Courses211Type = {
    title: string,
    monthDuration: number
}
let coursesAndDurationArray211: Courses211Type[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray211) {
    const div:HTMLDivElement = document.createElement('div');
    div.innerText = `${course.title} ${course.monthDuration}`;
    document.body.appendChild(div)
}

// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,
// в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
// Завдання робити через цикли.

for (const course of coursesAndDurationArray211) {
    const div2:HTMLDivElement = document.createElement('div');
    const h2:HTMLHeadingElement = document.createElement('h2');
    h2.innerText = `${course.title}`;
    const p:HTMLParagraphElement = document.createElement('p');
    p.innerText = `${course.monthDuration}`;
    div2.append(h2,p);
    document.body.appendChild(div2);
}

