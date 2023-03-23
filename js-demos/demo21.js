

var factorial = n =>{

    return new Promise((resolve,reject) =>{
        var fn=1;

        var iid=setInterval(()=>{
            //long runnng task
            if(n<0){
                clearInterval(iid)
                return reject(new Error("number must be positive"));
            }

            if(n===0){
                clearInterval(iid);
                return resolve(fn); //return fn
                
            }

            fn*=n;
            n--;               


        },1000);

    });
}

async function showResult(n){

    try{

        console.log('calculating factorial of ',n);
        var fn = await factorial(n);
        console.log(`factorian of ${n} is ${fn}`) ;
    }catch(err){
         console.log(`error calculating factorial of ${n}: ${err.message}`);
    }

}

showResult(5);
showResult(-2);
showResult(9);
showResult(7);
