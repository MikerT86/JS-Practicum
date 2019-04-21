//Служебные переменные 
let btnStart        = document.getElementById('start'),
    budget          = document.getElementsByClassName('budget-value')[0],
    daybudget       = document.getElementsByClassName('daybudget-value')[0],
    level           = document.getElementsByClassName('level-value')[0],
    expenses        = document.getElementsByClassName('expenses-value')[0],
    optExpanses     = document.getElementsByClassName('optionalexpenses-value')[0],
    income          = document.getElementsByClassName('income-value')[0],
    monthSavings    = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings     = document.getElementsByClassName('yearsavings-value')[0],
    expensesInput   = document.getElementsByClassName('expenses-item'),

    optExpensesInput            = document.querySelectorAll('.optionalexpenses-item'),
    
    buttonConfirmExpensen       = document.getElementsByTagName('button')[0],
    buttonConfirmOptExpensen    = document.getElementsByTagName('button')[1],
    buttonCalc                  = document.getElementsByTagName('button')[2],
    
    chooseIncome    = document.querySelector('.choose-income'), 
    checkboxIncome  = document.querySelector('#savings'),
    sumIncome       = document.querySelector('.choose-sum'),
    percentIncome   = document.querySelector('.choose-percent'),
    yearValue       = document.querySelector('.year-value'),
    monthValue      = document.querySelector('.month-value'),
    dayValue        = document.querySelector('.day-value');

let money, timeDate; 

//Объект для хранения информаци по бюджету
let appDate = {
    budget: money,
    timeData: timeDate,
    expenses: {},
    optionalExpenses: {},
    income: [],
    sumExpenses: 0,
    savings: false  
}; 

buttonCalc.disabled                 = true;
buttonConfirmExpensen.disabled      = true;
buttonConfirmOptExpensen.disabled   = true;

sumIncome.disabled      = true;
percentIncome.disabled  = true;

//Callback функции обработки событий
let chooseExpenses = function() {
    let sumExpenses = 0;

    for (let i = 0; i < expensesInput.length; i++) {

        let a = expensesInput[i].value,
            b = expensesInput[++i].value;
        
        if ((typeof(a) === 'string') && (typeof b) != null && (typeof a) != null && a != "" && b != "") {
    
            appDate.expenses[a] = b;
            sumExpenses += +b;
    
        } else {
            
            i--;
    
        }
    }
    appDate.sumExpenses     = sumExpenses; 
    expenses.textContent    = sumExpenses;

};

let start = function() {
    timeDate    = prompt("Введите дату в формате YYYY-MM-DD", "");
    money       = +prompt("Ваш бюджет на месяц?", 0);
    
    while (isNaN(money) || money == "" || money == null) {
        money   = +prompt("Ваш бюджет на месяц?", 0);
    }
    appDate.budget = money;
    appDate.timeData = timeDate;

    budget.textContent = money.toFixed();

    yearValue.value     = new Date(Date.parse(timeDate)).getFullYear();
    monthValue.value    = new Date(Date.parse(timeDate)).getMonth() + 1;
    dayValue.value      = new Date(Date.parse(timeDate)).getDate();

    buttonCalc.disabled                 = false;
    buttonConfirmExpensen.disabled      = false;
    buttonConfirmOptExpensen.disabled   = false; 
};

let chooseOptExpenses = function() {
    for (let i = 0; i < optExpensesInput.length; i++) {
        let opt = optExpensesInput[i].value;
        appDate.optionalExpenses[i] = opt;    

        optExpanses.textContent += appDate.optionalExpenses[i] + ' ';  
    }  
}; 

let calcDayBudget = function() {

    if (appDate.budget != undefined) {

        appDate.moneyPerDay     = ((appDate.budget - appDate.sumExpenses)/30).toFixed();
        daybudget.textContent   = appDate.moneyPerDay;

        if (appDate.moneyPerDay <= 100) {
            level.textContent = "Минимальный уровень достатка";
        } else if (appDate.moneyPerDay  > 100 && appDate.moneyPerDay < 2000) {
            level.textContent = "Средний уровень достатка";
        } else if (appDate.moneyPerDay > 2000) {
            level.textContent = "Высокий уровень достатка";
        } else {
            level.textContent = "Произошла ошибка!";
        }
    } else {
        alert('Начните расчет для определения бюджета!');
    }
    
};

let calcIncome = function() {
    if (appDate.savings) {
        let sum     = +sumIncome.value,
            percent = +percentIncome.value,
            exp     = +appDate.expenses
    
        appDate.monthIncome = sum/100/12 * percent;
        appDate.yearIncome  = sum/100 * percent;

        monthSavings.textContent = appDate.monthIncome.toFixed(1); 
        yearSavings.textContent  = appDate.yearIncome.toFixed(1); 
    }
};

let checkboxClick = function() {
    appDate.savings         = !appDate.savings;
    if (appDate.savings == false) {
        appDate.monthIncome = '';
        appDate.yearIncome  = '';
        monthSavings.textContent = '';
        yearSavings.textContent  = '';    
    } else {
        calcIncome();
    }
    sumIncome.disabled      = !appDate.savings;  
    percentIncome.disabled  = !appDate.savings;
};

//Добавление обработчиков событий
btnStart.addEventListener('click', start);
buttonConfirmExpensen.addEventListener('click', chooseExpenses); 
buttonConfirmOptExpensen.addEventListener('click', chooseOptExpenses);
buttonCalc.addEventListener('click', calcDayBudget);
checkboxIncome.addEventListener('click', checkboxClick);
sumIncome.addEventListener('input', calcIncome);
percentIncome.addEventListener('input', calcIncome);

chooseIncome.addEventListener('change', function() {
    appDate.income      = chooseIncome.value.split(",");
    income.textContent  = appDate.income;     
});
