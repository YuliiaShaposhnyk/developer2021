'user strict';

// function showEmoji (text){
//     alert( "\u{1F60D}" );
// }

// showEmoji()

let money, time;

function start(){
    money = prompt("Ваш бютжет на месяц?", '');
    time = prompt("Введите дыту в форме YYYY-MM-DD", '');

    while(isNaN(money) || money  == "" || money  == null) {
        money = prompt("Ваш бютжет на месяц?", '');
    }
}
start();

let a = document.getElementById("title");

let appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i< 2; i++){
            let a = prompt("Введите бязательную сумму расходов в этом месяце", ''),
                b = prompt("Во сколько обойдеться?", '');
        
            if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a !='' && b != '' && a.length < 50) {
                console.log("done");
                appDate.expenses[a] = b;
            }else {
                console.log("bed resalt");
                i--;
            }
        }
    },
    detectDayBudget: function(){
        appDate.moneyPerDay = (appDate.budget / 30).toFixed();
        alert("Бюджет на 1 день: " + appDate.moneyPerDay + "руб");
    },
    detectLevel: function(){
        if(appDate.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        }else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        }else if (appDate.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        }else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function(){
        if (appDate.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                procent = +prompt("Под какой процент?");
            
            appDate.monthInCome = save/100/12*procent;
            alert("Доход в месяц с вашего депозита: " + appDate.monthInCome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i <= 3; i++){
            let questionOptExpenses = prompt("Статья необязательных расходов?");
                appDate.optionalExpenses[i] = questionOptExpenses;
    
            console.log(appDate.optionalExpenses);
        }
    },
    chooseInCome: function(){
        let items = prompt("Что принесет дополнительный доход?(Перечислите через запитую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else{
            appDate.income = items.split(', ');
            appDate.income.push(prompt("Что может что то еще?"));
            appDate.income.sort();
        }
        appDate.income.forEach (function (itemmassive, i) {
        alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
    }
};































// let i = 0;
// while(i < 2) {
//     let a = prompt("Введите бязательную сумму расходов в этом месяце", ''),
//     b = prompt("Во сколько обойдеться?", '');
//     if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a !='' && b != '' && a.length < 50) {
//         console.log("done");
//         appDate.expenses[a] = b;
//     }else {
//         console.log("bed resalt");
//         i--;
//     }
//     i++;
// };

// let c = 50;
//     do {
//     let a = prompt("Введите бязательную сумму расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдеться?", '');
//     if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a !='' && b != '' && a.length < 50) {
//         console.log("done");
//         appDate.expenses[a] = b;
//     }else {
//         console.log("bed resalt");
//         c--;
//     }
//     c++;
// } 
// while(c < 2);
