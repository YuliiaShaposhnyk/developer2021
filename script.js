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



let appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses(){
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
}
chooseExpenses();


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

function detectDayBudget(){
    appDate.moneyPerDay = (appDate.budget / 30).toFixed();
    alert("Бюджет на 1 день: " + appDate.moneyPerDay + "руб");
}
detectDayBudget();

function detectLevel(){
    if(appDate.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    }else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    }else if (appDate.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    }else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings(){
    if (appDate.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            procent = +prompt("Под какой процент?");
        
        appDate.monthInCome = save/100/12*procent;
        alert("Доход в месяц с вашего депозита: " + appDate.monthInCome);
    }
}
checkSavings();

function chooseOptExpenses (){
    for (let i = 1; i <= 3; i++){
        let questionOptExpenses = prompt("Статья необязательных расходов?");
            appDate.optionalExpenses[i] = questionOptExpenses;

        console.log(appDate.optionalExpenses);
    }
}

chooseOptExpenses();