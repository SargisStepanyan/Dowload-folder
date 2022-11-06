import React from 'react';
import { useNavigate } from 'react-router-dom';



const BlogCard = ({title,popularity, overview, id }) => {
    const navigate = useNavigate()

    return ( 
        <div className='blog-card'>
            <h3>{title}</h3>
            <p>{popularity}</p>
            <p>{overview}</p>
            <button onClick={() => {
                navigate(`/blog/${id}`)
            }} >Read more</button>
        </div>
     );
}

export default BlogCard;