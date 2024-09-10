import React from "react";
import { useStateValue } from "../StateProvider";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from '../reducer';

export default function CartPage() {
    const [{ cart },dispatch] = useStateValue();
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
                    <h2>Shopping Cart</h2>

                    {
                        cart?.map((product) => (<Product className="my-3">
                            <Image><img src={product.imageUrl} alt="" /></Image>
                            <div className="mx-3">
                                <Title><h3>{product.title}</h3></Title>
                                <Desc><p>{product.desc}</p></Desc>
                                <Price><p>{product.price}</p></Price>
                                <button onClick={(e) => removefromcart(e, product.id)}>Remove</button>
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
                    <button>Proceed to Checkout</button>
                </SubTotal>
            </Main>
        </Container>
    )
}


const Container = styled.div`

width: 100%;
max-width: 1400px;
height: fit-content;
margin: auto;
border: 1px solid red;
position: relative;

`

const Main = styled.div`
    display: flex;
    padding: 15px


`
const ShoppingCart = styled.div`

    padding: 15px;
    flex: 0.7;
    border: red solid;


    h2{
    font-weight: 500;
    border-bottom:1px solid lightgrey;
    padding-bottom: 15px;
    }
`
const SubTotal = styled.div`
    flex: 0.3;
    border: red solid;
    margin-left: 15px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;



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

    button {
    width: 65%;
    height: 33px;
    margin-top: 20px;
    background-color: #ffd814;
    border: none;
    outline: none;

    border-radius: 8px;
    }



`

const Product = styled.div`

    display: flex;
    align-items: center;

    button{
    background-color: skyblue;

    &:hover{
        color: white;
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

