import React from 'react';
import Overlay from '../Carousel/Carousel'
import Count from '../Count/Count';
import ServicesCard from '../ServicesCard/ServicesCard';
import Gallery from '../Clients/Clients';

const Home = () => {
    return(
        <>
        <Overlay />
        <Count />
        <ServicesCard />
        <Gallery />
        </>
    )
}
export default Home;