import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function getFilm(id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ba0549cf8284a06298b7fc3a67897131&language=en-US`)
        .then(response => response.json())
}

const SingleBlogPage = () => {
    const {slug} = useParams()
    const [movie, setMovie] = useState(null)


    useEffect(() => {
        getFilm(slug)
        .then(response => {
            setMovie(response)
        })
        
    }, [])

    if(!movie) return (
        <div>Loading...</div>
    )
    return ( 
        <div>
            <Link to={'/blog'}> All films </Link>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
     );
}
 
export default SingleBlogPage;