import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React from 'react'
import { styleProductDetail } from '../assets/style';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import CircularProgress from '@mui/material/CircularProgress';

const ProductDetailModal = (props) => {
    const {open, handleClose, currentProductDetails} = props;
    return (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box fontStyle={styleProductDetail}>
            { currentProductDetails ? (
            <Box className='p-5' sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid size={6}>
                  
                  <Swiper navigation={true} 
                  modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                      <img src={currentProductDetails?.img}/>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                  </Swiper>
                </Grid>
                
                <Grid size={6}> 
                  <Box className="flex justify-between">
                    
                    <Box>
                      <Typography variant='h4'>
                        {currentProductDetails?.productName}
                        </Typography>
                      <Typography variant='body1'>
                        1lb
                        </Typography>
                    </Box>

                    <Box className="flex flex-col">
                      <FavoriteIcon/>
                      <Button variant='contained'>
                        <StarBorderIcon/>
                      </Button>
                    </Box>

                  </Box>

                  <Typography variant='body1' className='py-8'>
                    clementine is a tangor, a citrus fruit hybrid between a 
                    willowleaf mandarin orange and a sweet orange, named for its 
                    late 19th-century discoverer. The exterior is a deep orange 
                    colour with a smooth, glossy appearance.
                  </Typography>

                  <Box className="py-6">
                    <Typography variant='body1'>
                     {currentProductDetails?.price}
                     </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            ) : (
              <Box className="p-20 flex justify-center">
                <CircularProgress color='inherit' />
              </Box>
            )  
          }
          </Box>
        </Fade>
      </Modal>
  )
}

export default ProductDetailModal
