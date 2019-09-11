let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

// for(let i = 0; i < 2; i++){
// let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = prompt("Во сколько обойдется?", '');

//     if((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null &&
//         a != "" && b != "" && a.length < 50){
//             console.log("done");
//             appData.expenses[a] = b;
//         }   
// }

// let i = 0;
// while (i < 2){
//     let a = prompt("1", ''),
//     b = prompt("2", '');

//     if((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null &&
//         a != "" && b != "" && a.length < 50){
//             console.log("done");
//             appData.expenses[a] = b;
//         }  
//     i++;      
// }

let i = 0;
do{
    let a = prompt("1", ''),
    b = prompt("2", '');

    if((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null &&
        a != "" && b != "" && a.length < 50){
            console.log("done");
            appData.expenses[a] = b;
        }  
    i++;     
}while(i < 2);

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);