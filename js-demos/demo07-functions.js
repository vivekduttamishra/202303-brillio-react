
function sum(...numbers){
    var result=0;
    for(var number of numbers){      
       
            result+=number;
    }

    return result;
}

function average(...numbers){

    return sum(...numbers)/numbers.length;
}



var result = average(1,2,3,4,5);














