import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Appoinments = ({ dateValue }) => {
  const { user, token } = useAuth();
  const [appoinments, setAppoinments] = useState([]);

  useEffect(() => {
    const url = `https://polar-thicket-34206.herokuapp.com/appoinmets-all-data?email=${
      user.email
    }&date=${dateValue.toLocaleDateString()}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAppoinments(data));
  }, [dateValue, user.email, token]);
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
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">
                  {row.payment ? (
                    "Paid"
                  ) : (
                    <Link to={`/dashboard/payment/${row._id}`}>
                      <Button variant="contained">Pay</Button>
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appoinments;
