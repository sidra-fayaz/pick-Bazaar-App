import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import Products from './components/products'
import HoverCart from './components/HoverCart'
import  Box from '@mui/material/Box'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout'
import Home from './components/Home'
import Register from './components/auth/Register'

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='offer' element={<h1>offers</h1>}></Route>
            <Route path='shops' element={<h1>shops</h1>}></Route>
          </Route>


          <Route path='/register' element={<Register/>}></Route>

        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App
