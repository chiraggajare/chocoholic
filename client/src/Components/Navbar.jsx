import React from "react";
import './NavStyle.css';
import { IoCartOutline } from "react-icons/io5";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

export default function Navbar() {

    const [{ cart, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const signOut = () => {
        dispatch({
            type: "SET_USER",
            user: null,
        });

        localStorage.removeItem("user");
        navigate("/home");
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light p-1 sticky-top text-light">
                <div className="container-fluid text-light">

                    <a className="nav-link mx-2 active text-light" href="#">THE CHOCOHOLIC</a>


                    <div className="collapse navbar-collapse" id="navbarMid">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page" onClick={() => navigate('/home')}>HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page" onClick={() => navigate('/products')}>SHOP</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page" onClick={() => navigate('/about')}>ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page" onClick={() => navigate('/#')}>CONTACT</a>
                            </li>
                        </ul>
                        <div className="navbar-nav d-none d-lg-inline-flex ms-auto">


                            <div className="nav-item" onClick={() => navigate('/orders')}>
                                <a className="nav-link mx-2 active text-light">Orders</a>
                            </div>

                            <div className="nav-item" onClick={user ? () => signOut() : () => navigate("/login")}>
                                <a className="nav-link mx-2 active text-light">Welcome  {user ? user?.name : "Guest"}</a>
                            </div>



                            <div className="d-flex align-items-center justify-content-center text-light" >
                                <a className="nav-link mx-1 active text-light" aria-current="page" onClick={() => navigate('/cart')}> <IoCartOutline /></a>
                                <sub>{cart?.length}</sub>
                            </div>


                            {/* <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page" onClick={() => navigate('/register')}>Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 active text-light" aria-current="page" onClick={() => navigate('/login')}>Log In</a>
                            </li> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}