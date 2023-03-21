
function createPerson( name, age){

	var p =new Object();
	p.name=name;
	p.age=age;
	p.eat=function(food){
		console.log(`${this.name} eats ${food}`);
	}
	p.toString=function(){
		return `Person[name=${this.name}\tage=${this.age}]`;
	}
	
	return p;

}

var p1=createPerson("Sanjay",50);
var p2= createPerson("Shivanshi",15);

console.log("p1 "+p1);
p2.eat("Lunch");