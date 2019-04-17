
let budget, timeDate; 

function start() {
    budget = +prompt("Ваш бюджет на месяц?", 0);
    
    if (isNaN(budget) || budget == "" || budget == null) {
        start();
    } else {
        timeDate = prompt("Введите дату в формате YYYY-MM-DD", "");   
    }
}

start();


let appDate = {
    budget: budget,
    timeData: timeDate,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}; 

function detectExpenses() {

    for (let i = 0; i < 2; i++) {

        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", 0);
        
        if ((typeof(a) === 'string') && a != "" && b != "") {
    
            appDate.expenses[a] = b;
    
        } else {
            
            i--;
    
        }
    }    
}

detectExpenses();

function detectDayBudget() {
    
    appDate.moneyPerDay = (appDate.budget/30).toFixed();
    alert("Бюджет на 1 день: " + appDate.moneyPerDay);
     
}

detectDayBudget();


function detectLevel() {
    if (appDate.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appDate.moneyPerDay  > 100 && appDate.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appDate.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка!");
    }   
}

detectLevel();

function chooseOptExpenses() {
    
    for (let i = 1; i <= 3; i++) {
        appDate.optionalExpenses[i] = prompt("Статья необязательных расходов?");
    }
}

chooseOptExpenses();

function checkSavings() {
    if (appDate.savings) {
        let save = +prompt("Какова сумма накоплений?", 0),
            percent = +prompt("Под какой процент?", 0);

        appDate.monthIncome = save/100/12 * percent; 
        alert("Доход в месяц с вашего депозита: " + appDate.monthIncome.toFixed(1));
    }
}

checkSavings();