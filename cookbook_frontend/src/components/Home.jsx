import React from "react";
import  {useState, useEffect} from "react";
import axios from "axios";

import '../styles/Home.css'

const Home = () => {

    const [categoryList, setCategoryList] = useState([]);
    const [isReady, setIsReady] = useState();

    useEffect( () => {
        axios.get('http://127.0.0.1:8000/api/categories').then(res => {
            setCategoryList(res.data);
            setIsReady(true);
        });
    }, [])

    if (!isReady) {
        return <div className="isReady">LOADING ...</div>
    }

    return (
        <>
            <h2>Категории:</h2>
            <ul className="categorys_list">
                {categoryList.map((item) => (
                    <li>
                        <a key={item.id} className="category_link" href={`/category/${item.id}/${item.name}`}>{item.name}</a>
                    </li>
                ))}    
            </ul>
        </>
    );
}

export default Home;