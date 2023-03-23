

var iid= setInterval( ()=>{

    console.log(new Date().toLocaleTimeString());

},1000);

//the above function display new time every second

//the setInterval returns an id of current interval
//using this id we can cancle this task


//let us say we want cancel this task after 10 seconds

setTimeout(()=>{
    clearInterval(iid);
},10000); 
