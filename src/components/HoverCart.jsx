import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React from 'react'

const HoverCart = () => {
  return (
    <Box className='bg-[#009f7f] p-3 rounded-l-lg' >
        <Typography className='text-white font-medium text-[33px]'>3 Items</Typography>
        <Button style={{backgroundColor: "#fff", color: "#009f7f", fontWeight: 600}}>$30.00</Button>
    </Box>
  )
}

export default HoverCart
