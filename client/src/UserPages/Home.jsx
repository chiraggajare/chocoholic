import React from "react";
import Navbar from "../Components/Navbar";
import './HomeStyle.css';
// import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import About from "./About";

export default function Home() {

    const navigate = useNavigate();

    return (
        <>

            <Navbar />

            <div className="main text-center">
                <br></br><br></br><br></br>
                <figure className="text-center fs-3 m-5">
                    <blockquote className="blockquote fs-3">
                        <h2 id="hometitle">Anything is good if it's made of chocolate.</h2>
                    </blockquote>
                    <figcaption className="blockquote-footer text-light">
                        <cite className="text-light">Jo Brand</cite>
                    </figcaption>
                </figure>
                <br></br><br></br>
                <p id="bgtext" className="text-center text-light">Chocolat Magasin Spécialisé</p>
                <br></br><br></br><br></br>

                <a type="button" id="shopOn" className="btn bg-transparent my-0 btn-outline-light rounded-0 text-light" onClick={()=>navigate('/products')}>Shop Online</a>
                <br></br><br></br><br></br>
                <br></br><br></br>


            </div>
            <br></br><br></br>
            <div id="timeline" className="container-fluid text-center">
                <h2>The Chocolate Timeline</h2>
                <section>
                    <div className="container py-5">
                        <div className="main-timeline">
                            <div className="timeline left">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h3>1200 B.C</h3>
                                        <h5 className="text-decoration-underline">Chocolate in Mesoamerica</h5>
                                        <p className="mb-0">The Aztecs considered chocolate more valuable than gold and used cacao beans as currency.  When they crafted clay pottery with ornate designs, they even featured cocoa in a broad variety of art, tools, and valued artifacts. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline right">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h3>1500s</h3>
                                        <h5 className="text-decoration-underline">Chocolate Entering Spain</h5>
                                        <p className="mb-0"> Christopher Columbus and Hernan Cortes have both been credited for bringing cacao beans back from their journeys of exploring the Americas in the 1500s. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline left">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h3>1828</h3>
                                        <h5 className="text-decoration-underline">Creating Cacao Powder in Europe </h5>
                                        <p className="mb-0">Cacao spread rapidly across Europe, but it remained exclusively a beverage for over 3,000 years until 1828. A Dutch gentleman named Coenraad van Houten, more than 100 years after cacao was introduced to Europe, had created the first Cocoa Press.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline right">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h3>1876</h3>
                                        <h5 className="text-decoration-underline">The First Chocolate Bar</h5>
                                        <p>It wasnt until 1876 that the chocolate bar was invented. Henri Nestlé (yes that Nestlé) came up with the idea and process to incorporate milk and voilá milk chocolate was brought into the mass market. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline left">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h3>2021</h3>
                                        <h5 className="text-decoration-underline">Chocolate Today</h5>

                                        <p className="mb-0">Chocolate today is readily available today and in more combinations of flavors than even Coenraad van Houten could have ever imagined.  While we still enjoy a nice hot chocolate on a cold day, chocolate consumption is now favored as an edible treat rather than its traditional liquid form. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>

    )
}