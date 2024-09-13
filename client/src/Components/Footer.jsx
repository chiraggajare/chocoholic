import React from "react";
import { useNavigate } from "react-router-dom";
import './FooterStyles.css';
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";



export default function Footer() {

    const navigate = useNavigate();
    return (
        <div>
            <div className="my-5">
                <footer className="text-center text-lg-start text-white">
                    <div className="container p-4 pb-0">
                        <section className="">
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        OUR COMPANY
                                    </h6>
                                    <p>
                                        <a>About Us</a>
                                    </p>
                                    <p>
                                        <a>Privacy Policy</a>
                                    </p>
                                    <p>
                                        <a>Terms & Conditions</a>
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">HELP</h6>
                                    <p>
                                        <a>Contact Us</a>
                                    </p>
                                
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <hr className="w-100 clearfix d-md-none" />


                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p>Wakad, Pune 411057, Maharashtra</p>
                                    <p>chiraggajare01@gmail.com</p>
                                    <p>+91 0123456789</p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                                    <a className="btn"> <SiInstagram /></a>
                                    <a className="btn"><IoLogoYoutube /></a>
                                    <br></br>
                                    <a className="btn"> <FaXTwitter /></a>
                                    <a className="btn"> <FaFacebook /></a>

                                </div>
                            </div>
                        </section>
                    </div>

                    <p id="bottom" className="text-center p-3">
                        Made by Chirag Gajare!
                    </p>
                </footer>
            </div>

        </div>
    )
}