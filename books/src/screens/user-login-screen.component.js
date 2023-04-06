
import {useState} from 'react';
import Input from '../components/input.components';
import {required,email,stringLength,validate} from '../services/validation';


const UserLoginScreen = (props) => {

    var [user,setUser]=useState({email:'',password:''});
    
    
    var [error,setError] =useState(null);

    var validationModel={
        email:[required(), email()],
        password:[required(),stringLength(5,15)]
    }


    const handleModelChange=(value,id)=>{
        var newUser={...user};
        
        newUser[id]=value; //change particular field

        setUser(newUser);
        //run a validation function here to see if the values are correct
        //and enable disable submit accordingly

       var _error= validate(newUser, validationModel);

       setError(_error);

    }

    const handleSubmit = () => {
        console.log('user to login',user);       
    }



   
    return (
        <div>
            <h2>User Sign-in</h2>
            error:{JSON.stringify(error)}
            <form >
               <Input id='email' label="Email" 
                        value={user.email}  onValueChange={handleModelChange}
                        error={error?.email}
                    />

                <Input id='password' label='Password' type="password" 
                        value={user.password} onValueChange={handleModelChange}
                        error={error?.password}
                    />
               
                <button type='button' onClick={handleSubmit} 
                    disabled={error===null || error.count>0}
                    className='btn btn-primary margin5'>Login</button>


            </form>
        </div>
    );
}

export default UserLoginScreen;