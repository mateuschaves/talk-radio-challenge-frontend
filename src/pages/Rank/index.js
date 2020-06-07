import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu';

import Knight from '../../assets/icons/knight.png';
import Sword from '../../assets/icons/sword.png';

import First from '../../assets/icons/first.png';
import Second from '../../assets/icons/second.png';
import Third from '../../assets/icons/third.png';

import api from '../../services/api';

import { toast } from 'react-toastify';

import { Container, Content, Header, Icon, RankLine, Player, RankPlayerInfo, Ranking, Trophy } from './styles';

export default function Rank() {

    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        getRankData()
            .then(({ data }) => {
                setRanking(data);
            })
            .catch(() => {
                toast('Erro ao carregar o ranking ☹️', {
                    type: 'error'
                });
            })
            .finally();
    }, []);

    function getRankData() {
        return api.get('/rank/general');
    }

    function renderIcon(position) {
        switch (position) {
            case 0:
                return <Trophy src={First} />
            case 1:
                return <Trophy src={Second} />
            case 2:
                return <Trophy src={Third} />
            default:
                return <></>
        }
    }

    function renderPlayerName(name, position) {
        switch (position) {
            case 0:
                return (<RankPlayerInfo
                    marginLeft={position >= 3 ? 42 : 0}
                    fontSize={30}
                    fontWeight={'bold'}
                >
                    {name}
                </RankPlayerInfo>)
            default:
                return (
                    <RankPlayerInfo
                        marginLeft={position >= 3 ? 42 : 0}
                        fontSize={26}
                        fontWeight={700}
                    >
                        {name}
                    </RankPlayerInfo>
                )
        }
    }

    function renderKills(kills, position) {
        switch (position) {
            case 0:
                return (<RankPlayerInfo
                    marginLeft={position >= 3 ? 42 : 0}
                    fontSize={30}
                    fontWeight={'bold'}
                >
                    {kills} abates
                </RankPlayerInfo>)
            default:
                return (
                    <RankPlayerInfo
                        marginLeft={position >= 3 ? 42 : 0}
                        fontSize={26}
                        fontWeight={700}
                    >
                        {kills} abates
                    </RankPlayerInfo>
                )
        }
    }

    return (
        <Container>
            <Menu />
            <Content>
                <Header>
                    <Icon
                        src={Knight}
                    />

                    <Icon
                        src={Sword}
                    />
                </Header>
                <Ranking>
                    {
                        ranking && ranking.map((kill, position) => (
                            <RankLine>
                                <Player>
                                    {renderIcon(position)}
                                    {renderPlayerName(kill.player, position)}
                                </Player>

                                {renderKills(kill.kills, position)}
                            </RankLine>
                        ))
                    }
                </Ranking>
            </Content>
        </Container>
    )
}

