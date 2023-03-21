
const  eat=function( food){

	console.log(`${this.name} eats ${food}`);
}

var p1={name:'Sanjay',age:50};
p1.eat=eat;
p1.eat("dinner");

var p2={name:'Shivanshi', age:16, eat:eat};
p2.eat("Maggi");

var name="vivek"; //global name. in browser app this is same as window.name

eat("snacks"); //in browser app this is same as window.eat().  this refers to window




