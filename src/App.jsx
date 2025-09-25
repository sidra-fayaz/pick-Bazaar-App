import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import Products from './components/products'
import HoverCart from './components/HoverCart'
import  Box from '@mui/material/Box'

function App() {
  return (
    <Box className="relative">
        <AppHeader/>  
        <Products/>

        <Box className="absolute right-0 top-1/2">
        <HoverCart/>
        </Box>
    </Box>
  );
}

export default App
