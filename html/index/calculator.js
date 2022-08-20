function calculator(str,a,b) {
    if (str == 'add') {
       return function add(){
       console.log(a+b);
       }
    }
    else if(str == 'sub'){
        return function sub(){
        console.log(a-b);
        }
    }
    else if(str == 'multipy'){
        return function multiply(){
        console.log(a*b);
        }
    }
    else if(str =='div'){
        return function div(){
        console.log(a/b);
        }
    }
    else{
        console.log("invalid input");
    }
   
}
let ans = calculator('div',4,3);
console.log("a/b is"+ans);
ans();


