import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from './BlogPage.module.css';

const BlogPage = () =>{
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>{setPosts(data);console.log(data)})
    },[]);

    const blogPagePosts = posts.map(elem=><p key={elem.id}><NavLink to={`/posts/${elem.id}`}>{elem.title}</NavLink></p>);
    return ( 
        <div className={styles.blogPage}>
            <div className={styles.blogPage__addPost}><NavLink to='/posts/new'>add a new post</NavLink></div>
            <h1>My Posts:</h1>
            {blogPagePosts}
        </div>
    );
}

export default BlogPage;