
const  eat=function(person, food){

	console.log(`${person.name} eats ${food}`);
}

var p1={name:'Sanjay',age:50};

eat(p1,"Lunch");

//we can attach eat to the person object

p1.eat=eat;

p1.eat(p1,"dinner");

var p2={name:'Shivanshi', age:16, eat:eat};


p2.eat(p2,"Maggi");





