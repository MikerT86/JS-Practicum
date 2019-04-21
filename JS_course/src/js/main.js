let btnStart        = document.getElementById('start'),
    budget          = document.getElementsByClassName('budget-value'),
    daybudget       = document.getElementsByClassName('daybudget-value'),
    level           = document.getElementsByClassName('level-value'),
    expenses        = document.getElementsByClassName('expenses-value'),
    optExpanses     = document.getElementsByClassName('optionalexpenses-value'),
    income          = document.getElementsByClassName('income-value'),
    monthsavings    = document.getElementsByClassName('monthsavings-value'),
    yearsavings     = document.getElementsByClassName('yearsavings-value'),
    expensesInput   = document.getElementsByClassName('.expenses-item'),
    optExpensesInput        = document.querySelectorAll('.optionalexpenses-item'),
    buttonConfirmExpensen       = document.getElementsByTagName('button')[0],
    buttonConfirmOptExpensen    = document.getElementsByTagName('button')[1],
    buttonCalc                  = document.getElementsByTagName('button')[2],
    chooseIncome            = document.querySelector('.choose-income'), 
    checkboxIncome          = document.querySelector('#savings'),
    sumIncome       = document.querySelector('[for="sum"]'),
    percentIncome   = document.querySelector('[for="percent"]'),
    timeDateClass   = document.querySelector('.time-date');


console.log(percentIncome);

