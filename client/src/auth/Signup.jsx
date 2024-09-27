import React, { useState } from "react";
import axios from '../axios'
import { useNavigate } from "react-router-dom";
import chocoimg from '../Assets/ab1.jpg'

export default function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [phone, setPhone] = useState('')


    const navigate = useNavigate();

    const signup = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/register", { name, phone, email, password })
            .then((res) => alert(res.data.message))
            .catch((err) => console.warn(err));

        navigate("/login");
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:3001/register', { name,phone, email, password })
    //         .then(result => {
    //             console.log(result)
    //             navigate('/login')
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
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
                                            <h2 class="h3">Register here!</h2>
                                            <h3 class="fs-6 fw-normal text-secondary m-0">Provide the email address you want to use and enter a secure password.</h3>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={signup}>
                                    <div class="row gy-3 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" name="Name" id="Name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                                                <label className="form-label">Name</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="number" className="form-control" name="phone" id="phone" placeholder="Phone no." onChange={(e) => setPhone(e.target.value)} value={phone} />
                                                <label className="form-label">Phone Number</label>
                                            </div>
                                        </div>

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
                                                <button className="btn btn-primary btn-lg" type="submit">Sign up</button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                                            <a class="link-secondary text-decoration-none" onClick={() => navigate('/login')}>Login</a>
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










