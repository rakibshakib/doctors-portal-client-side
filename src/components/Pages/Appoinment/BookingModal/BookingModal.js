import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};

const BookingModal = ({ modalOpen, booking, handleModalClose, date, setBookingSuccess }) => {
    const { user } = useAuth();
    const initialBookingInfo = { patientName: user?.displayName, email: user?.email, phone: '' }
    const [appoinmentInfo, setAppoinmentInfo] = useState(initialBookingInfo)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...appoinmentInfo }
        newInfo[field] = value;
        setAppoinmentInfo(newInfo)
    }
    const handleBookingSubmit = e => {
        e.preventDefault();
        // collect data 
        const appointment = {
            ...appoinmentInfo,
            time: booking.time,
            name: booking.name,
            date: date.toLocaleDateString()
        }
        fetch("https://polar-thicket-34206.herokuapp.com/appoinment-data", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleModalClose();
                }
            })
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modalOpen}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modalOpen}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Appoinment For {booking.name}
                        </Typography>
                        <form action="" onSubmit={handleBookingSubmit}>
                            <TextField
                                label="Appoinment Time"
                                id="outlined-size-small"
                                name='bookingTime'
                                defaultValue={booking.time}
                                size="small"
                                onBlur={handleOnBlur}
                                disabled
                                sx={{ width: '100%', my: 2 }}
                            />
                            <TextField
                                label="Your Name"
                                id="outlined-size-small"
                                name="patientName"
                                onBlur={handleOnBlur}
                                defaultValue={user?.displayName}
                                size="small"
                                sx={{ width: '100%', my: 2 }}
                            />

                            <TextField
                                label="Your Email"
                                id="outlined-size-small"
                                name="email"
                                onBlur={handleOnBlur}
                                defaultValue={user?.email}
                                size="small"

                                sx={{ width: '100%', my: 2 }}
                            />
                            <TextField
                                label="Your Phone Number"
                                id="outlined-size-small"
                                name="phone"
                                onBlur={handleOnBlur}
                                size="small"
                                sx={{ width: '100%', my: 2 }}
                            />
                            <TextField
                                label="Appoinment Date"
                                id="outlined-size-small"
                                size="small"
                                name="date"

                                disabled
                                defaultValue={date.toDateString()}
                                sx={{ width: '100%', my: 2 }}
                            />
                            <Button type='submit' sx={{ mt: 2 }} variant="contained" color="primary">Send</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default BookingModal
