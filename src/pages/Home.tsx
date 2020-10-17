import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Header from '../components/Header'
import Profiler from '../components/Profiler'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

import GlobalStyled from '../assets/styles/GlobalStyled'
import dark from '../assets/themes/Dark'
import light from '../assets/themes/Light'

export default function Home() {
    const [ theme, setTheme ] = useState(light)

    const toggleTheme = () => {
        setTheme(theme.theme === 'light' ? dark : light)
    }

    return (
        <ThemeProvider theme={theme}>             
            <Header toggleTheme={toggleTheme}/>
            <Profiler />
            <Cards />
            <Footer />  
            <GlobalStyled />
        </ThemeProvider> 
    )  
}