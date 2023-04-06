import { useState } from "react";


const Input=({id,  value=null, onValueChange, 
            type='text',label=id, placeholder=label,name=id,error})=>{

    var [_value,onChange]=useState(value);

    const handleChange=function(event){
        var inputValue = event.target.value;
        onChange(inputValue);
        if(onValueChange){
            onValueChange(inputValue, id);
        }
    }

    if(!error)
        error=[];


    return (
        <div>
            <label className='form-label' htmlFor={id}>{label}</label>
            <input
                        value={_value} onChange={handleChange}
                        className='form-control'
                        type={type} id={id} name={name} 
                        placeholder={placeholder} 
            />
            <ul className='text-danger'>
                {error.map((error,id)=><li key={id}>{error}</li>)}
            </ul>

        </div>
    );
}

export default Input;