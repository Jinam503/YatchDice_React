import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color:pink;
  font-size:40px;
  height:700px; 
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;
const StartButton = styled.div`
  width:100px;
  height:50px;
  border-radius: 8px;
  background-color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor: pointer;
`;
const Logo = styled.img`
  width:200px;
  height:200px;
  margin-bottom:40px;
`;

const Index = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/c/c4/2-Dice-Icon.svg" alt="img" />
        YATCH DICE
        <StartButton onClick={()=>navigate("/game")}>
          시작
        </StartButton>
      </Container>
    </div>
  );
};

export default Index;