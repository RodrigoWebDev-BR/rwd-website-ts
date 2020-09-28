import React from 'react'
import styled from 'styled-components'

export const Container = styled.div `
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-around;
`
export const ItemsGroup = styled.div `
    display: block;
    text-align: center;
    font-size: 1.5rem;
    background-color: ${props => props.theme.colors.card};
    color: ${props => props.theme.colors.cardTxt};
    border-radius: 10%;
    padding: 1.5rem;
    box-shadow: 0.25rem 0.75rem ${props => props.theme.colors.cardBorder};

    @media(min-width: 1024px) {
        width: 450px;
        height: 600px;
        margin: 1rem 2rem;
        margin-bottom: 2.5rem;
    }
    @media(max-width: 768px) {
        width: 450px;
        height: 600px;
        margin: 1rem 2rem;
        margin-bottom: 2.5rem;
    }
    @media(max-width: 425px) {
        width: 405px;
        height: 480px;
        margin: 1rem 2rem;
        margin-bottom: 2.5rem;
    }
    @media(max-width: 375px) {
        width: 365px;
        height: 450px;
        margin: 1rem 2rem;
        margin-bottom: 2.5rem;       
    }
    @media(max-width: 320px) {
        width: 310px;
        height: 380px;
        margin: 1rem 2rem;
        margin-bottom: 2.5rem;
     }
`
export const Image = styled.img `
    max-width: 100%;
    width: 470px;
    height: 470px;
    margin: 0.1rem;
    border-radius: 50%;
    cursor: pointer;
   
    @media(max-width: 768px) {
        max-width: 100%;
        width: 350px;
        height: 350px;
    }
    @media(max-width: 425px) {
        max-width: 100%;
        width: 315px;
        height: 315px;
    }
    @media(max-width: 375px) {
        max-width: 100%;
        width: 285px;
        height: 285px;
    }
    @media(max-width: 320px) {
        max-width: 100%;
        width: 270px;
        height: 270px;
    }
`
export const Link = styled.a `
    background-color: ${props => props.theme.colors.card};
    color: ${props => props.theme.colors.cardTxt};
`

const listenItems = [
    {
        id: 1,
        text: "UnderWorld",
        link: "https://under-world.netlify.app/",
        image: "https://lh3.googleusercontent.com/pw/ACtC-3eIgMsrn-KGXZKXAyyK4syUT3ZXIqJAaf5--o4l5GB_L0xTwWTzq_AY0gywOlwm4Y-vDdHSmhruaEoLan3lDj7yH7qX8p1ao-fXnl46_6Fj9ZSakQEDFsmi8WoLi2qe3Wqh_kyzzNDd5GNcLORfBacQ=w1114-h626-no?authuser=0"
    },
    {
        id: 2,
        text: "Karibe Drink' s",
        link: "https://karibedrinks.netlify.app/",
        image: "https://lh3.googleusercontent.com/pw/ACtC-3fYNKv99-Sw--qUECWi_7MRWQRBax55snZMN1cX7L8tuTlfviY33bfFjjZPG9azqhs8cWbSHR5K_PoMveNdpIWtQLfpdaQLrMBpWfv1P5VaZrlGC-mP8BzRuv6KYLVwY3ASNCfGTxM2_TZo_QcZOtZM=w1114-h626-no?authuser=0"
    }
]

const getListenItems = listenItems.map((item) =>
    <ItemsGroup key={item.id}>
        <Link href={item.link} target={item.link}>
            <Image src={item.image} alt="auto" />
        </Link>
        <Link href={item.link} target={item.link}>
            <h4>{item.text}</h4>
        </Link> 
    </ItemsGroup>
)

export default function Cards() {
    return (
        <Container id="projects"> 
            {getListenItems}
        </Container>
    )
   
}