import { Alert, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import useAuth from '../../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://polar-thicket-34206.herokuapp.com/users-data/admin', {
            method: 'PUT',
            headers: {
                'authorization' : `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make An Admin</h2>

            <form onSubmit={handleAdminSubmit} sx={{ m: 'auto' }}>
                <TextField
                    sx={{ width: '50%' }}
                    onBlur={handleOnBlur}
                    type='email'
                    label='Email' variant='standard' />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert security="success">This Email User Role as Admin</Alert>}
        </div>
    )
}

export default MakeAdmin
