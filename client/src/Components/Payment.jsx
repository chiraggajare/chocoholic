import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useStateValue } from "../StateProvider";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from '../reducer';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Address from "./Address";
import axios from "../axios";
import { useNavigate } from "react-router-dom";


export default function Payment() {

    const [{ address, user }] = useStateValue();
    const [{ cart }, dispatch] = useStateValue();
    const [clientSecret, setClientSecret] = useState("");
    const elements = useElements()
    const stripe = useStripe()
    const navigate = useNavigate();



    useEffect(() => {
        const fetchClientSecret = async () => {
            const data = await axios.post("/payment/create", {
                amount: getCartTotal(cart),
            });

            setClientSecret(data.data.clientSecret);
        };

        fetchClientSecret();
        console.log("clientSecret is >>>>", clientSecret);
    }, []);


    const confirmPayment = async (e) => {
        e.preventDefault();

        await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then((result) => {
                axios.post("/orders/add", {
                    cart: cart,
                    price: getCartTotal(cart),
                    email: user?.email,
                    address: address,
                });

                dispatch({
                    type: 'EMPTY_CART'
                })
                navigate("/home");
            })
            .catch((err) => console.warn(err));
    };


    return (
        <Container2>
            <Navbar />

            <Main3>
                <ReviewContainer className="m-3">
                    <h2>Review Your Order</h2>

                    <AddressContainer>
                        <h5 className="m-3">Shipping Address</h5>

                        <div className="m-3">
                            <p>Name: {address.fullName}</p>
                            <p>Phone Number: {address.phone}</p>
                            <p>Full Address: {address.address}</p>
                            <p>Pincode: {address.pincode}</p>
                        </div>
                    </AddressContainer>

                    <PaymentContainer>
                        <h5 className="m-3">Payment Method</h5>

                        <div className="m-3">
                            <p>Card Details: </p>

                            <CardElement />
                        </div>
                    </PaymentContainer>

                    <OrderContainer>
                        <h5 className="m-3">Your Orders</h5>

                        <div className="m-3">
                            {
                                cart?.map((product) => (<Product className="my-3">
                                    <Image><img src={product.imageUrl} className="card-img-top rounded-3" alt="" /></Image>
                                    <div className="mx-3">
                                        <Title><h5 className="card-title my-1">{product.title}</h5></Title>
                                        <Desc><p className="card-text my-1">{product.desc}</p></Desc>
                                        <Price><p className="card-text my-1">₹ {product.price}</p></Price>
                                    </div>
                                </Product>))

                            }
                        </div>
                    </OrderContainer>
                </ReviewContainer>
                <SubTotal className="m-3">
                    <h5>Sub Total</h5>

                    <CurrencyFormat

                        renderText={(value) => (
                            <>
                                <p>
                                    Subtotal ( {cart.length} items ) : <strong> {value}</strong>
                                </p>
                            </>
                        )}
                        // decimalScale={0}
                        value={getCartTotal(cart)}
                        displayType="text"
                        thousandSeparator={true}
                        prefix={"₹ "}
                    />
                    <button className="btn" onClick={confirmPayment}>Place Order</button>

                </SubTotal>
            </Main3>
        </Container2>
    );
}

const Container2 = styled.div`

`;

const Main3 = styled.div`
display: flex;

`;

const ReviewContainer = styled.div`
background-color: #fff;
flex: 0.7;
padding: 15px;
h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
}
border: 1px solid lightgrey;
    border-radius: 8px;
`;

const AddressContainer = styled.div`
margin-top: 20px;
div {
    margin-top: 10px;
    margin-left: 10px;

    p {
    font-size: 14px;
    margin-top: 4px;
    }
}
border: 1px solid lightgrey;
    border-radius: 8px;
`;

const PaymentContainer = styled.div`
margin-top: 15px;

div {
    margin-top: 15px;
    margin-left: 15px;

    p {
    font-size: 14px;
    }
}
border: 1px solid lightgrey;
    border-radius: 8px;`;

const OrderContainer = styled.div`
margin-top: 30px;
border: 1px solid lightgrey;
    border-radius: 8px;`;

const SubTotal = styled.div`
    flex: 0.3;
    border: 1px solid lightgrey;
    margin-left: 15px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
border: 1px solid lightgrey;
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
