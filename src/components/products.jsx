import Card from '@mui/material/Card'
import React from 'react'
import Apples from "../assets/products/Apples.webp";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ProductData } from '../utils/dummyData';
import Grid from '@mui/material/Grid';
import ProductDetailModal from './productDetailModal';

const Products = () => {
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
    <>
    <Box sx ={{flexGrow : 1}}>
        <Grid container spacing={5}>
    {ProductData ?.map((product, index)=> {
        return(
            <Grid size={3}>
            <Card key={index} className='w-[245px] p-3'>
        <img className='cursor-pointer' onClick={handleOpen} src={product.img} alt="Apples" />
        
        <Typography variant='h6'>{product.productName}</Typography>
        <Typography variant='Subtitle1'>1lb</Typography>

        <Box className="flex justify-between" >
            <Box>
                <Typography variant='h5'>${product ?.price}</Typography>
            </Box>

            <Box>
                <Button sx={{borderRadius:"50px", border:"1px solid #009f7f", color:"#009f7f"}}>
                    <ShoppingCartIcon /> Cart
                </Button>
            </Box>
        </Box>
            </Card>
            </Grid>
        );
    })}
        </Grid>
    </Box>

    <ProductDetailModal open={open}  handleClose={handleClose}/>
    </>
  )
}

export default Products
