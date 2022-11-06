import React from 'react';
import { Link } from 'react-router-dom'
import Blog from './blog';



const Home = () => {
    return ( 
        <div>
            Home
            <Link to="/sign-in">Login</Link>
            <Link to="/blog">Blog</Link>
            
        </div>
     );
}
 
export default Home;