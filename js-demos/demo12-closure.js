

function outer(oparam){
    function inner(iparam){
        console.log(oparam,iparam);
    }
    return inner;
}


var i1=outer(5); //i1 is a function with oparam=5
var i2=outer(10); //i2 is a function with oparam=10


i1(20);
i2(20);