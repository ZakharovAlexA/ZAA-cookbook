import React from "react";
import  {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

import '../styles/Dish.css'

const Dish = () => {

    const dishId = useParams().dishId;
    const dishName = useParams().dishName;
    const [dish, setDish] = useState([]);
    const [isReady, setIsReady] = useState();

    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/dish/${dishId}`).then(res => {
            setDish(res.data);
            setIsReady(true);
        });
    })

    if (!isReady) {
        return <div className="isReady">LOADING ...</div>
    }

    return (
        <>
            <h2>{dishName}</h2>
            <div className="dish">
                <h3>Ингридиенты:</h3>
                <p>{dish.ingredients}</p>
                <h3>Способ приготовления:</h3>
                <p>{dish.method}</p>
            </div>
        </>
    );
}

export default Dish;