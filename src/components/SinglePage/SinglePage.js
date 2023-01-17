import { useParams , useNavigate } from 'react-router';
import { useState, useEffect } from "react";
import './SinglePage.css';

const SinglePage = () => {
    const {title} = useParams();
    const [singlePost,setSinglePost] = useState(null);
    const navigate = useNavigate();
    const goBack=()=>{
        navigate(-1);
    }
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${title}`)
        .then(res=>res.json())
        .then(data=>{
            setSinglePost(data);
        })
        .catch(error=>console.log(error.message));
    },[title]);
    
    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/posts`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setSinglePost(data[+title-1]);
    //         console.log(singlePost)
    //     })
    //     .catch(error=>console.log(error.message));
    // },[title]);
    
    
        return (
            <div>
                <button onClick={goBack}>Go back</button>
                <h1>Single Page</h1>
                <h3>{title} post:</h3>
                {singlePost && (<div><p>{singlePost.id}</p>
                <h4>{singlePost.title}</h4>
                <p>{singlePost.body}</p>
                </div>)}
                
            </div>
    );
}

export default SinglePage;