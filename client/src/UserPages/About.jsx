import React from "react";
import Navbar from "../Components/Navbar";
import './AboutStyles.css'
import ab1 from '../Assets/ab1.jpg'
import ab2 from '../Assets/ab2.jpg'
import ab3 from '../Assets/ab3.jpg'
import ab4 from '../Assets/ab4.jpg'

// import Footer from "../Components/Footer";



export default function About() {
    return (

        <>
        <Navbar/>
            <section className="py-5">
                <div className="container">
                    <div className="row gx-4 align-items-center justify-content-between">
                        <div className="col-md-5 order-2 order-md-1">
                            <div className="mt-5 mt-md-0">
                                <span className="text-muted">Our Story</span>
                                <h2 className="display-5 fw-bold">About Us</h2>
                                <h5>Indulge in the Sweetest Moments</h5>
                                <p className="lead">At Chocoholic, we believe that chocolate is more than just a treat; it's a language of love, joy, and celebration. </p>
                                <p className="lead">Our mission is to curate a collection of exquisite chocolates that not only delight your taste buds but also leave a lasting impression.</p>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-1 order-1 order-md-2">
                            <div className="row gx-2">
                                <div className="col-4">
                                    <div className="mb-3"><img className="rounded-3" src={ab1} /></div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3"><img className="rounded-3" src={ab2} /></div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-3"><img className="rounded-3" src={ab3} /></div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3"><img className="rounded-3" src={ab4} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
