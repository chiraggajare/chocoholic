import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import './ProductStyles.css'
import Card from "../Components/Card";
import axios from '../axios';
import Footer from "../Components/Footer";

// import Footer from "../Components/Footer";



export default function Products() {


    const [products, setProducts] = useState('');

    useEffect(() => {
        const fetchdata = async () => {
            const data = await axios.get('/products/get');
            console.log("product data>>>>>>>", data);
            setProducts(data);
        }
        fetchdata();
    }, []);



    return (
        <div>
            <Navbar />
            <h2 className="text-center my-3">CHOOSE YOUR CHOCOLATE</h2>
            <main className="container-fluid">
                    {products?.data && products.data.map((product) => (<Card
                        id={product._id}
                        imageUrl={product.imageUrl}
                        price={product.price}
                        desc={product.desc}
                        title={product.title}
                    />))}

            </main>

            <Footer/>

        </div>
    )
}


