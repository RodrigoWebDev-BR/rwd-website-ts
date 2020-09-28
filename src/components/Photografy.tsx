import React from 'react'
import styled from 'styled-components'

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
        <Image src ="https://lh3.googleusercontent.com/fudbCwn1YqnrG5WdXi2-xAXZ_MKPxBsIZwhjDETj6-X0Yxj6PeiYoADzuHfE4awxkpBr6j2m6Asoc6r1TzBY7jECL-7fcDV_uJdRM_xjnqha6O0i6OfKO4NBWinbq4A5poSq4AmfOgEjdmntGCYodYXd6w3_Kn-gEXjcjJg5cjG3osqf1peQlJt8a4ejgvLC-KA5yDTBoyEve6j4vBQK3rvPFcFy4p9nfher61MR-ybfrcwIgcrtV86ARm9vxnviPaMrBHc9-rjmTG7IDmELUFjvoEuuGOEyQ0XJBy7NaVwXiPs5a2fW-XIUYNdXhxN-50YKXzW-w_qpmxdZ8zYXtrzYItc7o13E1Dg62hoeIzFcI1R7LUem3mCR_-b7UC4WA_wZu4Bvcs-dag8dchFvkAV35NxKg0g-hZOqs43iYDAP5mfSt1QCs5DVxjz7wr5OK-lWfWLH8vSR2KEE3UH6A45FAZCm5qUjVtmejjhSn9t-tot3OvVVx62-vzxe5Zm-4fROrVVbEZyQk14xr-vHZlzNfcM9fTyGNzx3b4heZ-lRrh1d09kUWe3q31PRlxB30LBFsSpVsRXZ43z_VddPrmsH7wDhaY7X8pm2AWBUpBivXkTZeLrv8ptlq4GAz4qdUxcif4sDUaU7jxl6hX5AayPD1VvXBYk0uMF1VZc-lT3AmGUO7JUdCdktdeuVOA=w623-h625-no?authuser=0" alt="auto" />
    )
}