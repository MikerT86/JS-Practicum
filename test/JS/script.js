
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
    savings: true, 
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {

            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", 0);
            
            if ((typeof(a) === 'string') && a != "" && b != "") {
        
                appDate.expenses[a] = b;
        
            } else {
                
                i--;
        
            }
        }
    },
    detectDayBudget: function() {
        appDate.moneyPerDay = (appDate.budget/30).toFixed();
        alert("Бюджет на 1 день: " + appDate.moneyPerDay);    
    },
    detectLevel: function() {
        if (appDate.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appDate.moneyPerDay  > 100 && appDate.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appDate.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка!");
        }
    },
    checkSavings: function() {
        if (appDate.savings) {
            let save = +prompt("Какова сумма накоплений?", 0),
                percent = +prompt("Под какой процент?", 0);
    
            appDate.monthIncome = save/100/12 * percent; 
            alert("Доход в месяц с вашего депозита: " + appDate.monthIncome.toFixed(1));
        }   
    },
    chooseOptExpenses: function() {
        if (appDate.savings) {
            let save = +prompt("Какова сумма накоплений?", 0),
                percent = +prompt("Под какой процент?", 0);
    
            appDate.monthIncome = save/100/12 * percent; 
            alert("Доход в месяц с вашего депозита: " + appDate.monthIncome.toFixed(1));
        }   
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (перечислить через ,)", "");
        
        if (items != null && isNaN(items) == true && items != '') {
            appDate.income = items.split(","); 
            let additionalItem = prompt("Может что-то еще?","");
            while (typeof(additionalItem) !== 'string') {
                additionalItem = prompt("Может что-то еще?","");    
            }
            appDate.income.push(additionalItem);
            appDate.income.sort();    
        } else {
            appDate.chooseIncome();
        }   
        appDate.income.forEach((item, index, income) => {
            console.log("Способы доп. заработка: " + (index+1) + " - " + item);     
        });
    },
    showObjectDetails: function() {
        for (const key in appDate) {
            if (typeof(appDate[key]) === 'function') {
                console.log("Наша программа включает в себя функцию: " + key);
            } else if (typeof(appDate[key]) === 'object') {
                console.log("Наша программа включает в себя объект: " + key);   
            } else {
                console.log("Наша программа включает в себя данные: " + key + " = " + appDate[key]);                  
            }
        }
    }     
}; 

