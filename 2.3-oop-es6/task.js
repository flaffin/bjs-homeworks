// задача 1

class Weapon{
    constructor({name, attack, durability, range}){
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.durabilityFirst = durability;
    }
  
    takeDamage(damage){
      
        this.durability= (this.durability - damage);
        if (this.durability < 0) {
            this.durability = 0;
        }
       return (this.durability);
    }
    getDamage(){
    
        console.log(this.durabilityFirst);

        if (this.durability === 0){
            this.attack = 0;
        }
     
        if (this.durability >= this.durabilityFirst * 0.3){
            return (this.attack);  
        }
        else {
            return (this.attack/2); 
        }
    }

    isBroken(){
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
}

const sword = new Weapon({
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1,
  });

  sword.takeDamage(5);
console.log(sword.durability); // 5
console.log(sword.getDamage());


class Arm extends Weapon{
    constructor(){
        super({name: 'Рука', attack: 1, durability: Infinity, range: 1});
    }
}
class Bow extends Weapon{
    constructor(){
        super({name: 'Лук', attack: 10, durability: 200, range: 3});
    }
}
class Sword extends Weapon{
    constructor(){
        super({name: 'Меч', attack: 25, durability: 500, range: 1});
    }
}
class Knife extends Weapon{
    constructor(){
        super({name: 'Нож', attack: 5, durability: 300, range: 1});
    }
}
class Staff extends Weapon{
    constructor(){
        super({name: 'Посох', attack: 8, durability: 300, range: 2});
    }
}

class LongBow extends Bow {
    constructor(){
        super()
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}
class Axe extends Sword {
    constructor(){
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}
class StormStaff extends Staff {
    constructor(){
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}


// // {name: 'Посох Бури', attack: 10, range: 3}

// // const bow = new Bow();
// const arr = new Bow();
// console.log(arr);
// console.log(arr.name);
// console.log(arr.attack);
// console.log(arr.range);
// const arm = new LongBow();


// console.log(arm);
// console.log(arm.name);
// console.log(arm.attack);
// console.log(arm.range);


// const sword = new Sword();
// const knife = new Knife();
// const staff = new Staff();

// const longBow = new LongBow(); 
// const axe = new Axe();
// const stormStaff = new StormStaff()


// // проверки
// // Проверки на корректное заполнение подклассов
// console.log(bow.name); 
// console.log(bow.attack); 
// console.log(bow.durability); 
// console.log(bow.range); 

// console.log(longBow.name); 
// console.log(longBow.attack); 
// console.log(longBow.durability); 
// console.log(longBow.range); 

// // сила удара соперника < прочности, атака уменьшена
// bow.takeDamage(140);
// console.log(bow.durability); 
// console.log(bow.getDamage()); 
// console.log(bow.isBroken()); 
// // 60
// //  5
// // false

// // сила удара соперника < прочности,  атака не уменьшена(условие не выполнено)
// bow.takeDamage(160);
// console.log(bow.durability); 
// console.log(bow.getDamage()); 
// console.log(bow.isBroken()); 
// // 40
// // 10
// // false


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

// const log = new StudentLog('Олег Никифоров');
// console.log(log.getName()) // Олег Никифоров

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

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');

// console.log(log.getTotalAverage()); // 3,75



