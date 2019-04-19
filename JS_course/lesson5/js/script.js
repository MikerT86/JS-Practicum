// 1 
let headerList  = document.querySelectorAll('.menu-item'),
    header      = document.getElementsByClassName('menu'),
    newElem     = document.createElement('li');
 
newElem.classList.add('menu-item');
newElem.textContent = 'Пятый пункт'; 

header[0].insertBefore(headerList[2], headerList[1]);
header[0].appendChild(newElem); 

// 2
document.body.style.background = "url(file:///Users/Mike/JS_Projects/JS_course/lesson5/img/apple_true.jpg) center no-repeat"; 

// 3 
document.getElementById('title').textContent = "Мы продаем только подлинную технику Apple"; 

// 4
let adv     = document.getElementsByClassName('adv'),
    column  = document.getElementsByClassName('column');

column[1].removeChild(adv[0]);

// 5
// let textAnswer  = prompt('Выше отношение к технике apple'),
//     idPrompt    = document.getElementById('prompt');

// idPrompt.textContent = textAnswer; 

console.log(document.querySelectorAll('.menu-item'));