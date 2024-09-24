import React from "react";
import './PaymentStyles.css'
import Navbar from "./Navbar";
import { useStateValue } from "../StateProvider";

export default function Payment() {

    const [{ address }] = useStateValue();

    return (

        <div>
            <Navbar />


            <div className="mainPayment">
                <h1>Payment Page</h1>

                <div className="ReviewContainer ">

                    <div className="AddressContainer">
                        <h2>Delivery Address</h2>

                        <p>Name: {address.fullName}</p>
                        <p>Phone Number: {address.phone}</p>
                        <p>Full Address: {address.address}</p>
                        <p>Pincode: {address.pincode}</p>



                    </div>
                    <div className="OrderContainer">
                        <h2>Your Orders</h2>

                    </div>


                    <div className="PaymentContainer">
                        <h2>Payment Method</h2>

                    </div>



                </div>





            </div>


        </div>


    )
}