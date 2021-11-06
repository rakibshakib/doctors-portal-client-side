import { Container, Grid } from '@mui/material'
import React from 'react';
import chair from '../../../../images/chair.png'
import Calender from '../../../Shared/Calender/Calender';

const AppoinmentHeader = ({dateValue, setDateValue}) => {
    
    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                        <Calender dateValue={dateValue} setDateValue={setDateValue} /> 
                </Grid>
                <Grid item xs={12} md={5}  sx={{m:5}}>
                    <img src={chair} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default AppoinmentHeader
