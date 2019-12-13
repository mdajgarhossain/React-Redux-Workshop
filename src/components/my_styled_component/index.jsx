import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid #db7093;
    background: #efefef;
    margin-top: 20px;
    padding: 10px 20px
`;

const Heading1 = styled.h1`
    font-size: 36px;
    font-weight: 300;
    color: ${props => props.backgroundColor ? props.backgroundColor : 'tomato'}
    text-align: center;
    &:hover {
        color: green;
    }
`;

const Paragraph = styled.p`
    color: ${props => props.color ? props.color : '#db7093'}
`;


const MyStyledComponent = () => {
    return(
        <Wrapper>
            <Heading1 hoverColor='yellow' backgroundColor='blue'>Hello Styled Component!</Heading1>
            <Paragraph color='green'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi non iste numquam fuga perferendis nemo consectetur quos aliquid veniam debitis!</Paragraph>
        </Wrapper>
    );
}

export default MyStyledComponent;