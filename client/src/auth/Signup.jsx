import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPass] = useState()
    const [phone,setPhone] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name,phone, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
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
                                <h1 className="fs-6 fw-normal text-center mb-4">Enter your details to register</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="row gy-2 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" name="Name" id="Name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                                                <label className="form-label">Name</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="number" className="form-control" name="phone" id="phone" placeholder="Phone no." onChange={(e) => setPhone(e.target.value)} />
                                                <label className="form-label">Phone Number</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                                <label className="form-label">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                                                <label className="form-label">Password</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="d-grid my-3">
                                                <button className="btn btn-success rounded-1" type="submit">Sign up</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="col-12 text-center">
                                    <p className="m-0 text-secondary text-center">Already have an account? <a  onClick={()=>navigate('/login')}  className="link-primary text-decoration-none">Log in</a></p>
                                    <a className="nav-link mx-2 active fst-italic" aria-current="page" onClick={()=>navigate('/home')}>Go to Home</a>
                                </div>
                                
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}

