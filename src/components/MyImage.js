import React, { useState } from 'react'
import styled from 'styled-components';

const MyImage = (props) => {
    const { imgs } = props;
    const [imgNumber, setimageNumber] = useState(imgs?.[0]);
    return (
        <Wrapper>

            <div className='grid '>
                {imgs?.map((curElm, index) => {
                    return (
                        <img
                            src={curElm.url}
                            alt={curElm.filename}
                            key={index}
                            className='box-image--style'
                            onClick={() => {
                                setimageNumber(curElm)
                            }} />
                    )
                })}
            </div>
            <div className="main-screen">
                <img src={imgNumber?.url} alt={imgNumber?.filename} style={{ width: "100%" }} />
            </div>


        </Wrapper>
    )
};
const Wrapper = styled.section`
display:grid;
grid-template-columns: 0.8fr 1fr;

.grid{
gap:1rem;
padding: 2rem;
}
.box-image--style{
    width:80%;
}
.box-image--style{
    width: 100%;
}
.main-screen{
    display:grid;
    place-items: center;
}
`

export default MyImage