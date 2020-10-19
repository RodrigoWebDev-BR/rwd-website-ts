import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Share Tech', sans-serif;
        background-color: ${props => props.theme.colors.bg};
        color: ${props => props.theme.colors.txt};
    }
    a{
        text-decoration: none;
        text-align: center;
        cursor: pointer;
    }
    h1{
        font-size: 3.75rem;
        font-weight: 385;
        margin: 0.75rem 1.5rem 1.25rem 1.5rem;
        color: rgb(173, 53, 28);
        cursor: pointer;
        
        @media(max-width: 425px) {
            margin: 0.75rem 1.5rem 1.25rem 1.5rem;
        }
        @media(max-width: 375px) {
            margin-top: 2.5rem;
            margin-left: 5rem;
        }
        @media(max-width: 320px) {
            margin-top: 2.5rem;
            margin-left: 5rem;
        }
    }
    ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-basis: auto;
    }
    li{
        display: inline-block;
        font-size: 2rem;
        background-color: ${props => props.theme.colors.btnColor};
        color: ${props => props.theme.colors.btnBorder};
        border: 0.1rem solid  ${props => props.theme.colors.btnBorder};
        border-radius: 0.3rem;
        cursor: pointer;        
        width: 180px;
        text-align: center;
        margin: 0.25rem 0.75rem;
        padding: 0.5rem;
    
        @media(min-width: 1024px) {
            width: 180px;
            margin: 0.25rem 0.75rem;
            padding: 0.5rem;
        }
        @media(max-width: 768px) {
            width: 320px;
            margin: 0.25rem 1rem;
            padding: 0.5rem;
        }
        @media(max-width: 425px) {
            width: 350px;
            margin: 0.5rem 1rem 0.5rem 2rem;
            padding: 0.5rem;
        }
        @media(max-width: 375px) {
            width: 350px;
            margin: 0.5rem 1rem 0.5rem 2rem;
            padding: 1rem;
        }
        @media(max-width: 320px) {
            width: 300px;
            margin: 0.5rem 1rem 0.5rem 2rem;
            padding: 1rem;
        }
    }
    li > a{
        background-color: ${props => props.theme.colors.btnColor};
    }
    h4{
        cursor: pointer;
        background-color: ${props => props.theme.colors.card};
        color: ${props => props.theme.colors.cardTxt};
    }
    p{
        font-size: 1.25rem;
        margin-bottom: 2.75rem;
    }
    p > a{
        font-size: 1.25rem;
        margin-bottom: 2.75rem;
    }
    th, tr, td{
        border: 0.25rem groove ${props => props.theme.colors.tbBorder};
    }
` 
export default GlobalStyled

