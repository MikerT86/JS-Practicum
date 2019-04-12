'use strict';

var budget = prompt("Ваш бюджет на месяц?", 0);
var timeDate = prompt("Введите дату в формате YYYY-MM-DD", "");    

let appDate = {
    budget: budget,
    timeData: timeDate,
    expenses: {
        stRashod: prompt("Введите обязательную статью расходов в этом месяце", ""),
        amount: prompt("Во сколько обойдется?", 0)   
    },
    optionalExpenses: "",
    income: [],
    savings: false
};

let realBudget = (appDate.budget - appDate.expenses.amount); //Размер месячного бюджета за вычетом обязательных затрат
alert("Бюджет на 1 день: " + realBudget/30);