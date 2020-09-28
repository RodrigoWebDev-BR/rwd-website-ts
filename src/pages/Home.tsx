import React from 'react'

import GlobalStyled from '../assets/styles/GlobalStyled'

import Header from '../components/Header'
import Profiler from '../components/Profiler'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <React.Fragment> 
            <Header />
            <Profiler />
            <Cards />
            <Footer />
            <GlobalStyled /> 
        </React.Fragment> 
    )  
}