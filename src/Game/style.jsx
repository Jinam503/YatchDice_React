import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:700px;
  background-color:lightpink;
  margin:0 auto;
  padding:0;
`
export const DiceDiv = styled.div`
  width:400px;
  height:80px;
  background-color:lightgray;
  display:flex;
  justify-content:space-around;
  align-items:center;
  margin-top:40px;
  margin-bottom:40px;
`
export const PlayDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`
export const Dice = styled.div`
  width:70px;
  height:70px;   
`
export const BoardDiv = styled.div`
  display:flex;
  padding:0 10px;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  height:600px;
  margin-right:20px;  
  background-color:#e8e7da;
`
export const RollButton = styled.button`
  width:100px;
  height: 40px;
  background-color:lightgrey;
  color:black;
  border-radius:8px;
  border:none;
`
export const ScoreTable = styled.table`
  border-collapse: collapse;
  border: 1px solid black;
  th,
  td {
    padding: 4px;
    text-align: center;
    border: 1px solid black;
  }
`
export const DiceImg = styled.img`
  width:70px;
  height:70px;

  box-shadow:${props => props.selected ? "0 0 0 3px gold inset" : ""} ; 
  border-radius:8px;
  
`
export const FinishButton = styled.div`
  width:40px;
  height:40px;
  position:fixed;
  cursor: pointer;
  top:10px;
  background-color:white;
  border-radius:8px;
  right:10px;
  display:flex;
  justify-content:center;
  align-items:center;
`