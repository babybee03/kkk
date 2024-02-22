import React from 'react';
import styled from 'styled-components';

const Header_01 = styled.div`
    position: absolute;
    left: 0;
    width: 300px;
    height: 100px;
    background-color: #ddd;
    font-size: 1.2rem;
    color: #333;
    text-align: center;
    transition: 1s ease;
    
    &:hover {
        left: 50px;
        color: #fff;
        background-color: #00f;
        transition: 1s ease;
    }
`;

export default () => (
    <Header_01>
        화면에 나오는 내용
    </Header_01>
)
