import React from 'react';
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

const BookingModal = ({ modalOpen, booking, handleModalClose, date }) => {
    const {user}  = useAuth()

    const handleBookingSubmit = e => {
        e.preventDefault();
        handleModalClose();
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
                                label="Your Name"
                                id="outlined-size-small"
                                defaultValue="Name"
                                size="small"
                                sx={{ width: '100%', my: 2 }}
                            />
                            <TextField
                                label="Appoinment Time"
                                id="outlined-size-small"
                                defaultValue={booking.time}
                                size="small"
                                disabled
                                sx={{ width: '100%', my: 2 }}
                            />
                            <TextField
                                label="Your Email"
                                id="outlined-size-small"
                                defaultValue={user?.email}
                                size="small"
                                disabled
                                sx={{ width: '100%', my: 2 }}
                            />
                            <TextField
                                label="Your Phone Number"
                                id="outlined-size-small"
                                size="small"
                                sx={{ width: '100%', my: 2 }}
                            />
                            <TextField
                                label="Appoinment Date"
                                id="outlined-size-small"
                                size="small"
                                disabled
                                defaultValue={date}
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
