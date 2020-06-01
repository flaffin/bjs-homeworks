// Задача 1


function parseCount(numb){

    let numNew = Number.parseInt(numb, 10);

    if (Number.isNaN(numNew)){
        throw new Error ("Невалидное значение");
    }
   
    return numNew;    
}

function validateCount(numbCount){
    
    try {
        let numbCountNew = parseCount(numbCount);
        return numbCountNew;
    } 
    catch (err) {
        return err;
    }

}


// Задача 2

class Triangle{
      constructor (a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
        this.triangle;
      }
        
      get triangle() {
        if (((this.a + this.b) > this.c) && ((this.a + this.c) > this.b) && ((this.c + this.b) > this.a)) {
    
     
        return ; 
        } 
        else {
        throw new Error ("Треугольник с такими сторонами не существует");
        }
        
      }


      getPerimeter(){
        let P;
        P = this.a + this.b + this.c;
        return P;
      }

      getArea(){
        let S;
        let p = (this.a + this.b + this.c) / 2 ;
        S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        S = Number(S.toFixed(3));
        return S;
      }
}



function getTriangle(a, b, c) {
  try {
     const tria = new Triangle(a, b, c);
     console.log(tria);
     return tria;

  } catch (err) {

const errTria = {
getArea: ()=> "Ошибка! Неправильный треугольник",
getPerimeter: ()=> "Ошибка! Неправильный треугольник"
}

return errTria;
}
    
}
