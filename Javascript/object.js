const { getEnvironmentData } = require("worker_threads");

let obj = {};
// console.log(obj);

let person ={
    name: "vidhi",
    age: 21,
    goal: "be the best version of myself",
    interst: "content writing & be an effective speaker",
    sayHi : function(){
        console.log(`hi ${person.name} and welcome to our website`);
        return 1;
    }

}
// console.log(person);
// console.log(person.name);
// console.log(person.sayHi());

let student ={
    name : "vidhi",
    roll_No : 55,
    society : "green",
    address :{
        state: "delhi",
        pincode:110062,
        country:"India",
        indianCitzenShip: true,
    },
}

console.log(student.address.state);




let a = "vidhi";
 console.log(a.toUpperCase([0]));