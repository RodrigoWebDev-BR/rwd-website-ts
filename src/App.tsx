import React from 'react'
import { ThemeProvider } from 'styled-components'

import Home from './pages/Home'

// import dark from './assets/themes/Dark'
import light from './assets/themes/Light'

export default function App() {
  return ( 
    <ThemeProvider theme = { light }>
      <Home />  
    </ThemeProvider>
  )
}


