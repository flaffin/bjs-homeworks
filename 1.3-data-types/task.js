"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let creditBody;
    let P;
    let months;
    let monthPay;
    let totalAmount;
    let todayDate = new Date();


    if (typeof(percent) != "number") {
        percent = Number(percent);
        if (Number.isNaN(percent)) { 
        totalAmount = `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
        }
    }

    if (typeof(contribution) != "number") {
        contribution = Number(contribution);
        if (Number.isNaN(contribution)) { 
        totalAmount = `Параметр "Сумма первоначального взноса" содержит неправильное значение ${contribution}`;
        }
    }

    if (typeof(amount) != "number") {
        amount = Number(amount);
        if (Number.isNaN(amount)) {
        totalAmount = `Параметр "Cумму кредита" содержит неправильное значение ${amount}`;
        }
    }

      creditBody = amount - contribution;
      P = (percent/100) / 12;

      months = (date.getFullYear() - todayDate.getFullYear())*12 + (date.getMonth() - todayDate.getMonth());

      monthPay = creditBody * (P + P / ( (Math.pow(1+P, months) - 1 ) ));

      totalAmount = monthPay * months;
      totalAmount = totalAmount.toFixed(2);
      totalAmount = Number(totalAmount);
    return totalAmount;
}


function getGreeting(name) {
    let greeting;
      if (name) {
        greeting = `Привет, мир! Меня зовут ${name}`;
      } else {
        greeting = 'Привет, мир! Меня зовут Аноним';
      }
      
     return greeting;
}
