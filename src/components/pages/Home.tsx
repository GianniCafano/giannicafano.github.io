import React from 'react';
import styled from 'styled-components';

const Hero = styled.main`
    height: calc(100vh - 70px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeroTitle = styled.h1`
    text-align: center;
    margin-top: 0;
    font-size: 2.5em;
`;


export const Home = () => {
    return (
        <Hero>
            <HeroTitle>Hi I'm Gianni, <br></br> a Front End Developer from Peterborough, UK.</HeroTitle>
        </Hero>
    )
};
