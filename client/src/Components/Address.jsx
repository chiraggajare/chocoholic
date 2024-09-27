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

            {/* <h2 classNameName="text-center my-4">Address Page</h2>


            <form classNameName="container w-50">
                <div classNameName="form-floating mb-3">
                    <input type="text" classNameName="form-control" name="name" id="name" placeholder="Full Name" onChange={(e) => setfullName(e.target.value)} value={fullName} />
                    <label classNameName="form-label">Enter Full Name</label>

                </div>

                <div classNameName="form-floating mb-3">
                    <input type="number" classNameName="form-control" name="phone" id="phone" placeholder="Your Phone Number" onChange={(e) => setPhone(e.target.value)} value={phone} />
                    <label classNameName="form-label">Enter Phone Number</label>
                </div>

                <div classNameName="form-floating mb-3">
                    <input type="text" classNameName="form-control" name="address" id="address" placeholder="Your Full Address" onChange={(e) => setAddress(e.target.value)} value={address} />
                    <label classNameName="form-label">Enter Full Address</label>
                </div>

                <div classNameName="form-floating mb-3">
                    <input type="number" classNameName="form-control" name="pincode" id="pincode" placeholder="Your Pincode" onChange={(e) => setPincode(e.target.value)} value={pincode} />
                    <label classNameName="form-label">Enter Pincode</label>
                </div>


                <div classNameName="d-grid my-3">
                    <button classNameName="btn btn-success rounded-1" type="submit" onClick={deliver} >Proceed To Payment</button>
                </div>
            </form>
 */}


            <section className="bg-primary py-3 py-md-5 py-xl-8">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-12 col-md-6 col-xl-7">
                            <div className="d-flex justify-content-center text-bg-primary">
                                <div className="col-12 col-xl-9">
                                    <p>THE CHOCOHOLIC</p>
                                    <hr className="border-primary-subtle mb-4" />
                                    <h2 className="h1 mb-4">"Chocolate: A little piece of heaven."</h2>
                                    <p className="lead mb-5">Discover the perfect chocolate gift for every occasion at The Chocoholic, beautifully packaged and delivered right to your doorstep.</p>
                                    <div className="text-endx">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-grip-horizontal" viewBox="0 0 16 16">
                                            <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-5">
                            <div className="card border-0 rounded-4">
                                <div className="card-body p-3 p-md-4 p-xl-5">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-4">
                                                <h2 className="h3">Your Address!</h2>
                                                <h3 className="fs-6 fw-normal text-secondary m-0">Provide your Name and Full Address to get your Chocolate Delights Delivered to your Doorstep!</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={deliver}>
                                        <div className="row gy-3 overflow-hidden">

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


                                            <div className="col-12">
                                                <div className="d-grid my-3">
                                                    <button className="btn btn-primary btn-lg" type="submit" onClick={deliver}>Proceed to checkout</button>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                                                <a className="link-secondary text-decoration-none" onClick={() => navigate('/home')}>Go to Home</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )

}