import React from 'react'
import Navigation from '../../Shared/Navigation/Navigation'
import AppoinmentHeader from './AppoinmentHeader/AppoinmentHeader'
import AvailAbleAppoinment from './AvailAbleAppoinment/AvailAbleAppoinment'

const Appoinment = () => { 
    const [dateValue, setDateValue] = React.useState(new Date());
    return (
        <div>
            <Navigation />
            <AppoinmentHeader dateValue={dateValue} setDateValue={setDateValue} />
            <AvailAbleAppoinment dateValue={dateValue}  /> 
        </div>
    )
}

export default Appoinment
