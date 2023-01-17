import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';

const src = 'https://content.guardianapis.com/search?page=2&q=debate&api-key=test';

const HomePage = () =>{

    const [articles,setArticles] = useState([]);

    const testFetch = async (url) =>{
        try{
            const response = await fetch(url);
            if(response.ok){
                const data = await response.json();
                return data;
            }else{
                console.log('fuck');
            }
        }catch(error){
            console.log(error,'fuck');
        }
    }

    useEffect(()=>{    
       testFetch(src)
            .then(data=>setArticles(data.response.results))
    },[]);
    useEffect(()=>{    
        // console.log(articles);
     },[articles]);

    const homePosts = articles.map(elem=><p key={elem.webPublicationDate}><a target='blank' href={elem.webUrl}>{elem.webTitle}</a></p>); 
    return ( 
        <div className={styles.homePage}>
            <h1>Home Page</h1>
            {homePosts}
        </div>
    );
}

export default HomePage;