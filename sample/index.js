import {addition} from "./addition"
import {subtraction} from "./subtraction"
import {multiplication} from "./multiplication"
import {division} from "./division"
import {modules} from "./modules"
import {factorial} from "./factorial"
function addfn(a,b){
return addition(a,b);
}
function subfn(a,b){
return subtraction(a,b);
}
function mulfn(a,b){
return multiplication(a,b);
}
function divfn(a,b){
return division(a,b);
}
function modfn(a,b){
return modules(a,b);
}
function facfn(a){
return factorial(a);
}
module.exports={
    add:addfn,
    sub:subfn,
    multiply:mulfn,
    divide:divfn,
    mod:modfn,
    factorial:facfn
};
