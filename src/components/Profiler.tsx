import React from 'react'
import styled from 'styled-components'

import Photografy from '../components/Photografy'
import Table from '../components/Table'

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`

export default function Profiler() {
    return (
        <Container>            
            <Photografy />
            <Table />            
        </Container> 
    )  
}
