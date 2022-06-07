import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styles from './Articles.module.scss'
import Header from '../Header/Header';

const Articles = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')

                setPosts(data)
            } catch (error) {
                console.log(error);
            }
            setLoading(false)              
        }

        fetchData()
    }, [])

    console.log(posts);

    return (
        <div>
            <Header/>
            <h1>Articles</h1>
            {loading ? 'Загрузка' : null}
            <div className={styles.wrapper}>
                {posts.map(({title, body, id}) => (
                    <div key={id} className={styles.card}>
                        <h4>{title}</h4>
                        <p>{body}</p>
                        <a href="/">Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Articles;
