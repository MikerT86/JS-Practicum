'use strict';

var budget = prompt("Ваш бюджет на месяц?", 0),
    timeDate = prompt("Введите дату в формате YYYY-MM-DD", "");    

let appDate = {
    budget: budget,
    timeData: timeDate,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {

    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", 0);
    
    if ((typeof(a) === 'string') && a != "" && b != "") {

        appDate.expenses[a] = b;

    } else {
        
        i--;

    }

}

// let i = 0;

// while (i < 2) {

//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", 0);
    
//     if ((typeof(a) === 'string') && a != "" && b != "") {

//         appDate.expenses[a] = b;
//         i++;

//     }   
    
// }

alert("Бюджет на 1 день: " + appDate.budget/30);