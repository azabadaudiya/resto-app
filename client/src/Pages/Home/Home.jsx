import React from 'react'
import HeroSection from '../../Components/HeroSection.jsx';
import About from '../../Components/About.jsx';
import Qualities from '../../Components/Qualities.jsx';
import Menu from '../../Components/Menu.jsx';
import WhoAreWe from '../../Components/WhoAreWe.jsx';
import Team from '../../Components/Team.jsx';
import Footer from '../../Components/Footer.jsx';
import Reservation from '../../Components/Reservation.jsx';
const Home = () => {
    return(
        <>
        <HeroSection/>
        <About/>
        <Qualities/>
        <Menu/>
        <WhoAreWe/>
       <Team/> 
       <Reservation/>
        <Footer/>
        </>
    )
}

export default Home