import React from 'react';
import chair from '../../../../images/chair.png';
import bg from '../../../../images/bg.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const bannerBackGround = {
    background: `url(${bg})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    color: 'black'
}

const alignMents = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: "400px"
}
const Banner = () => {
    return (
        <Box style={bannerBackGround} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid style={alignMents} item xs={12} md={5}>
                        <Box >
                            <Typography variant='h3' sx={{ mt: 2, mb: 2, fontWeight: 'bold' }}>
                                Your New Smile Starts Here
                            </Typography>
                            <Typography variant='body2' sx={{ mt: 2, mb: 2 }}>
                                Its a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </Typography>
                            <Button sx={{ mt: 2, mb: 2 }} variant="contained">Get Appoinment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7} style={alignMents}>
                        <img src={chair} style={{ width: "500px", margin: '0 20px' }} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Banner
