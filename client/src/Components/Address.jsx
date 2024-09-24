import React, { useState } from "react";
import "./AddressStyles.css"
import Navbar from "./Navbar";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";


export default function Address() {

    const [fullName, setfullName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');

    const [{ }, dispatch] = useStateValue()
    const navigate = useNavigate();

    const deliver = (e) => {
        e.preventDefault()

        dispatch({
            type: "SET_ADDRESS",
            item: {
                fullName,
                phone,
                address,
                pincode,
            },
        })
        navigate('/payment')
    }

    return (
        <div className="mainaddress">
            <Navbar />

            <h1>Address Page</h1>


            <form className="container">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="name" id="name" placeholder="Full Name" onChange={(e) => setfullName(e.target.value)} value={fullName} />
                    <label className="form-label">Enter Full Name</label>

                </div>

                <div className="form-floating mb-3">
                    <input type="number" className="form-control" name="phone" id="phone" placeholder="Your Phone Number" onChange={(e) => setPhone(e.target.value)} value={phone} />
                    <label className="form-label">Enter Phone Number</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="address" id="address" placeholder="Your Full Address" onChange={(e) => setAddress(e.target.value)} value={address} />
                    <label className="form-label">Enter Full Address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="number" className="form-control" name="pincode" id="pincode" placeholder="Your Pincode" onChange={(e) => setPincode(e.target.value)} value={pincode} />
                    <label className="form-label">Enter Pincode</label>
                </div>


                <div className="d-grid my-3">
                    <button className="btn btn-success rounded-1" type="submit" onClick={deliver} >Proceed To Payment</button>
                </div>
            </form>





        </div>
    )

}