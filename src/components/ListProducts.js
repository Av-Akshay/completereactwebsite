import React from 'react'
import styled from 'styled-components';
import FormatePrice from '../helpers/FormatePrice';
import { NavLink } from 'react-router-dom';
import { Button } from "./Button"

const ListProducts = (curElm) => {

    return (
        <Wrapper>
            <div className="card grid grid-two-column">
                <figure style={{ display: "flex", alignItems: "center", justifyContent: "Center" }}>
                    <img src={curElm?.image} alt={curElm?.name} style={{ width: "100%" }} />
                </figure>
                <div className="card-data">
                    <h3>{curElm?.name}</h3>
                    <p><FormatePrice price={curElm?.price} /></p>
                    <p>{curElm?.description.slice(0, 90)}....</p>
                    <NavLink to={`/singleproduct/${curElm.id}`}>
                        <Button className="btn">
                            Read More
                        </Button>
                    </NavLink>
                </div>
            </div>

        </Wrapper>
    )
};
const Wrapper = styled.section`
figure{
    position: relative;
    &::after{
    content: " ";
    width:0;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    left:0;
    top: 0;
    position: absolute;
    transition: all 0.3s linear;
    }
    &:hover::after{
        width: 100%;
    }
    img{
        width:100%;
        height:100%;
        transition: all 0.3s linear;
        position: absolute;
    }
    img:hover{
        transform: scale(1.1);
    }
}

.card{
    border: solid 0.1rem #000;
    padding: 2rem;
}
.card-data{
    display: flex;
    flex-direction: column;
    // gap: 1rem;
    justify-content: space-between;
}
.btn{
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s linear;
    color: #000;
    &:hover{
        background-color: rgb(98 84 243);
    }
}

`

export default ListProducts