import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import styled from 'styled-components';


const Service = () => {
    return (
        <Wrapper>
            <div className='Container-box'>
                <div className='services-1'>
                    <div className='services-icon'><TbTruckDelivery className='icon' /></div>
                    <h3>
                        Super Fast And Free Delivery
                    </h3>
                </div>
                <div className='services-2'>
                    <div className='services-colum-2'>
                        <div className='services-icon'><MdSecurity className='icon' /></div>
                        <h3>Non - Contact Shipping</h3>
                    </div>
                    <div className='services-colum-2'>
                        <div className='services-icon'><GiReceiveMoney className='icon' /></div>
                        <h3>Money - back Guaranted</h3>
                    </div>
                </div>
                <div className='services-3'>
                    <div className='services-icon'><RiSecurePaymentFill className='icon' /></div>
                    <h3>Super Secure Payment System</h3>
                </div>
            </div>
        </Wrapper>
    )
};
const Wrapper = styled.section`



.Container-box{
    width:80%;
    height: 30rem;
    margin: 5rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.services-icon{
    height:5rem;
    width:5rem;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon {
    color:rgb(98,84,243);
    height:3rem;
    width: 3rem;
}
.services-1, .services-3{
height: 25rem;
width: auto;
border-radius: 2rem;
padding:0 2rem;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background: ${({ theme }) => theme.colors.bg};
box-shadow: 5px 5px 2px 0px rgba(0, 0, 0, 0.05) ;
h3{
    margin:1rem 0;
}
}


.services-2{
    height: 25rem;
    width: auto;
    margin: 0 0.8rem 1rem 0.8rem;
    .services-colum-2{
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding:0 2rem;        
        background: ${({ theme }) => theme.colors.bg};
        box-shadow: 5px 5px 2px 0px rgba(0, 0, 0, 0.05) ;
        height: 10rem;
        :first-child{
            margin-bottom: 5rem;
        }
    }
}
@media (max-width: 1150px){
    .Container-box{
        width:90%;
       
    }
    .services-1, .services-3{
        padding:0 2rem;
    }

    @media (max-width: 1150px){
        .services-1, .services-3{
            padding:0 1rem;
        }
    }
@media (max-width: 780px){
    .Container-box{
        flex-wrap: wrap;
        text-align: center;
        height: auto;
    }
    .services-1,.services-3{
        margin-bottom:2rem;
        width: 25rem;
    }
    .services-colum-2{
        width:25rem
    }
}
@media (max-width: 500px){
    
    .Container-box{
       flex-direction: column;
       height: auto;
    }
    .services-1,.services-3{
        width:60%;
        margin-bottom: 2rem;
        text-align: center;

    }
    .services-2{
        height: auto;
        width: 60%;
        
        .services-colum-2{
            height: 25rem;
            margin-bottom: 2rem;
            padding: 0 2rem;
            width: auto;
            text-align: center;
            :first-child{
                margin-bottom: 2rem;
            }

        }
    } 
}


`;

export default Service;