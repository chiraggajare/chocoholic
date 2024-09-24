import './App.css'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './auth/Login'
import Home from './UserPages/Home'
import Signup from './auth/Signup'
import CartPage from './UserPages/CartPage'
import Products from './UserPages/Products'
import About from './UserPages/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import AddProducts from './AdminPages/AddProducts'
import Address from './Components/Address'
import Payment from './Components/Payment'
// import AboutUs from './Components/AboutUs'
import Card from './Components/Card'

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Navbar />}></Route>
        <Route index element={<Footer/>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        {/* <Route path='/about' element={<AboutUs/>}></Route> */}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/address" element={<Address />}></Route>
        <Route path="/payment" element={<Payment />}></Route>

        

        



        {/* admin route */}
        <Route path='/products/add' element={<AddProducts />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
