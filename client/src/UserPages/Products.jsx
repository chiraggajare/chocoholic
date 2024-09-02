import React from "react";
import Navbar from "../Components/Navbar";
import './ProductStyles.css'
import choco1 from '../Assets/ChocoProd/choco1.jpg'
import choco2 from '../Assets/ChocoProd/choco2.jpg'
import choco3 from '../Assets/ChocoProd/choco3.jpg'
import choco4 from '../Assets/ChocoProd/choco4.jpg'
import choco5 from '../Assets/ChocoProd/choco5.jpg'
import choco6 from '../Assets/ChocoProd/choco6.jpg'
// import Footer from "../Components/Footer";



export default function Products() {
    return (
        
        <div>
            <Navbar />
            <div id="mainOne" className="container text-center">


                <br></br><br></br><br></br>
                <h2>CHOOSE YOUR CHOCOLATE</h2>
                <br></br><br></br><br></br>
                <div className="row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center">
                <div className="col">
                        <div className="card h-100 border-0">
                            <img src={choco1} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Name of the product</h5>
                                <p className="card-text">Description</p>
                                <p className="card-text">₹</p>
                            </div>
                            <button type="button" className="btn btn-secondary w-100 rounded-0">Add to Cart</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={choco2} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Name of the product</h5>
                                <p className="card-text">Description</p>
                                <p className="card-text">₹</p>
                            </div>
                            <button type="button" className="btn btn-secondary w-100 rounded-0">Add to Cart</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={choco3} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Name of the product</h5>
                                <p className="card-text">Description</p>
                                <p className="card-text">₹</p>
                            </div>
                            <button type="button" className="btn btn-secondary w-100 rounded-0">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <br></br><br></br>
                <div className="row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center ">
                <div className="col">
                        <div className="card h-100 border-0">
                            <img src={choco4} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Name of the product</h5>
                                <p className="card-text">Description</p>
                                <p className="card-text">₹</p>
                            </div>
                            <button type="button" className="btn btn-secondary w-100 rounded-0">Add to Cart</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={choco5} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Name of the product</h5>
                                <p className="card-text">Description</p>
                                <p className="card-text">₹</p>
                            </div>
                            <button type="button" className="btn btn-secondary w-100 rounded-0">Add to Cart</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={choco6} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Name of the product</h5>
                                <p className="card-text">Description</p>
                                <p className="card-text">₹</p>
                            </div>
                            <button type="button" className="btn btn-secondary w-100 rounded-0">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <br></br><br></br>

                <div className="row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center">
                <div className="col">
                        <div className="card h-100 border-0">
                            <img src={choco6} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Name of the product</h5>
                                <p className="card-text">Description</p>
                                <p className="card-text">₹</p>
                            </div>
                            <button type="button" className="btn btn-secondary w-100 rounded-0">Add to Cart</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={choco6} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Name of the product</h5>
                                <p className="card-text">Description</p>
                                <p className="card-text">₹</p>
                            </div>
                            <button type="button" className="btn btn-secondary w-100 rounded-0">Add to Cart</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={choco6} className="card-img-top rounded-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Name of the product</h5>
                                <p className="card-text">Description</p>
                                <p className="card-text">₹</p>
                            </div>
                            <button type="button" className="btn btn-secondary w-100 rounded-0">Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* <Footer/> */}



        </div>
    )
}