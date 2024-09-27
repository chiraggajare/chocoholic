import React from "react";
import styled from "styled-components"
import './CardStyle.css'
import { useStateValue } from "../StateProvider";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Card({ id, title, price, desc, imageUrl }) {


    const [{ cart }, dispatch] = useStateValue();
    console.log("basket>>>>>", cart);

    function addToCart(e) {
        // const notify = () => toast("Wow so easy !");

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

            <Product className="text-center my-4">
                <Image><img src={imageUrl} className="card-img-top rounded-3" alt="" /></Image>
                <div className="mx-3">
                    <Title><p className="card-title my-2">{title}</p></Title>
                    <Desc><p className="card-text my-3">{desc}</p></Desc>
                    <Price><p className="card-text my-2">₹ {price} /-</p></Price>
                    <button type="button" className="btn w-100 rounded-0" onClick={addToCart}>Add to Cart</button>
                    </div>
            </Product>
        </div>
    )
}


const Product = styled.div`

    button{
    color: white;
    background-color: #423835;

    &:hover{
    background-color: #8a7a5d;
    }
    }

`
const Image = styled.div`
    img{
    width:auto;
    height:200px;
    border-radius: 10px;
    }

`
const Title = styled.div`
font-size: 20px;
`
const Desc = styled.div`
font-style: italic;
font-size: 15px;

`
const Price = styled.div``

