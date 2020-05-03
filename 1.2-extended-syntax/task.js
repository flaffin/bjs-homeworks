function getResult(a,b,c){
   "use strict";

    let discr;
    let x = [];
    
    discr =  Math.pow(b,2) - (4 * a * c);

   if  (discr > 0) {
      let x = [];
      x[0] = (-b + Math.sqrt(discr)) / (2 * a);
      x[1] = (-b - Math.sqrt(discr)) / (2 * a);
   } if (discr === 0) {
      x[0] = -b / (2 * a);
   } 
   return x;
}

// Задача 2. Вариант 1

function getAverageMark(marks){
    
    let averageMark;
     
    if (marks.length === 0) {
        averageMark= `0`;
    }

    if (marks.length > 5) {
        let marks1;
        let sum = 0;
        let averMark = 0;
        
        marks1 = marks.slice(0,5);
        
        for ( let i = 0; i < marks1.length; ++i) {
        
          sum = sum + marks1[i];
        }
        
        averMark = sum / marks1.length;
        averageMark = `У Вас слишком много оценок! Мы использовали первые 5 оценок. Средняя оценка: ${averMark}`;
    }

    if (marks.length > 0 && marks.length <= 5) {
        let sum = 0;
        let averMark = 0;
        
        for ( let i = 0; i < marks.length; ++i) {
          sum = sum + marks[i];
        }
        averMark = sum / marks.length;
        averageMark = `Посчитали все оценки. Средняя оценка: ${averMark}`;
    }

    return averageMark;        

// Задача 2. Вариант 2

// function getAverageMark(marks){
    
//     let averageMark;
     
//     if (marks.length === 0) {
//         averageMark= `0`;
//     } 
//    if (marks.length > 5) { 
//       marks = marks.slice(0,5);  
//     }
//     if (marks.length > 0 && marks.length <= 5) {
//         let sum = 0;
//         let averMark = 0;
        
//         for ( let i = 0; i < marks.length; ++i) {
//           sum = sum + marks[i];
//         }

//         averMark = sum / marks.length;
//         averageMark = `Средняя оценка: ${averMark}`;
//     }

//     return averageMark;    


// Задача 2. Вариант 3


// function getAverageMark(marks){
    
//     let averageMark;
//     let marks1; 
   
//      function calcValue(marks1) {
//             let sum = 0;
//             let averMark = 0;
    
//        for ( let i = 0; i < marks1.length; ++i) {
//         sum = sum + marks1[i];
//        }
//         averMark = sum / marks1.length;
//      }

//     if (marks.length === 0) {
//         averageMark= `0`
//     }

//     if (marks.length > 5) {
//         let marks1; 
//         marks1 = marks.slice(0,5);
//         calcValue(marks1);
//         averageMark = `У Вас слишком много оценок! Мы использовали первые 5 оценок. Средняя оценка: ${averMark}`;
//     }

//     if (marks.length > 0 && marks.length <= 5) {
//         let marks1; 
//         marks1 = marks;
//         calcValue(marks1);
//         averageMark = `Посчитали все оценки. Средняя оценка: ${averMark}`;
//     }

//     return averageMark;
}

function askDrink(name,dateOfBirthday){
   
  let today = new Date();
  let todayYear = today.getFullYear();
  let dateBirthday = dateOfBirthday.getFullYear();
  let ageСheck = todayYear - dateBirthday;

    if (ageСheck >= 18) {
      result = `Не желаете ли олд-фэшн, ${name}?`;
    } 
    if (ageСheck < 18) {
      result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!` ;
    } 

  return result;
}