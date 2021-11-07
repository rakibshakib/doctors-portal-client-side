import React, { useEffect, useState } from 'react'
import useAuth from '../../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appoinments = ({ dateValue }) => {
    const { user } = useAuth();
    const [appoinments, setAppoinments] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/appoinmets-all-data?email=${user.email}&date=${dateValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppoinments(data))
    }, [dateValue])
    return (
        <div>
            <h2>Appoinments: {appoinments.length} </h2>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, p: 1 }} aria-label="appoinments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Appoinment On</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appoinments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">Action</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Appoinments
