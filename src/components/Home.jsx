import React from 'react'
import Products from './products'
import Box from '@mui/material/Box'
import HoverCart from './HoverCart'

const Home = () => {
  return (
    <>
        <Box className="relative">
        <Products/>
        <Box className="absolute right-0 top-1/2">
        <HoverCart/>
        </Box>
      </Box> 
    </>
  )
}

export default Home
