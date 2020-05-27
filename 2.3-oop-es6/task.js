// задача 1

// class Weapon{
//     constructor(name, attack, durability, range){
//     this.name = name;
//     this.attack = attack;
//     this.durability = durability;
//     this.range = range;
//     }

//     takeDamage(damage){
      
//         this.durability= (this.durability - damage);
//         if (this.durability < 0) {
//             this.durability = 0;
//         }
//        return (this.durability);
//     }
//     getDamage(){
    
//         if (this.durability === 0){
//             this.attack = 0;
//         }
     
//         if (this.durability <= this.firsDurab * 0.3){
//             this.attack = this.attack /2;  
//     }
//         return this.attack;
//     }

//     isBroken(){
//         if (this.durability > 0) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }

const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);

console.table([arm,bow,sword,knife,staff], ['name', 'attack', 'durability', 'range']);

const longBow = new Weapon('Длинный лук', 15, bow.durability , 4);
const bigSword = new Weapon('Секира', 27, 800, sword.range);
const stormStaff = new Weapon('Посох бури', 10, staff.durability, 3);

console.table([longBow, bigSword, stormStaff], ['name', 'attack', 'durability', 'range'])

// проверки
// сила удара соперника < прочности, атака уменьшена
bow.takeDamage(140);
console.log(bow.durability); 
console.log(bow.getDamage()); 
console.log(bow.isBroken()); 
// 60
//  5
// false

// сила удара соперника < прочности,  атака не уменьшена(условие не выполнено)
bow.takeDamage(160);
console.log(bow.durability); 
console.log(bow.getDamage()); 
console.log(bow.isBroken()); 
// 40
// 10
// false

// Прочность оружия бесконечность
arm.takeDamage(20);
console.log(arm.durability); 
console.log(arm.getDamage()); 
console.log(arm.isBroken()); 
// Infinity
// 0.5 (нет условия в задаче на уровень атаки в этом случае, поэтому уменьшилась)
// false

// Сила удара = прочности => атака =0 
knife.takeDamage(300);
console.log(knife.durability); 
console.log(knife.getDamage()); 
console.log(knife.isBroken());
// 0
// 0
// undefined

// Уменьшаем прочность ниже 0
staff.takeDamage(500);
console.log(staff.durability); 
console.log(staff.getDamage()); 
console.log(staff.isBroken());
// 0
// 0
// undefined


// Задача 2

class Weapon{
    constructor(name, attack, durability, range){
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.firsDurab = this.durability;
    }

    takeDamage(damage){
      
        this.durability= (this.durability - damage);
        if (this.durability < 0) {
            this.durability = 0;
        }
       return (this.durability);
    }
    getDamage(){
    
        if (this.durability === 0){
            this.attack = 0;
        }
     
        if (this.durability <= this.firsDurab * 0.3){
            this.attack = this.attack /2;  
    }
        return this.attack;
    }

    isBroken(){
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
}


class Arm extends Weapon{
    constructor(){
        super();
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
    }
}
class Bow extends Weapon{
    constructor(){
        super();
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
        this.firsDurab = this.durability;
    }
}
class Sword extends Weapon{
    constructor(){
        super();
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.range = 1;
        this.firsDurab = this.durability;
    }
}
class Knife extends Weapon{
    constructor(){
        super();
        this.name = 'Нож';
        this.attack = 5;
        this.durability = 300;
        this.range = 1;
        this.firsDurab = this.durability;
    }
}
class Staff extends Weapon{
    constructor(){
        super();
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.range = 2;
        this.firsDurab = this.durability;
    }
}

class LongBow extends Bow {
    constructor(){
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
        this.firsDurab = this.durability;
    }
}
class Axe extends Sword {
    constructor(){
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
        this.firsDurab = this.durability;
    }
}
class StormStaff extends Staff {
    constructor(){
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
        this.firsDurab = this.durability;
    }
}

const bow = new Bow();
const arm = new Arm();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff();

const longBow = new LongBow(); 
const axe = new Axe();
const stormStaff = new StormStaff()


// проверки
// Проверки на корректное заполнение подклассов
console.log(bow.name); 
console.log(bow.attack); 
console.log(bow.durability); 
console.log(bow.range); 

console.log(longBow.name); 
console.log(longBow.attack); 
console.log(longBow.durability); 
console.log(longBow.range); 

// сила удара соперника < прочности, атака уменьшена
bow.takeDamage(140);
console.log(bow.durability); 
console.log(bow.getDamage()); 
console.log(bow.isBroken()); 
// 60
//  5
// false

// сила удара соперника < прочности,  атака не уменьшена(условие не выполнено)
bow.takeDamage(160);
console.log(bow.durability); 
console.log(bow.getDamage()); 
console.log(bow.isBroken()); 
// 40
// 10
// false


// Задача 3

class StudentLog{
    constructor(name){
        this.name = name;
        this.algebra = [];
        this.geometry = [];
        this.math = [];
        
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject){
        let number = 0;


        if (subject == 'algebra' ){
            if ((typeof grade === "number") && (grade === 1 || grade === 2 || grade === 3 || grade === 4 || grade === 5)) {
            this.algebra.push(grade);
            }
            else {
                console.log( `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
          }
          number = this.algebra.length;
        }
        if (subject == 'geometry'){
            if ((typeof grade === "number") && (grade === 1 || grade === 2 || grade === 3 || grade === 4 || grade === 5)) {
                this.geometry.push(grade);
            }    
            else {
                console.log( `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
          }
          number = this.geometry.length;
        
        if (subject == 'math'){
            if ((typeof grade === "number") && (grade === 1 || grade === 2 || grade === 3 || grade === 4 || grade === 5)) {
            this.math.push(grade);
            }
            else {
                console.log( `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
          }
            number = this.math.length;
          }

        }
    return number;
}
getAverageBySubject(subject){
    let sum = 0;
    let gradeAver;
    if (subject == 'algebra' ){
       if  (this.algebra.length === 0) {
        gradeAve = 0;
       } else {
        for (let i = 0; i < this.algebra.length; i++){
        sum = sum + this.algebra[i];
        gradeAver = sum / this.algebra.length;
        }
       }
    }
    if (subject == 'geometry' ){
        if  (this.geometry.length === 0) {
            gradeAve = 0;
        } else {    
          for (let i = 0; i < this.geometry.length; i++){
          sum = sum + this.geometry[i];
          gradeAver = sum / this.geometry.length;
          }
       }
    }
    if (subject == 'math' ){
        if  (this.math.length === 0) {
            gradeAver = 0;
        } else {
          for (let i = 0; i < this.math.length; i++){
          sum = sum + this.math[i];
          gradeAver = sum / this.math.length;
          }
        }
    }
    return gradeAver;
}

getTotalAverage(){
    let sum = 0;
    let  quantity = 0;
    for (let i = 0; i < this.algebra.length; i++){
        sum = sum + this.algebra[i];
        quantity ++;
    }    

    for (let i = 0; i < this.geometry.length; i++){
        sum = sum + this.geometry[i];
        quantity ++;
    }

    for (let i = 0; i < this.math.length; i++){
        sum = sum + this.math[i];
        quantity ++;
    }
    return (sum/quantity);
}

}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) // Олег Никифоров

// console.log(log.addGrade(3, 'algebra'));
// console.log(log.addGrade(5, 'geometry'));
// console.log(log.addGrade(25, 'geometry'));
// console.log(log.addGrade(5, 'geometry'));
// console.log(log.addGrade(2, 'geometry'));

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');

// console.log(log.getAverageBySubject('geometry')); // 4.5
// console.log(log.getAverageBySubject('algebra')); // 3
// console.log(log.getAverageBySubject('math')); // 0

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75



