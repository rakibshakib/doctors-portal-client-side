import { Grid } from '@mui/material'
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const Service = ({ service }) => {
    const { name, description, img } = service
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ 
                minWidth: 275, 
                border: 0, 
                boxShadow: 0,
                mt: 2
                }} style={{textAlign: "center"}}>
                <CardContent>
                    <CardMedia
                        component="img"
                        style={{ height: '90px', width: 'auto', margin: '0 auto' }}
                        image={img}
                        alt="green iguana"
                    />
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mt: 2, mb: 2 }}>
                        {name}
                    </Typography>
                    <Typography variant="p" sx={{ m: 2 }} color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>

        </Grid>

    )
}

export default Service
