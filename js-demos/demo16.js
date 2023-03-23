
//factory method
function createEmployee( id, name, age, salary){

	var p =new Object();
    p.id=id;
	p.name=name;
	p.age=age;
    p.salary=salary;

	p.work=function(food){
		console.log(`${this.name} works `);
	}
	p.toString=function(){
		return `Employee[id=${this.id}\tname=${this.name}
			\tage=${this.age}\tsalary=${this.salary}]`;
	}
	
	return p;
}

function Person( name, age){
	this.name=name;
	this.age=age;
	this.eat=function(food){
		console.log(`${this.name} eats ${food}`);
	}
	this.toString=function(){
		return `Person[name=${this.name}\tage=${this.age}]`;
	}
	
}

var emp = createEmployee(1,'Sanjay', 50, 100000);

var person= new Person('Shivanshi',15);

Person.prototype.move=function(start,end){
	console.log(`${person.name} goes from ${start} to ${end}`);
}

person.eat("Breakfast");
person.move('Home','School');

class Student{
	constructor(roll,name){
		this.roll=roll;
		this.name=name;
	}
	study(){
		console.log(`${this.name} studies`);
	}
}

var s1=new Student(1,"Shweta");
var s2=new Student(2,"Vivek");





