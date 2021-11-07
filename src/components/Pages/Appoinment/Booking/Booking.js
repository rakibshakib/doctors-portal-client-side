import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking, date, setBookingSuccess }) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <>
        <Grid item xs={12} md={4} sm={6}>
            <Paper sx={{p: 5, m: 1}}>
                <Typography sx={{color: 'info.main'}} variant="h6" component="h6">
                    {booking.name}
                </Typography>
                <Typography variant="h6" component="h6">
                    {booking.time}
                </Typography>
                <Typography variant="caption" display='block'>
                    {booking.space} Space Available
                </Typography>
                <Button onClick={handleModalOpen} sx={{my: 2}} variant="contained" color="primary">BOOK APOINMENT</Button>
            </Paper>
        </Grid>
        <BookingModal
        setBookingSuccess={setBookingSuccess}
        booking={booking} 
        modalOpen={modalOpen} 
        date={date} 
        handleModalClose={handleModalClose} /> 
        </>

    )
}

export default Booking;
