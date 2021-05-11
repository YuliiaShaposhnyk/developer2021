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

let a1 = prompt("Введите бязательную сумму расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдеться?", ''),
    a3 = prompt("Введите бязательную сумму расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдеться?", '');

appDate.expenses.a1 = a2;
appDate.expenses.a3 = a4;

alert(appDate.budget / 30);