

function plus(a,b){
    return a+b;
}
var minus = function (a,b){
	return a-b;
}


var a=20;
var b=15;

var operators = [plus, minus, function(x,y){return x*y}];

for(var i=0;i<operators.length;i++){

    var result = operators[i](a,b);

    console.log(a, operators[i].name, b, result);
    
}