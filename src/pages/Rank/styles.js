import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 100%;
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
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 120px;
`;

export const Icon = styled.img`
  width: 38px;
  height: 40px;
`;

export const Trophy = styled.img`
  width: 27px;
  height: 33px;
  margin-right: 15px; 
`;

export const RankLine = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 9px;
  margin-bottom: 9px;
`;

export const RankPlayerInfo = styled.label`
  color: #575C8E;
  font-size: ${props => props.fontSize | 27}px;
  letter-spacing: 0;
  font-weight: ${props => props.fontWeight | 500}px;
  text-align: left;
  margin-left: ${props => props.marginLeft | 0}px;
`;

export const Player = styled.div`
  display: flex;
  flex: 0.50;
  flex-direction: row;
`;

export const Ranking = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 900px;
  padding-top: 60px;

`;