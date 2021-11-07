import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make An Admin</h2>

            <form onSubmit={handleAdminSubmit}>
                <TextField
                    onBlur={handleOnBlur}
                    type='email'
                    label='Email' variant='standard' />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
        </div>
    )
}

export default MakeAdmin
