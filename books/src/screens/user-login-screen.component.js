
import {useState} from 'react';


const UserLoginScreen = (props) => {

    var [email,changeEmail] = useState( 'vivek@conceptarchitect.in');
    var [password,changePassword] =useState( '');

    const handleSubmit = () => {

        console.log('form submitted. ', email, password);

    }

   
    return (
        <div>
            <h2>User Sign-in</h2>
            <form >
                <label
                    htmlFor='email' className='form-label' >Email</label>
                    
                <input className='form-control' id='email' name='email'

                    value={email}
                    onChange={e=> changeEmail(e.target.value)}
                />


                <label htmlFor='password' className='form-label'>Password</label>
                <input className='form-control' type='password' id='password'
                    name='password'
                    
                    value={password}
                    onChange={e=>changePassword(e.target.value)}
                />

                <button type='button' onClick={handleSubmit}
                    className='btn btn-primary margin5'>Login</button>


            </form>
        </div>
    );
}

export default UserLoginScreen;