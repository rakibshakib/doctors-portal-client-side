import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import doctor from '../../../../images/doctor.png';
import appointmentBg from '../../../../images/appointmentBg.png'
import { Button, Container } from '@mui/material';

const appointmentBackGround = {
    background: `url(${appointmentBg})`,
    marginTop: '175px',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    color: 'white'
}


const ApoinmentBanner = () => {
    return (
        <Box style={appointmentBackGround} sx={{ flexGrow: 1, mt: 5 }}>
            <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '400px', marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: "flex-start",
                    alignItems: 'center',    
                }}>
                   <Box>
                   <Typography variant='h6' sx={{mt: 2, mb: 2}}>
                        Book an Appointment
                    </Typography>
                    <Typography variant='h4' sx={{mt: 2, mb: 2}}>
                        Make an appointment with our specialist today
                    </Typography>
                    <Typography variant='body2' sx={{mt: 2, mb: 2}}>
                        Its a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                    <Button sx={{mt: 2, mb: 2}} variant="contained">Learn More</Button>
                   </Box>
                </Grid>
            </Grid>
            </Container>
        </Box>
    )
}

export default ApoinmentBanner
