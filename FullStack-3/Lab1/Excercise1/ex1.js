let uc = require("upper-case");

console.log(uc.upperCase("string"));

function greeter(){
    for(let i =1; i<=10;i++){
        console.log(uc.upperCase("hello world"));
    }
}

greeter();