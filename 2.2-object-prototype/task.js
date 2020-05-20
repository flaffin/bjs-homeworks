// задача 1
// const animal = {
//     sound: 'grrrr',
// };

function getAnimalSound(animal) {
    let result;

    if (animal === undefined){
        result = 'null';
        } else{
            const sound = animal.sound;
            result = sound;
        } 
 
    return result;
    }
getAnimalSound(animal);

// задача 2

function getAverageMark(marks) {
    let average;
    let roundedAverage;
    let sum = 0;

    if (marks.length === 0){
        roundedAverage = 0;
        return roundedAverage;
    }
    for (let i = 0; i < marks.length;  i++){
    sum = sum + marks[i];
    }
    average = sum / marks.length;
    roundedAverage = Math.round(average);
    
    // console.log(roundedAverage);
    return roundedAverage;
} 

getAverageMark(marks);

// getAverageMark([ 2 , 4 , 5 ] );
// getAverageMark([ 2 , 3 , 5 ] );
// getAverageMark([ ]);

// задача 3
function checkBirthday(birthday) {
let age;
    const now = Date.now();
    // let  newDate = new Date(birthday);

    let birthday = Date.parse(birthday);
    let diff = Math.abs(now - birthday);

    // за 18 лет точно 4 високосных года и 14 обычных
    const ageFull = (4 * 366 * 24 * 60 * 60 * 1000) + (14 * 365 * 24 * 60 * 60 * 1000);

    if ((diff - ageFull) > 0) {
        age = true;
        console.log (age);
    } else {
        age = false;
        console.log (age);
    }
  
    return age;
}
// checkBirthday(birthday);
checkBirthday('1990-01-01'); 
checkBirthday('2020-01-01');

