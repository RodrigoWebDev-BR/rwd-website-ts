import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Switch from 'react-switch'

export const Container = styled.div ` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: fill;
    align-items: center;
    justify-content: space-around;
`
export const StyledSwitch = styled.span `
    margin: 1.75rem 2rem;
`

function Title() {
    return(
        <h1>RodrigoWebDev</h1>
    )
}

const menuListen = [
    {
        id: 1,
        link: "/",
        text: "Home"
    },
    {
        id: 2,
        link: "/#about",
        text: "Sobre"
    },
    {
        id: 3,
        link: "/#projects",
        text: "Projetos"
    },
    {
        id: 4,
        link: "/#contact",
        text: "Contato"
    }
]

const getMenu = menuListen.map((item) =>
    <li key={item.id}>
        <a href={item.link}>{item.text}</a>
    </li>
)

interface Props {
    toggleTheme(): void
}


const Header: React.FC<Props>=({ toggleTheme }) => {

    const { colors, theme } = useContext(ThemeContext)
    
    return (
        <Container> 
            <React.Fragment>
                <Title />      
                <ul>
                    {getMenu}
                </ul>
                
                <StyledSwitch>
                <Switch
                    onChange={ toggleTheme }
                    checked={ theme === 'light' }
                    checkedIcon={ false }
                    uncheckedIcon={ false }
                    height={ 30 }
                    width={ 50 }
                    handleDiameter={ 20 }
                    offColor={ colors.btnColor }
                    onColor={ colors.txt }
                    />
                </StyledSwitch>
                
            </React.Fragment>   
        </Container> 
   )
}

export default Header