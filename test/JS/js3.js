// let num = 20; 

// function valNum() {
    
//     let n = num + 100;
//     return(n);

// }

// console.log(num);
// console.log(valNum());

//callback functions

function sumNumbers(a, d, callback) {
    a = callback(a);
    console.log("Сумма равна: " + (a+d));    
}

sumNumbers(10, 11, function preSum(a) {
    a = a + 200;
    console.log("Параметр а = " + a);
    return a;       
}); 

