import React from "react";
import  {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

import '../styles/Category.css'

const Category = () => {

    const category = useParams().categoryId;
    const categoryName = useParams().categoryName;
    const [dishesList, setDishesList] = useState([]);
    const [isReady, setIsReady] = useState();

    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/dishes_in/?category=${category}`).then(res => {
            setDishesList(res.data);
            setIsReady(true);
        });
    })

    if (!isReady) {
        return <div className="isReady">LOADING ...</div>
    }

    return (
        <>
            <h2>Категория {categoryName}</h2>
            <h3>Рецепты:</h3>
            <ul className="dishes_list">
                {dishesList.map((item) => (
                    <li>
                        <a key={item.id} className="dishes_link" href={`/dish/${item.id}/${item.name}`}>{item.name}</a>
                    </li>
                ))}    
            </ul>
        </>
    );
}

export default Category;