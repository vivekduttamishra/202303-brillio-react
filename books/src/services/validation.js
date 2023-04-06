

export const required =(message='Value is Required')=>(value)=>{
    //console.log('required',value);
    if(!value || value.length===0)
        throw new Error(message);
}


export const range=(min,max, 
    message=`Value should be in range ${min}-${max}`) => value =>{

    if(value<min || value>max) 
        throw new Error(message);
}

export const regex = (regex, message="Invalid Expression")=> value =>{
    
  if (!value.match(regex))
      throw new Error(message);

}

export const email=(message='Invalid Email') => value =>{
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!value.match(regex))
        throw new Error(message);
}

export const stringLength=(min,max, message=`length must be between ${min} and ${max}`)=> value=>{
    if(value && (value.length< min || value.length> max))
        throw new Error(message);
}

export const validate=( model, validationModel)=>{

    //model =>   {email:'', password:''}
    //modelValiation=>  {email:[required,email], password:[required,stringLength(5,15)]}

    var error={};
    error.count=0;

    for(var key in model){
        //we get keys like email, password
        
        //check if there is any validation for this key
        var validations = validationModel[key];
        
        if(validations){
            var value= model[key];

            for(var validation of validations){
                try{
                    //console.log(`validating "${value}" with ${validation.name}`);
                    validation(value); //throws exception if validation fails
                }catch(e){
                    //console.log(e.message);
                    if(!error[key])
                        error[key]=[];

                    error[key].push(e.message);
                    error.count++;
                }
            }
        }
    }

    return error;

}