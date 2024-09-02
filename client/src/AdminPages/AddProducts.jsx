import React, { useState } from "react";
import axios from "axios";

export default function AddProducts() {

    const [title,setTitle] = useState('');
    const [imageUrl,setImageUrl] = useState('');
    const [price,setPrice] = useState(0);
    const [desc,setDesc] = useState(0);

    const addProduct =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/addproduct', { title,imageUrl, price, desc })
            .then(()=>{
                setTitle('')
                setImageUrl('')
                setPrice(0)
                setDesc(0)
            })
            .catch(err => console.log(err))


    } 

    return (

        <div>
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
                                    <h2 className="fs-6 fw-normal text-center mb-4">Add Products </h2>
                                    <form>
                                        <div className="row gy-2 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" name="Title" id="Title" placeholder="Title"  onChange={(e)=>setTitle(e.target.value)}/>
                                                    <label className="form-label">Name of the Product</label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" name="Image" id="Image" placeholder="Image"  onChange={(e)=>setPrice(e.target.value)}/>
                                                    <label className="form-label">Image Url</label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="Number" className="form-control" name="Price" id="Price" placeholder="Price"  onChange={(e)=>setPrice(e.target.value)}/>
                                                    <label className="form-label">Price</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" name="Description" id="Description" placeholder="Description"  onChange={(e)=>setDesc(e.target.value)}/>
                                                    <label className="form-label">Description</label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="d-grid my-3">
                                                    <button className="btn btn-primary btn-lg" type="submit" onClick={addProduct}>Add Product</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}