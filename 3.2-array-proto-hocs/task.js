// function sleep(milliseconds) 
// {
//   let e = new Date().getTime() + milliseconds;
//   while (new Date().getTime() <= e) {}
// }



// function compareArrays( arr1, arr2 ){
//     let ansver;

//     if (arr1.length === arr2.length){
//     ansver = arr1.every((el,index) => el === arr2[index]);

//     } else {
//      ansver = false;
//     }
    
//     return ansver;
// }


// function memorize (a,b){
// // const sum = (a, b) => a + b

// function sum (){
//     SumSum = a + b;
//     return SumSum;
// }

// console.log(sum);
// }
// memorize (3,4);



function sum(...args) {
    // Замедление на половину секунды.
    // sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }
let memory = [];


    function compareArrays(memory, arg){
        let ansver;
        
        let arr2 = arg;
        let arr1 = memory;
    
        if (arr1.length === arr2.length){
            return  arr1.every((el,index) => el === arr2[index]);
    
        } else {
            return false;
        }
        
    }


function memorize(...arg){
    
let findRez = memory.find(compareArrays(memory,arg));

  if (findRez === undefined ){

   let step ={
    args: arg,
    result: sum( ...arg)
  }

  if (memory.length === 10){
    memory.shift();
  }
memory.push(step);
}
console.log(memory);
}

memorize(1, 2);
memorize(3, 4);
memorize(5, 6);
memorize(7, 8);
memorize(9, 10);
memorize(11, 12);
memorize(13, 14);
memorize(15, 16);
memorize(17, 18);
memorize(18, 19);
memorize(19, 20);
memorize(21, 22);



memorize(1, 3, 4, 5, 6,7);


// function sum( ...arg){

//  let sum = 0;
//  let memory = {};

// for (let i = 0; i < arg.length; i++){
//     sum = sum + arg[i];
//     }
//     memory.args =  arg;
//     memory.result = sum;

// return memory;
// }

memorize(1, 3, 4, 5, 6,7);
memorize(1,2,3);
memorize(3,4);

mSum(3, 4); // 7
mSum(1, 3); // 4



// console.log(arguments[0]);
// console.log(arguments[1]);
// console.log("------");
// console.log(arguments);


