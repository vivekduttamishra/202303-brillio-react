

function showObject(obj){
    for(var property in obj)
        console.log(property, obj[property]);
    console.log();
}


var p1={
    name:"Sanjay" ,
    age:50
 };

 showObject(p1);
 
 var p2=new Object(); //same as {}
 p2.name="Shivanshi"; //dot notation
 p2["age"]=16; //dictionary notation
 
 showObject(p2);

 showObject({x:20,y:30});