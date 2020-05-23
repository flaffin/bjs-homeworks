// Задача №1

function getSolutions(a, b, c)  {

    let rez = {}; 
    let x = [];
    let x1;
    let x2;
    
    let D = Math.pow(b, 2) - (4 * a * c);
    rez.D = D;

    if (D === 0) {
        x1 = -b / (2 * a);
        x[0] = x1;
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a); 
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        x[0] = x1;
        x[1] = x2;
    }
    rez.roots = x;
    return {
        rez,
        D,
        x1,
        x2,
        x,
    }
}

function showSolutionsMessage(a, b, c) {

    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.x}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.x1}, X₂ = ${result.x2}`);
    } else {
        console.log(`Уравнение не имеет вещественных корней`);
    }

}

// showSolutionsMessage ( 1 ,  2 ,  3); 
// showSolutionsMessage ( 7 ,  20 ,  -3 );
// showSolutionsMessage ( 2 ,  4 ,  2 ); 

// showSolutionsMessage ( 1 ,  2 ,  1 ); 
// showSolutionsMessage ( 1 ,  5 ,  4 );
// showSolutionsMessage ( 1 ,  2 ,  10 ); 

// getSolutions ( 1 ,  2 ,  1 ); 
// getSolutions ( 1 ,  5 ,  4 );
// getSolutions ( 1 ,  2 ,  10 ); 
// // { D : - 36 ,  корни : [ ] }


// Задача 2

const  data  =  {
        алгебра : [ 4 ,  5 ,  5 ,  4 ] ,
        геометрия : [ 2 ,  5 ] ,
        русский : [ 3 ,  3 ,  4 ,  5 ] ,
        физика : [ 5 ,  5 ] ,
        музыка : [  2 ,  2 ,  5 ] ,
        английский : [ 4 ,  4 ,  3 ,  3 ] ,
        поэзия : [ 5 ,  3 ,  4 ] ,
        химия : [ 2 ] ,
        французский : [ 4 ,  4 ] 
      } ;

function getAverageScore(data){

     let overAverage = 0;
     let numberKey = 0;
    
        for (let key in data){

          let marks = data[key];

          let rezKey = getAverageMark(marks);

          data[key] = rezKey;
          overAverage  = overAverage + rezKey;
          numberKey ++;
        }

        if (overAverage === 0) {
            data.average =0;
        } else {    
        data.average = overAverage /  numberKey ;
        }
        console.log(data); 

}

function getAverageMark(marks){

    let sum=0;
    let averageKey;

    if (marks.length === 0) {
        averageKey = 0;
    } else {
    
       for (let i = 0; i < marks.length; i++){
        sum = sum + marks[i];
       } 
      averageKey = sum / marks.length;
    }

    return averageKey;
}

getAverageScore(data);

// Проверки
getAverageMark([1,2,3,4,5,6,7,8,9,10]);
// 5.5
getAverageMark([]);
// 0
getAverageScore({});
// {average: 0}
// average: 0



// Задача 3

function getPersonData(secretData){

  let totalSecret ={};
  let secret;

  secret = secretData.aaa;
  totalSecret.firstName = getDecodedValue(secret);

  secret = secretData.bbb;
  totalSecret.lastName = getDecodedValue(secret);

  console.log(totalSecret);
}

function getDecodedValue(secret){
    let total;
    if (secret === 0) {
        total = 'Родриго';
    }
    if (secret === 1) {
        total = 'Эмильо';
    }
 return total;
}
getPersonData({ aaa : 0 ,  bbb : 0 });
getPersonData({ aaa : 1 ,  bbb : 1 });
getPersonData({ aaa : 1 ,  bbb : 0 });
getPersonData({ aaa : 0 ,  bbb : 1 });
