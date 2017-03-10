var add =require("./addition");
var sub =require("./subtracktion");
var multiply =require("./multiplication");
var divide =require("./division");
var mod=require("./modules");
var fact=require("./factorial");

function addfn(a,b){
return add.addition(a,b);
}
function subfn(a,b){
return sub.subtraction(a,b);
}
function mulfn(a,b){
return multiply.multiplication(a,b);
}
function divfn(a,b){
return divide.division(a,b);
}
function modfn(a,b){
return mod.modules(a,b);
}
function facfn(a){
return fact.factorial(a);
}
module.exports={
    add:addfn,
    sub:subfn,
    multiply:mulfn,
    divide:divfn,
    mod:modfn,
    factorial:facfn
};
