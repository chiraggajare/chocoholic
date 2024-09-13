import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email,setEmail] = useState()
    const [password,setPass] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e)=>{ 
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {
            console.log(result)
            if(result.data==="Success"){
                // res.render('/home')

                navigate('/home')
            }
        })
        .catch(err=> console.log(err))
    }

    return (
        <section className="bg-light py-3 py-md-5 vh-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="card border border-light-subtle rounded-3 shadow-sm">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="text-center mb-3">
                                    <a href="#!">
                                    </a>
                                </div>
                                <h1 className="fs-6 fw-normal text-center mb-4">Enter your details to Log In</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="row gy-2 overflow-hidden">

                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email"  onChange={(e)=> setEmail(e.target.value)}  />
                                                <label  className="form-label">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="password" className="form-control" name="password" id="password"  placeholder="Password"  onChange={(e)=> setPass(e.target.value)}  />
                                                <label  className="form-label">Password</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="d-grid my-3">
                                                <button className="btn btn-success rounded-1" type="submit">Log In</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="col-12 text-center">
                                    <p className="m-0 text-secondary text-center">Don't have an account? <a  onClick={()=>navigate('/register')} className="link-primary text-decoration-none">Sign in</a></p>
                                    <a className="nav-link mx-2 active fst-italic" aria-current="page"  onClick={()=>navigate('/home')}>Go to Home</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

