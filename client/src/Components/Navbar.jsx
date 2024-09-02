import React from "react";
import './NavStyle.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light p-1 sticky-top">
                <div className="container-fluid text-light">
                    
                    <a className="nav-link mx-2 active text-light" href="#">THE CHOCOHOLIC</a>
                    
                    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page" href="/home">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page" href="/products">SHOP</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page" href="/about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page" href="#">CONTACT</a>
                            </li>
                        </ul>
                        <div className="navbar-nav d-none d-lg-inline-flex ms-auto">

                            <div className="d-flex align-items-center justify-content-center mx-2">
                            <a className="nav-link mx-2 active text-light" aria-current="page" href="/cart">Cart</a>

                            </div>

                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page" href="/register">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page" href="/login">Log In</a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}