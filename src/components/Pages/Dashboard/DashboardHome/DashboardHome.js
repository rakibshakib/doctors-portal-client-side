import React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../../Shared/Calender/Calender';
import Appoinments from '../Appoinments/Appoinments';

const DashboardHome = ({dateValue, setDateValue}) => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={4} >
                <Calender
                    dateValue={dateValue}
                    setDateValue={setDateValue}
                ></Calender>
            </Grid>
            <Grid item xs={12} md={8} >
                <Appoinments
                    dateValue={dateValue}
                />
            </Grid>
        </Grid>
    )
}

export default DashboardHome
