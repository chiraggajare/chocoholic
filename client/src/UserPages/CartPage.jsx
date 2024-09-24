import React from "react";
import { useStateValue } from "../StateProvider";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import Footer from "../Components/Footer";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from '../reducer';
import './CartStyles.css';
import { useNavigate } from "react-router-dom";


export default function CartPage() {
    const navigate = useNavigate()
    const [{ cart }, dispatch] = useStateValue();
    const removefromcart = (e, id) => {
        e.preventDefault();

        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        });
    };

    console.log("checkout>>>>>>>", cart);

    return (
        <Container>
            <Navbar />
            <Main>
                <ShoppingCart>
                <h2 className="text-center">YOUR BASKET</h2>

                    {
                        cart?.map((product) => (<Product className="my-3">
                            <Image><img src={product.imageUrl} className="card-img-top rounded-3" alt="" /></Image>
                            <div className="mx-3">
                                <Title><h5 className="card-title my-1">{product.title}</h5></Title>
                                <Desc><p className="card-text my-1">{product.desc}</p></Desc>
                                <Price><p className="card-text my-1">₹ {product.price}</p></Price>
                                <button className="btn rounded-1 my-1" onClick={(e) => removefromcart(e, product.id)}>Remove</button>
                            </div>
                        </Product>))

                    }

                </ShoppingCart>

                <SubTotal>
                    <CurrencyFormat

                        renderText={(value) => (
                            <>
                                <p>
                                    Subtotal ( {cart.length} items ) : <strong> {value}</strong>
                                </p>
                                <small>
                                    <input type="checkbox" />
                                    <span>This order contains a gift.</span>
                                </small>
                            </>
                        )}
                        decimalScale={2}
                        value={getCartTotal(cart)}
                        displayType="text"
                        thousandSeparator={true}
                        prefix={"₹ "}

                    />
                    <button className="btn w-75 rounded-0 my-3" onClick={()=>navigate('/address')}>Proceed to Checkout</button>
                </SubTotal>
            </Main>
            <Footer/>
        </Container>
    )
}


const Container = styled.div`

width: 100%;
// height: fit-content;
height: 100vh;

margin: auto;
position: relative;


`

const Main = styled.div`
    display: flex;
    padding: 15px
`
const ShoppingCart = styled.div`

    padding: 15px;
    flex: 0.7;
    border: 1px solid lightgrey;
    border-radius: 8px;

`
const SubTotal = styled.div`
    flex: 0.3;
    border: 1px solid lightgrey;
    margin-left: 15px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    border-radius: 8px;


    p {
    font-size: 20px;
    }

    small {
    display: flex;
    align-items: center;
    margin-top: 10px;

    span {
    margin-left: 10px;
    }} 

    button{
    background-color: #BFA760;

    &:hover{
        background-color: #D4BE81;
    }
    }
    }

`

const Product = styled.div`

    display: flex;
    align-items: center;

    button{
    color: white;
    background-color: #415a77;

    &:hover{
        background-color: #778da9;
    }
    }

`
const Image = styled.div`
flex: 0.3;
    img{
    width:auto;
    height:200px;
    border-radius: 10px;
    }

`
const Title = styled.div``
const Desc = styled.div`

flex: 0.7;
`
const Price = styled.div``






