import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../../images/fluoride.png';
import cavity from '../../../../images/cavity.png';
import whitening from '../../../../images/whitening.png';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: "Fluoride Treatment",
        description: "Odio cupiditate ducimus incidunt consectetur ex voluptatibus voluptatum, eos dicta harum voluptates",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: "Odio cupiditate ducimus incidunt consectetur ex voluptatibus voluptatum, eos dicta harum voluptates",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: "Odio cupiditate ducimus incidunt consectetur ex voluptatibus voluptatum, eos dicta harum voluptates",
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Container style={{ textAlign: "center" }}>

                <Typography variant="h5" sx={{ mt: 1, color: 'primary.main', fontWeight: 600 }} component="div" color="text.secondary">
                    Our Services
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 2 }} component="div">
                    Service We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map(service => <Service
                        service={service}
                        key={service.name}
                    ></Service>
                    )}
                </Grid>
            </Container>
        </Box>
    )
}

export default Services
