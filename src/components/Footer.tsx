import React from 'react'
import styled from 'styled-components'
import { AiOutlineWhatsApp, AiOutlineMail, AiOutlineGithub } from 'react-icons/ai'

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`
export const StyledIcons = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
`
export const Icon = styled.h1 `
    font-size: 2.25rem;
    margin-bottom: 2.75rem;
`
const listItems = [
    {
        id: 1,
        link: "https://rodrigowebdev.com.br/",
        textLink: "rodrigowebdev.com.br"
    },
    {
        id: 2,
        link: "https://pt-br.reactjs.org/",
        text: "Website desenvolvido com ",
        textLink: "ReactJS"
    },
    {
        id: 3,
        link: "https://rodrigowebdev.com.br/",
        text: "Website criado e desenvolvido por ",
        textLink: "Rodrigo Cruz Candido"   
    }
]

const getLinks = listItems.map((item) =>
    <p key={item.id}>
        {item.text}
        <a href={item.link}>{item.textLink}</a>
    </p>
)  

const whatsApp = [{ id: 1, link: "https://wa.me/5518988171857" }]

const mail = [{ id: 1, link: "mailto:cruz213.rodrigo@outlook.com?subject=Assunto" }]

const gitHub = [{ id: 1, link: "https://github.com/RodrigoWebDev-BR"  }]

const getWhatsApp = whatsApp.map((item) =>
    <Icon key={item.id}>
        <a href={item.link} target={item.link}>
           <AiOutlineWhatsApp /> 
       </a>
    </Icon>
)

const getMail = mail.map((item) =>
    <Icon key={item.id}>
        <a href={item.link} target={item.link}>
            <AiOutlineMail />
        </a>
    </Icon>
)

const getGitHub = gitHub.map((item) =>
    <Icon key={item.id}>
        <a href={item.link} target={item.link}>
            <AiOutlineGithub/>
        </a>
    </Icon>
)

export default function Footer() {
    return (
        <Container id="contact">
            <React.Fragment>
                <StyledIcons>
                    {getMail} {getWhatsApp }  { getGitHub }
                </StyledIcons>                
                    {getLinks}
            </React.Fragment>
        </Container>
    )
}