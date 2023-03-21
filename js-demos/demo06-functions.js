
function sum(...numbers){
    var result=0;
    for(var number of numbers){
       
        
        if(typeof number === "number") 
            result+=number;
    }

    return result;
}

console.log('sum(1,2,3,4)',sum(1,2,3,4));
console.log('sum(1,2,false,3,4)',sum(1,2,false,3,4));
console.log('sum(1,2,"X",4)',sum(1,2,"5",4));
console.log('sum("hello","world")',sum("hello","world"));


var r= sum(1,2,3,4);

console.log('typeof r',typeof r);















