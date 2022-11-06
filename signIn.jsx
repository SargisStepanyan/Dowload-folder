import React from 'react';
import { Link } from 'react-router-dom'


const SignIn = () => {
    return ( 
        <div>
            Sign In
            <Link to="/sign-up">Register</Link>
        </div>
     );
}
 
export default SignIn;