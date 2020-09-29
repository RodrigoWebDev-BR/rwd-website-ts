import React from 'react'
import styled from 'styled-components'
import image from '../assets/img/profile-001.jpg'

export const Image = styled.img `
	width: 500px;
	height: 500px;
	border-radius: 50%;
	margin: 1rem 2rem;
	cursor: pointer;
	transition: 1s;
	&:hover{
		border-radius: 5%;
		transition: 1s;
	}
	@media(min-width: 1441px) {
        width: 500px;
	    height: 500px;
    }
    @media(max-width: 1440px) {
       	width: 500px;
	    height: 500px;
    }
    @media(max-width: 1024px) {
    	width: 500px;
	    height: 500px; 
    }
    @media(max-width: 768px) {
     	width: 500px;
	    height: 500px;   
    }
    @media(max-width: 425px) {
     	width: 385px;
	    height: 385px;   
    }
    @media(max-width: 375px) {
        width: 350px;
	    height: 350px;
    }
    @media(max-width: 320px) {
    	width: 300px;
	    height: 300px;  
    }
`

export default function Photografy() {
    return (
        <Image src ={ image } alt="auto" />
    )
}