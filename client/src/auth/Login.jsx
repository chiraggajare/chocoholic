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
            .catch((err) => console.warn(err));
    };

    // const handleSubmit = (e)=>{ 
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
        // <section className="bg-light py-3 py-md-5 vh-100">
        //     <div className="container">
        //         <div className="row justify-content-center">
        //             <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
        //                 <div className="card border border-light-subtle rounded-3 shadow-sm">
        //                     <div className="card-body p-3 p-md-4 p-xl-5">
        //                         <div className="text-center mb-3">
        //                             <a href="#!">
        //                             </a>
        //                         </div>
        //                         <h1 className="fs-6 fw-normal text-center mb-4">Enter your details to Log In</h1>
        //                         <form onSubmit={login}>

        //                             <div className="row gy-2 overflow-hidden">
        //                                 {/* <div className="col-12">
        //                                     <div className="form-floating mb-3">
        //                                         <input type="text" className="form-control" name="Name" id="Name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name}/>
        //                                         <label className="form-label">Name</label>
        //                                     </div>
        //                                 </div> */}

        //                                 <div className="col-12">
        //                                     <div className="form-floating mb-3">
        //                                         <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}  value={email}/>
        //                                         <label className="form-label">Email</label>
        //                                     </div>
        //                                 </div>
        //                                 <div className="col-12">
        //                                     <div className="form-floating mb-3">
        //                                         <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} value={password}/>
        //                                         <label className="form-label">Password</label>
        //                                     </div>
        //                                 </div>

        //                                 <div className="col-12">
        //                                     <div className="d-grid my-3">
        //                                         <button className="btn btn-success rounded-1" type="submit">Log In</button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </form>
        //                         <div className="col-12 text-center">
        //                             <p className="m-0 text-secondary text-center">Don't have an account? <a onClick={() => navigate('/register')} className="link-primary text-decoration-none">Sign in</a></p>
        //                             <a className="nav-link mx-2 active fst-italic" aria-current="page" onClick={() => navigate('/home')}>Go to Home</a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>


        <section class="bg-primary py-3 py-md-5 py-xl-8">
            <div class="container">
                <div class="row gy-4 align-items-center">
                    <div class="col-12 col-md-6 col-xl-7">
                        <div class="d-flex justify-content-center text-bg-primary">
                            <div class="col-12 col-xl-9">
                                <p>THE CHOCOHOLIC</p>
                                <hr class="border-primary-subtle mb-4" />
                                <h2 class="h1 mb-4">"Chocolate: A little piece of heaven."</h2>
                                <p class="lead mb-5">Discover the perfect chocolate gift for every occasion at The Chocoholic, beautifully packaged and delivered right to your doorstep.</p>
                                <div class="text-endx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-grip-horizontal" viewBox="0 0 16 16">
                                        <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-5">
                        <div class="card border-0 rounded-4">
                            <div class="card-body p-3 p-md-4 p-xl-5">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-4">
                                            <h2 class="h3">Login here!</h2>
                                            <h3 class="fs-6 fw-normal text-secondary m-0">Provide your registered the email address you want to use and enter a secure password.</h3>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={login}>
                                    <div class="row gy-3 overflow-hidden">
                                        
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
                                                <button className="btn btn-primary btn-lg" type="submit">Log up</button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                                            <a class="link-secondary text-decoration-none" onClick={() => navigate('/register')}>Register</a>
                                            <a class="link-secondary text-decoration-none" onClick={() => navigate('/home')}>Go to Home</a>
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

