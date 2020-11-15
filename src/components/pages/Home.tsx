import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const Home = () => {
    const location = useLocation();

    return (
        <main>
            <h1>Home</h1>
        </main>
    )
};
