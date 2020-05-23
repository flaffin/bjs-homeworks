// Задача 1


function parseCount(numb){

    let numNew = Number.parseInt(numb, 10);

    if (Number.isNaN(numNew)){
        numNew = "Невалидное значение";
        throw (new Error (numNew));
    }
    return numNew;    
}

function validateCount(numbCount){
    
    try {
        let numbCountNew = parseCount(numbCount);
        console.log(numbCountNew)
    } 
    catch (err) {
        console.log(err);
    }
   
}

// проверки
parseCount("123");
// 123
parseCount("012");
// 12
 
parseCount("ыфва");
// "Невалидное значение"

 validateCount("56");
//  56

 validateCount("ыфва");
//  Error: Невалидное значение


// Задача 2

class Triangle{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    toBeDefined(){
        let triangleFined;
        try { 
        if (((this.a + this.b) > this.c) && ((this.a + this.c) > this.b) && ((this.c + this.b) > this.a)) {
           triangleFined = 'true';
        } 
        else {
            throw new Error ( "Треугольник с такими сторонами не существует");
        }
        }
        catch (err) {
          console.log("Треугольник с такими сторонами не существует");
        }
        return triangleFined;
    }

  // первый вариант.  getPerimeter () Запускает метод toBeDefined(), для проверки существования треугольника. 
    // Если треугольник не существует, то при вызове метода  getPerimeter ()  выдает ошибку и из toBeDefined() и свою ошибку P = "Ошибка! Неправильный треугольник"
    // getPerimeter (){
    //     let P;

    //    if (this.toBeDefined() === 'true'){
    //      P = this.a + this.b + this.c;
    //    }
    //    else {
    //     P = "Ошибка! Неправильный треугольник";
    //    }
    // return P;

    // }

    // второй вариант. getPerimeter () в себе производит проверку на существование треугольника.
    getPerimeter (){
        let P;

        if (((this.a + this.b) > this.c) && ((this.a + this.c) > this.b) && ((this.c + this.b) > this.a)) {
         P = this.a + this.b + this.c;
       }
       else {
        P = "Ошибка! Неправильный треугольник";
       }
    return P;

    }

    // первый вариант. getArea() Запускает метод toBeDefined(), для проверки существования треугольника. 
    // Если треугольник не существует, то при вызове метода getArea()  выдает ошибку и из toBeDefined() и свою ошибку S = "Ошибка! Неправильный треугольник"

//     getArea (){
//     let S;

//       if (this.toBeDefined() === 'true'){
//          let p = (this.a + this.b + this.c) / 2 ;
//          S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
//          S = S.toFixed(3);
//       }
//       else {
//        S = "Ошибка! Неправильный треугольник";
//       }
//    return S;

// // второй вариант. getArea () в себе производит проверку на существование треугольника.

  getArea (){
    let S;

     if (((this.a + this.b) > this.c) && ((this.a + this.c) > this.b) && ((this.c + this.b) > this.a)) {

     let p = (this.a + this.b + this.c) / 2 ;
         S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
         S = S.toFixed(3);

     } 
     else {
     S = "Ошибка! Неправильный треугольник";
     }
  return S;
}
}

function getTriangle(a, b, c) {
    const triangle = new Triangle(a,b,c);
    let trianglСheck = triangle.toBeDefined();

    if (trianglСheck  === 'true'){

      console.log(triangle);
      console.log(triangle.getArea());
      console.log(triangle.getPerimeter());
    }
    else {
    console.log(triangle.getArea());
    console.log(triangle.getPerimeter());
   }
 }   

//  Проверки
 getTriangle(1,3,100);
//  Треугольник с такими сторонами не существует
//  Ошибка! Неправильный треугольник
//  Ошибка! Неправильный треугольник

 getTriangle(100,3,10);
//  Треугольник с такими сторонами не существует
//  Ошибка! Неправильный треугольник
//  Ошибка! Неправильный треугольник

 getTriangle(6,10,15);
//31
// 20.123

 getTriangle(2,5,5);
// 12
// 4.899

const triangle = new Triangle(1,3,100);
console.log(triangle.toBeDefined());

const triangle = new Triangle(6,10,15);
console.log(triangle.toBeDefined());

