// Задача №1

function getSolutions(a, b, c)  {

    let rez = {}; 
    let x = [];
    
    let D = Math.pow(b, 2) - (4 * a * c);

    if (D === 0) {
        x[0] = -b / (2 * a);
    
    } else if (D > 0) {
        x[0] = (-b + Math.sqrt(D)) / (2 * a); 
        x[1] = (-b - Math.sqrt(D)) / (2 * a);
    }
    rez.D = D;
    rez.roots = x;
    // console.log(rez);

    return rez;
}

function showSolutionsMessage(a, b, c) {

    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    } else {
        console.log(`Уравнение не имеет вещественных корней`);
    }

}

showSolutionsMessage ( 7 , 20 , -3 );

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
        return data;

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

// getAverageScore(data);

// // Проверки
// getAverageMark([1,2,3,4,5,6,7,8,9,10]);
// // 5.5
// getAverageMark([]);
// // 0
// getAverageScore({});
// // {average: 0}
// // average: 0



// Задача 3

function getPersonData(secretData){

  let totalSecret ={};

  totalSecret.firstName = getDecodedValue(secretData.aaa);
  
  totalSecret.lastName = getDecodedValue(secretData.bbb);

  console.log(totalSecret);
  return totalSecret;
}

function getDecodedValue(secret){

    if (secret === 0) {
        return 'Родриго';
    }
    if (secret === 1) {
        return 'Эмильо';
    }
}
// getPersonData({ aaa : 0 ,  bbb : 0 });
// getPersonData({ aaa : 1 ,  bbb : 1 });
// getPersonData({ aaa : 1 ,  bbb : 0 });
// getPersonData({ aaa : 0 ,  bbb : 1 });
