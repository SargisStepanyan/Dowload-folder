import React, { useEffect, useState } from 'react';
import BlogCard from './blogCard';

const mockList = [
    {
        slug: 'john',
        name: "Johin",
        email: "john@mail.ru",
        title: "Johns Title",
        description: "Lorem ipsoum dolor sit amet"
    },
    {
        slug: 'lara',
        name: "Lara",
        email: "Lara@mail.ru",
        title: "Laras Title",
        description: "Lorem ipsoum dolor sit amet"
    },
    {
        slug: 'jane',
        name: "Janen",
        email: "jane@mail.ru",
        title: "Janes Title",
        description: "Lorem ipsoum dolor sit amet"
    },
    {
        slug: 'tom',
        name: "Tom",
        email: "tom@mail.ru",
        title: "Toms Title",
        description: "Lorem ipsoum dolor sit amet"
    }
]

function getFilms() {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ba0549cf8284a06298b7fc3a67897131&language=en-US&page=1`)
        .then(response => response.json())
}

const Blog = () => {
    const [list, setList] = useState(null)
    useEffect(() => {
        getFilms()
        .then(response => setList(response.results))
        
    }, [])
    if(!list) return (
        <div>Loading...</div>
    )
    return ( 
        <div className='blog-container'>
            {list.map(listItem => <BlogCard key={listItem.id} {...listItem} />)}
        </div>
     );
}
 
export default Blog;