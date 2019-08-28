let money = prompt("Ваш бюджет на месяц?", "00.00");
let time = prompt("Введите дату в формате YYYY-MM-DD", "1999-01-01");
let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", "продукты");
let expenseForMonth = prompt("Во сколько обойдется?", "00.00");
let optionalExpenseItem = prompt("Введите не обязательную статью расходов в этом месяце", "развлечения");
let optionalExpenseForMonth = prompt("Во сколько обойдется?", "00.00");

var  appData = {
    moneyForMonth: money, 
    timeData: time,
    expenses: {
        expenseItem: expenseForMonth
    },
    optionalExpenses: {

    }
    
}

alert(appData.moneyForMonth/30);
