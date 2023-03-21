
function plus(x,y){return x+y;}

function minus(x,y){return x-y;}
function operatorSelector(symbol){




    if(symbol==="+")
        return plus;
    else if(symbol==="-" )
        return minus;
    //else
    //    return undefined

};

var o1 = operatorSelector("+");

var o2= operatorSelector("-");

var o3= operatorSelector("+");

console.log('o1===o2',o1===o2); //false
console.log('o1===o3',o1===o3); //true


console.log('o(20,40)',o1(20,40));
var result = operatorSelector("-")(10,4) ; //7 
console.log('operatorSelector("-")(10,4)',operatorSelector("-")(10,4));
