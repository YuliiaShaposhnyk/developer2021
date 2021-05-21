'user strict';
let money = prompt("Ваш бютжет на месяц?", ''),
    time = prompt("Введите дыту в форме YYYY-MM-DD", '');

let appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i< 2; i++){
    let a = prompt("Введите бязательную сумму расходов в этом месяце", ''),
        b = prompt("Во сколько обойдеться?", '');

    if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a !='' && b != '' && a.length < 50) {
        console.log("done");
        appDate.expenses[a] = b;
    }else {

    }
    
}

appDate.moneyPerDay = appDate.budget / 30;


alert("Бюждкт на каждый день: " + appDate.moneyPerDay);

if(appDate.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
}else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
}else if (appDate.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
}else {
    console.log("Произошла ошибка");
}
