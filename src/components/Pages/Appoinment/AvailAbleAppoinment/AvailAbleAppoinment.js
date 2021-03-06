import { Alert, Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import Booking from '../Booking/Booking'

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 30,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 22,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 20,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: 18,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 25,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: 23,
        space: 10,
    },
]


const AvailAbleAppoinment = ({ dateValue }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container sx={{ my: 2, textAlign: 'center' }}>
            <h3>Available appoinment {dateValue.toDateString()} </h3>
            { bookingSuccess && <Alert sx={{ my: 2, textAlign: 'center' }} severity="success">Appoinment Booking successfully!</Alert>}
            <Grid container spacing={2} sx={{my:3}}>
                {
                    bookings.map(booking => <Booking 
                        setBookingSuccess={setBookingSuccess} 
                        key={booking.id} 
                        date={dateValue} 
                        booking={booking}>

                        </Booking> )
                }
            </Grid>
        </Container>
    )
}

export default AvailAbleAppoinment
