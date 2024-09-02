import './App.css'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './auth/Login'
import Home from './UserPages/Home'
import Signup from './auth/Signup'
import Cart from './UserPages/Cart'
import About from './UserPages/About'
import Products from './UserPages/Products'
import Navbar from './Components/Navbar'
import AddProducts from './AdminPages/AddProducts'



function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Navbar />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path='/addproduct' element={<AddProducts/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
