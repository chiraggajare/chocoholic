import React from "react";
import styled from "styled-components"
import './CardStyle.css';
import { useStateValue } from "../StateProvider";

export default function Card({id,title,price,desc,imageUrl}) {


    const [{ cart }, dispatch] = useStateValue();
    console.log("basket>>>>>",cart);

    function addToCart(e) {
        e.preventDefault();

        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id,
                title,
                price,
                imageUrl,
                desc,
            },
        })
    }

    return (
        <div>

            <div className="card h-100 border-0 text-center" id="thecard">
                <img src={imageUrl} className="card-img-top rounded-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text">{price}</p>
                </div>
                <button type="button" className="btn btn-secondary w-100 rounded-0" onClick={addToCart}>Add to Cart</button>
            </div>

        </div>
    )


}

