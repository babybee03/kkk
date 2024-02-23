import React from 'react';
import styled from 'styled-components';

const Header_01 = styled.div`
    position: absolute;
    left: 0;
    top: 800px;
    width: 300px;
    height: 100px;
    line-height: 100px;
    background-color: #f90;
    font-size: 1.2rem;
    color: #333;
    text-align: center;
    transition: all 1s ease;
    
    &:hover {
        left: 100px;
        color: #fff;
        background-color: #00f;
        transition: all 1s ease;
    }
`;

export default () => (
    <Header_01>
        화면에 나오는 내용
    </Header_01>
)