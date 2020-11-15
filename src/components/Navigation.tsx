import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
    background-color: #5CDB95;
    height: 70px;
    nav {
        height: 100%;
        ul {
            margin: 0;
            list-style-type: none;
            padding-left: 0;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;

            li {
                display: flex;
                height: 100%;
                align-items: center;
                font-size: 20px;
                &:hover {
                    background-color: #05386B;
                    a {
                        color: white;
                    }
                }
                a {
                    padding: 0 1.5rem;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    font-weight: bold;
                }
            }
        }
    }
`;

export interface NavigationProps {
    paths: {
        path: string,
        name: string,
    }[],
}

export const Navigation: FC<NavigationProps> = ({ paths }) => {

    const pathLis = paths.length && paths.map((path, index) => (
        <li key={index}><Link to={path.path}>{path.name}</Link></li>
    ));

    return (
        <Header>
            <nav>
                <ul>
                    {pathLis}
                </ul>
            </nav>
        </Header>
    );
}
