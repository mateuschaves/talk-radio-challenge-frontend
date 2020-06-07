import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding-left: 50px;

`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const GameCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #575C8E;
  border-radius: 30px;
  box-shadow: -6px -6px 6px #FFFFFF82;
  width: 620px;
  margin-top: 80px;
  padding-top: 45px;
  padding-bottom: 30px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  text-align: left;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #FFFFFF;
`;

export const Ranking = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 145px;
`;

export const RankLine = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 9px;
  margin-bottom: 9px;
`;

export const Icon = styled.img`
  width: 27px;
  height: 33px;
  margin-right: 15px;
`

export const RankPlayerInfo = styled.label`
  color: #FFFFFF;
  font-size: 27px;
  letter-spacing: 0;
  font-weight: 500;
  text-align: left;
  margin-left: ${props => props.marginLeft | 0}px;
`;

export const Player = styled.div`
  display: flex;
  flex: 0.50;
  flex-direction: row;
`;
