import React from "react";
import './NavStyle.css';
import { IoCartOutline } from "react-icons/io5";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";


export default function Navbar() {

    const [{cart}]=useStateValue();
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light p-1 sticky-top text-light">
                <div className="container-fluid text-light">

                    <a className="nav-link mx-2 active text-light" href="#">THE CHOCOHOLIC</a>


                    <div className="collapse navbar-collapse" id="navbarMid">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page"onClick={()=>navigate('/home')}>HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page"onClick={()=>navigate('/products')}>SHOP</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page"onClick={()=>navigate('/about')}>ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page"onClick={()=>navigate('/#')}>CONTACT</a>
                            </li>
                        </ul>
                        <div className="navbar-nav d-none d-lg-inline-flex ms-auto">

                            <div className="d-flex align-items-center justify-content-center text-light" >
                                <a className="nav-link mx-1 active text-light" aria-current="page" onClick={()=>navigate('/cart')}> <IoCartOutline /></a>
                                <sub>{cart?.length}</sub>
                            </div>

                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page" onClick={()=>navigate('/register')}>Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page" onClick={()=>navigate('/login')}>Log In</a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}