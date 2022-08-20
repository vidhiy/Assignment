// let a = 10;
// console.log(a);
// console.log(typeof a);

// a = 'hello';
// console.log(a);
// console.log(typeof a);

// a = true;
// console.log(a);
// console.log(typeof a)
// var str ='a';
// str = "how you are doin? \n i am fine .How about u";
// console.log(str);
//  var  b =` Hi hope u able to
//   grasp the concept`;
//  console.log(b)

//  var num = 200;
//  console.log(`half of ${num} is ${num/2}`);
// let j =20;
// 12 feb 2022
// var num= 10;
// for(var i=0; i<num; i++){
//     let j=20;
//     if(i%2==0){
//         let j ='hello'
//         console.log(i);
//         console.log(j);
//     }
//     console.log("inner"+j);
    
// }
// console.log(j);
function calculator(str,a,b){
    if(str ='add'){
        return function add(){
            console.log(a+b);
        }
    }
}
 
let returnfunc = calculator('add',2,3)
console.log("return function \n"+returnfunc);
returnfunc();

// function expression
let sayHi = function abcd(){
    console.log("hello guys this is an function expression ");
}

console.log("hi\n"+sayHi);
sayHi();
// abcd() error abcd is not defined but u can name the function this will be cover soon










































