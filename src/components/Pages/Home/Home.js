import React from 'react'
import Navigation from '../../Shared/Navigation/Navigation'
import ApoinmentBanner from './ApoinmentBanner/ApoinmentBanner'
import Banner from './Banner/Banner'
import Services from './Services/Services'

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner /> 
            <Services />
            <ApoinmentBanner />
        </div>
    )
}
export default Home
