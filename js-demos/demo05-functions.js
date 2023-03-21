
function sum(){
    var result=0;
    for(var i=0;i<arguments.length;i++){
        var v=arguments[i];
        if(typeof v === "number") 
            result+=v;
    }

    return result;
}

console.log('sum(1,2,3,4)',sum(1,2,3,4));
console.log('sum(1,2,false,3,4)',sum(1,2,false,3,4));
console.log('sum(1,2,"X",4)',sum(1,2,"5",4));
console.log('sum("hello","world")',sum("hello","world"));

















