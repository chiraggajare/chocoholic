import React, { useState } from "react";
import axios from '../axios'
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const navigate = useNavigate();

    const [{ }, dispatch] = useStateValue();


    const login = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:3001/login", { email, password })
            .then((res) => {
                if (!res.data.error) {
                    dispatch({
                        type: "SET_USER",
                        user: res.data,
                    });

                    localStorage.setItem("user", JSON.stringify(res.data));

                    navigate("/home");

                } else if (res.data.error) {
                    alert(res.data.error);
                }
            })
            .catch(err => console.log(err))
    };

    // const login = (e)=>{ 
    //     e.preventDefault()
    //     axios.post('http://localhost:3001/login',{email,password})
    //     .then(result => {
    //         console.log(result)
    //         if(result.data==="Success"){
    //             // res.render('/home')

    //             navigate('/home')
    //         }
    //     })
    //     .catch(err=> console.log(err))
    // }

    return (
        // <section classNameName="bg-light py-3 py-md-5 vh-100">
        //     <div classNameName="container">
        //         <div classNameName="row justify-content-center">
        //             <div classNameName="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
        //                 <div classNameName="card border border-light-subtle rounded-3 shadow-sm">
        //                     <div classNameName="card-body p-3 p-md-4 p-xl-5">
        //                         <div classNameName="text-center mb-3">
        //                             <a href="#!">
        //                             </a>
        //                         </div>
        //                         <h1 classNameName="fs-6 fw-normal text-center mb-4">Enter your details to Log In</h1>
        //                         <form onSubmit={login}>

        //                             <div classNameName="row gy-2 overflow-hidden">
        //                                 {/* <div classNameName="col-12">
        //                                     <div classNameName="form-floating mb-3">
        //                                         <input type="text" classNameName="form-control" name="Name" id="Name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name}/>
        //                                         <label classNameName="form-label">Name</label>
        //                                     </div>
        //                                 </div> */}

        //                                 <div classNameName="col-12">
        //                                     <div classNameName="form-floating mb-3">
        //                                         <input type="email" classNameName="form-control" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}  value={email}/>
        //                                         <label classNameName="form-label">Email</label>
        //                                     </div>
        //                                 </div>
        //                                 <div classNameName="col-12">
        //                                     <div classNameName="form-floating mb-3">
        //                                         <input type="password" classNameName="form-control" name="password" id="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} value={password}/>
        //                                         <label classNameName="form-label">Password</label>
        //                                     </div>
        //                                 </div>

        //                                 <div classNameName="col-12">
        //                                     <div classNameName="d-grid my-3">
        //                                         <button classNameName="btn btn-success rounded-1" type="submit">Log In</button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </form>
        //                         <div classNameName="col-12 text-center">
        //                             <p classNameName="m-0 text-secondary text-center">Don't have an account? <a onClick={() => navigate('/register')} classNameName="link-primary text-decoration-none">Sign in</a></p>
        //                             <a classNameName="nav-link mx-2 active fst-italic" aria-current="page" onClick={() => navigate('/home')}>Go to Home</a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>


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
                                            <h2 className="h3">Login here!</h2>
                                            <h3 className="fs-6 fw-normal text-secondary m-0">Provide your registered the email address you want to use and enter a secure password.</h3>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={login}>
                                    <div className="row gy-3 overflow-hidden">

                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                                <label className="form-label">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} value={password} />
                                                <label className="form-label">Password</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="d-grid my-3">
                                                <button className="btn btn-primary btn-lg" onClick={login}>Log in</button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                                            <a className="link-secondary text-decoration-none" onClick={() => navigate('/register')}>Register</a>
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
    )
}

