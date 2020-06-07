import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu';
import Search from '../../components/Search';

import Knight from '../../assets/svg/knight.svg';
import Sword from '../../assets/svg/sword.svg';

import First from '../../assets/icons/first.png';
import Second from '../../assets/icons/second.png';
import Third from '../../assets/icons/third.png';

import { ReactSVG } from 'react-svg';

import api from '../../services/api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useParams } from 'react-router-dom';

import { Container, Content, Header, GameCard, Row, Label, Ranking, RankLine, Icon, RankPlayerInfo, Player } from './styles';

export default function Game() {

    const [totalKills, setTotalKills] = useState(0);
    const [players, setPlayers] = useState([]);
    const [kills, setKills] = useState([]);
    const [gameId, setGameId] = useState();
    const [found, setFound] = useState(false);

    const [loading, setLoading] = useState(true)

    const { id } = useParams();

    useEffect(() => {
        setGameId(id);
    }, []);

    useEffect(() => {
        if (gameId)
            getGameData(gameId)
                .then(({ data }) => {
                    const { total_kills, players, kills } = data;

                    setTotalKills(total_kills);
                    setPlayers(players);
                    setKills(kills);
                    setFound(true);
                })
                .catch(error => {
                    toast('Não encontramos esse jogo ☹️', {
                        type: 'error'
                    });
                    setFound(false);
                })
                .finally(() => setLoading(false));
        else
            setFound(false);
    }, [gameId]);

    function getGameData(id) {
        return api.get(`/game/${id}`);
    }

    function renderIcon(position) {
        switch (position) {
            case 0:
                return <Icon src={First} />
            case 1:
                return <Icon src={Second} />
            case 2:
                return <Icon src={Third} />
            default:
                return <></>
        }
    }

    return (
        <Container>
            <Menu />
            <Content>
                <Header>
                    <Search
                        onChange={e => setGameId(e.target.value)}
                        onSearch={() => getGameData(gameId)}
                    />
                </Header>
                {found && (
                    <GameCard>
                        <Row>
                            <Label>Game {gameId}</Label>
                            <Label>{totalKills} abates</Label>
                        </Row>
                        <Row>
                            <ReactSVG
                                src={Knight}
                                color="#FFFFFF"
                            />
                            <ReactSVG
                                src={Sword}
                                color="#FFFFFF"
                            />
                        </Row>

                        <Ranking>
                            {
                                kills && kills.map((kill, position) => (
                                    <RankLine>
                                        <Player>
                                            {renderIcon(position)}
                                            <RankPlayerInfo
                                                marginLeft={position >= 3 ? 42 : 0}
                                            >{kill.player}</RankPlayerInfo>
                                        </Player>

                                        <RankPlayerInfo
                                        >{kill.kills}</RankPlayerInfo>
                                    </RankLine>
                                ))
                            }
                        </Ranking>
                    </GameCard>
                )}
            </Content>
        </Container>
    )
}

