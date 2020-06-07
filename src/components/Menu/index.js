import React from 'react';

import { Button } from '@material-ui/core';

import Home from '../../assets/svg/home.svg';
import Star from '../../assets/svg/start.svg';

import { Link } from 'react-router-dom';

import { ReactSVG } from 'react-svg';

import { Container } from './styles';

export default function Menu() {
    return (
        <Container>
            <Link to="/game" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Button
                    variant="outlined"
                    color="default"
                    startIcon={<ReactSVG src={Home} />}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: 360,
                        borderRadius: 15,
                        color: '#FFFFFF',
                        height: 45
                    }}
                >
                    Home
                </Button>
            </Link>

            <Link to="/ranking" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Button
                    variant="outlined"
                    color="default"
                    startIcon={<ReactSVG src={Star} />}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: 360,
                        borderRadius: 15,
                        color: '#FFFFFF',
                        height: 45,
                        marginTop: 25
                    }}
                >
                    Ranking
                </Button>
            </Link>

        </Container>
    )
}
