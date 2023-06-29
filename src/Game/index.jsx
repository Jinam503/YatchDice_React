import { useState } from 'react';
import * as S from './style'
import { useNavigate } from "react-router-dom";
import { db } from '../db'
import { addDoc, collection , doc, getDocs} from 'firebase/firestore'


function Index() {
  const navigate = useNavigate();
  const [scoresP1, setScoresP1] = useState({
    aces: null,
    deuces: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null,
    bonus: null,
    choice: null,
    fourOfKind: null,
    fullHouse: null,
    sStraight: null,
    lStraight: null,
    yatch: null
  });
  const [scoresP2, setScoresP2] = useState({
    aces: null,
    deuces: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null,
    bonus: null,
    choice: null,
    fourOfKind: null,
    fullHouse: null,
    sStraight: null,
    lStraight: null,
    yatch: null
  });
  const [turn, setTurn] = useState(0);
  const [dices, setDices] = useState([0,0,0,0,0]);
  const [dicesSelected, setDicesSelected] = useState([false,false,false,false,false]);
  const [countRoll, setCountRoll] = useState(3);
  function changeDice(){
    if(countRoll <= 0)return;
    let arr = [];
    for(let i = 0; i < 5; i++){
      if(dicesSelected[i] === true){
        arr.push(dices[i]);
        continue;
      }
      arr.push(Math.floor(Math.random() * 6)+1);
    }
    setDices(arr);
    setCountRoll(countRoll-1);
  }
  function changeSelected(index){
    dicesSelected[index] = !dicesSelected[index];
    setDicesSelected([...dicesSelected]);
  }
  function resetDice(){
    setDicesSelected([false,false,false,false,false]);
    setDices([0,0,0,0,0])
    setCountRoll(3);
  }
  const scoresCheck1=[
    {
      name: "Aces",
      data1: scoresP1.aces,
      data2: scoresP2.aces,
      check: function(){
        if(countRoll === 3) return;
        let count = 0;
        
        if(turn === 0){
          for(let i = 0; i< 5; i++){
            if(dices[i] === 1) count++;
          }
          if(scoresP1.aces !== null) return;
          setScoresP1((prevState)=>({
            ...prevState,
            aces: count
          }));
        }
        else if(turn === 1){
          for(let i = 0; i< 5; i++){
            if(dices[i] === 1) count++;
          }
          if(scoresP2.aces !== null) return;
          setScoresP2((prevState)=>({
            ...prevState,
            aces: count
          }));
        }
        setTurn(turn===0? 1:0);
        resetDice();
      },
    },
    {
      name: "Deuces",
      data1: scoresP1.deuces,
      data2: scoresP2.deuces,
      check: function(){
        if(countRoll === 3) return;
        let count = 0;
        if(turn === 0){
          for(let i = 0; i< 5; i++){
            if(dices[i] === 2) count+=2;
          }
          if(scoresP1.deuces !== null) return;
          setScoresP1((prevState)=>({
            ...prevState,
            deuces: count
          }));
        }
        else if(turn === 1){
          for(let i = 0; i< 5; i++){
            if(dices[i] === 2) count+=2;
          }
          if(scoresP2.deuces !== null) return;
          setScoresP2((prevState)=>({
            ...prevState,
            deuces: count
          }));
        }
        setTurn(turn===0? 1:0);
        resetDice();
      },
    },
    {
      name: "Threes",
      data1: scoresP1.threes,
      data2: scoresP2.threes,
      check: function(){
        if(countRoll === 3) return;
        let count = 0;
        if(turn === 0){
          for(let i = 0; i< 5; i++){
            if(dices[i] === 3) count+=3;
          }
          if(scoresP1.threes !== null) return;
          setScoresP1((prevState)=>({
            ...prevState,
            threes: count
          }));
        }
        else if(turn === 1){
          for(let i = 0; i< 5; i++){
            if(dices[i] === 3) count+=3;
          }
          if(scoresP2.threes !== null) return;
          setScoresP2((prevState)=>({
            ...prevState,
            threes: count
          }));
        }
        setTurn(turn===0? 1:0);
        resetDice();
      },
    },
    {
      name: "Fours",
      data1: scoresP1.fours,
      data2: scoresP2.fours,
      check: function(){
        if(countRoll === 3) return;
        let count = 0;
        if(turn === 0){
          for(let i = 0; i< 5; i++){
            if(dices[i] === 4) count+=4;
          }
          if(scoresP1.fours !== null) return;
          setScoresP1((prevState)=>({
            ...prevState,
            fours: count
          }));
        }
        else if(turn === 1){
          for(let i = 0; i< 5; i++){
            if(dices[i] === 4) count+=4;
          }
          if(scoresP2.fours !== null) return;
          setScoresP2((prevState)=>({
            ...prevState,
            fours: count
          }));
        }
        setTurn(turn===0? 1:0);
        resetDice();
      },
    },
    {
      name: "Fives",
      data1: scoresP1.fives,
      data2: scoresP2.fives,
      check: function(){
        if(countRoll === 3) return;
        let count = 0;
        if(turn === 0){
          for(let i = 0; i< 5; i++){
            if(dices[i] === 5) count+=5;
          }
          if(scoresP1.fives !== null) return;
          setScoresP1((prevState)=>({
            ...prevState,
            fives: count
          }));
        }
        else if(turn === 1){
          for(let i = 0; i< 5; i++){
            if(dices[i] === 5) count+=5;
          }
          if(scoresP2.fives !== null) return;
          setScoresP2((prevState)=>({
            ...prevState,
            fives: count
          }));
        }
        setTurn(turn===0? 1:0);
        resetDice();
      },
    },
    {
      name: "Sixes",
      data1: scoresP1.sixes,
      data2: scoresP2.sixes,
      check: function(){
        if(countRoll === 3) return;
        let count = 0;
        if(turn === 0){
          for(let i = 0; i< 5; i++){
            if(dices[i] === 6) count+=6;
          }
          if(scoresP1.sixes !== null) return;
          setScoresP1((prevState)=>({
            ...prevState,
            sixes: count
          }));
        }
        else if(turn === 1){
          for(let i = 0; i< 5; i++){
            if(dices[i] === 6) count+=6;
          }
          if(scoresP2.sixes !== null) return;
          setScoresP2((prevState)=>({
            ...prevState,
            sixes: count
          }));
        }
        setTurn(turn===0? 1:0);
        resetDice();
      },
    },
  ]
  const sumIfFourMatching = () => {
    const uniqueValues = [...new Set(dices)];
    const leng=dices.filter(num => num === uniqueValues[0]).length;
    if (uniqueValues.length <= 2 && ((leng >= 4) || (leng <= 1))) {
      return leng >= 4 ? uniqueValues[0] * 4 : uniqueValues[1] * 4;
    }
    return 0;
  };
  const sumIfFullHouse = () => {
    const uniqueValues = [...new Set(dices)];
    const leng=dices.filter(num => num === uniqueValues[0]).length;
    if (uniqueValues.length === 2 && (leng === 3 || leng === 2)) {
      return 25;
    }
    return 0;
  };
  const sumIfSmall = () => {
    const v = dices;
    const uniqueValues = [...new Set(v.sort())];
    console.log(uniqueValues);
    if (uniqueValues.length >= 4) {
      for(let i = 0; i < uniqueValues.length-1; i++){
        if(uniqueValues[i]+1 !== uniqueValues[i+1])
        return 0;
      }
      return 20;
    }
    return 0;
  };
  const sumIfLarge = () => {
    const v = dices;
    const uniqueValues = [...new Set(v.sort())];
    console.log(uniqueValues);
    if (uniqueValues.length === 5) {
      for(let i = 0; i < 4; i++){
        if(uniqueValues[i]+1 !== uniqueValues[i+1])
        return 0;
      }
      return 30;
    }
    return 0;
  };
  const sumIfYatch = () => {
    const v = dices;
    const uniqueValues = [...new Set(v.sort())];
    console.log(uniqueValues);
    if (uniqueValues.length === 1) {
      return 50;
    }
    return 0;
  };
  const scoresCheck2=[
    {
      name: "Choice",
      data1: scoresP1.choice,
      data2: scoresP2.choice,
      check: function(){
        if(countRoll === 3) return;
        let count = 0;
        
        if(turn === 0){
          for(let i = 0; i< 5; i++){
            count += dices[i];
          }
          if(scoresP1.choice !== null) return;
          setScoresP1((prevState)=>({
            ...prevState,
            choice: count
          }));
        }
        else if(turn === 1){
          for(let i = 0; i< 5; i++){
            count += dices[i];
          }
          if(scoresP2.choice !== null) return;
          setScoresP2((prevState)=>({
            ...prevState,
            choice: count
          }));
        }
        setTurn(turn===0? 1:0);
        resetDice();
      },
    },
    {
      name: "4 of Kind",
      data1: scoresP1.fourOfKind,
      data2: scoresP2.fourOfKind,
      check: function(){
        if(countRoll === 3) return;
        if(turn === 0){
          if(scoresP1.fourOfKind !== null) return;
          setScoresP1((prevState)=>({
            ...prevState,
            fourOfKind: sumIfFourMatching()
          }));
        }
        else if(turn === 1){
          if(scoresP2.fourOfKind !== null) return;
          setScoresP2((prevState)=>({
            ...prevState,
            fourOfKind: sumIfFourMatching()
          }));
        }
        setTurn(turn===0? 1:0);
        resetDice();
      },
    },
    {
      name: "Full House",
      data1: scoresP1.fullHouse,
      data2: scoresP2.fullHouse,
      check: function(){
        if(countRoll === 3) return;
        if(turn === 0){
          if(scoresP1.fullHouse !== null) return;
          setScoresP1((prevState)=>({
            ...prevState,
            fullHouse: sumIfFullHouse()
          }));
        }
        else if(turn === 1){
          if(scoresP2.fullHouse !== null) return;
          setScoresP2((prevState)=>({
            ...prevState,
            fullHouse: sumIfFullHouse()
          }));
        }
        setTurn(turn===0? 1:0);
        resetDice();
      },
    },
    {
      name: "S. Straight",
      data1: scoresP1.sStraight,
      data2: scoresP2.sStraight,
      check: function(){
        if(countRoll === 3) return;
        if(turn === 0){
          if(scoresP1.sStraight !== null) return;
          setScoresP1((prevState)=>({
            ...prevState,
            sStraight: sumIfSmall()
          }));
        }
        else if(turn === 1){
          if(scoresP2.sStraight !== null) return;
          setScoresP2((prevState)=>({
            ...prevState,
            sStraight: sumIfSmall()
          }));
        }
        setTurn(turn===0? 1:0);
        resetDice();
      },
    },
    {
      name: "L. Straight",
      data1: scoresP1.lStraight,
      data2: scoresP2.lStraight,
      check: function(){
        if(countRoll === 3) return;
        if(turn === 0){
          if(scoresP1.lStraight !== null) return;
          setScoresP1((prevState)=>({
            ...prevState,
            lStraight: sumIfLarge()
          }));
        }
        else if(turn === 1){
          if(scoresP2.lStraight !== null) return;
          setScoresP2((prevState)=>({
            ...prevState,
            lStraight: sumIfLarge()
          }));
        }
        setTurn(turn===0? 1:0);
        resetDice();
      },
    },
    {
      name: "Yatch",
      data1: scoresP1.yatch,
      data2: scoresP2.yatch,
      check: function(){
        if(countRoll === 3) return;
        if(turn === 0){
          if(scoresP1.yatch !== null) return;
          setScoresP1((prevState)=>({
            ...prevState,
            yatch: sumIfYatch()
          }));
        }
        else if(turn === 1){
          if(scoresP2.yatch !== null) return;
          setScoresP2((prevState)=>({
            ...prevState,
            yatch: sumIfYatch()
          }));
        }
        setTurn(turn===0? 1:0);
        resetDice();
      },
    },
  ]
  const keysToSum = ['aces', 'deuces', 'threes', 'fours', 'fives', 'sixes'];
  const totalScore1 = keysToSum.reduce((acc, key) => {
    if (Number.isInteger(scoresP1[key])) {
      return acc + scoresP1[key];
    }
    return acc;
  }, 0);
  const totalScore2 = keysToSum.reduce((acc, key) => {
    if (Number.isInteger(scoresP2[key])) {
      return acc + scoresP2[key];
    }
    return acc;
  }, 0);
  const totalScoreP1 = Object.values(scoresP1).reduce((acc, value) => {
    if (Number.isInteger(value) && value !== null) {
      return acc + value;
    }
    return acc;
  }, 0);
  const totalScoreP2 = Object.values(scoresP2).reduce((acc, value) => {
    if (Number.isInteger(value) && value !== null) {
      return acc + value;
    }
    return acc;
  }, 0);
  const resultCollection = collection(db,"result");
  const saveFirebase = async () =>{
    await addDoc(resultCollection,{
      date: new Date(),
      p1:totalScoreP1 + (totalScore1>=63 ? 35 : 0),
      p2:totalScoreP2 + (totalScore2>=63 ? 35 : 0)
    });
    alert('기록 완료');
    navigate('/result');
  }

  return (
    <S.Container>
      <S.BoardDiv>
        <S.ScoreTable>
          <thead>
            <tr>
              <th style={{
                width:"100px"
              }}>Categories</th>
              <th style={{
                width:"50px"
              }}>P1</th>
              <th style={{
                width:"50px"
              }}>P2</th>
            </tr>
          </thead>
          <tbody>
            {scoresCheck1.map((scores)=>
              <tr>
                <td>{scores.name}</td>
                <td onClick={()=>scores.check()}>{scores.data1}</td>
                <td onClick={()=>scores.check()}>{scores.data2}</td>
              </tr>
            )}
            <tr>
              <td>SubTotal</td>
              <td>{totalScore1}/63</td>
              <td>{totalScore2}/63</td>
            </tr>
            <tr>
              <td>+35 Bonus</td>
              <td>{totalScore1>=63 ? "+35" : null}</td>
              <td>{totalScore2>=63 ? "+35" : null}</td>
            </tr>
          </tbody>
        </S.ScoreTable>
        Bonus if 1 ~ 6 are over 63 points
        <S.ScoreTable>
          <thead>
              <th style={{
                width:"100px"
              }}>Categories</th>
              <th style={{
                width:"50px"
              }}>P1</th>
              <th style={{
                width:"50px"
              }}>P2</th>
          </thead>
          <tbody>
            {scoresCheck2.map((scores)=>
              <tr>
                <td>{scores.name}</td>
                <td onClick={()=>scores.check()}>{scores.data1}</td>
                <td onClick={()=>scores.check()}>{scores.data2}</td>
              </tr>
            )}
            <tr>
              <td style={{padding:'12px'}}><b>Total</b></td>
              <td>{totalScoreP1 + (totalScore1>=63 ? 35 : 0)}</td>
              <td>{totalScoreP2 + (totalScore2>=63 ? 35 : 0)}</td>
            </tr>
          </tbody>
        </S.ScoreTable>
      </S.BoardDiv>
      <S.PlayDiv>
        <b>P{turn+1} turn</b>
        <S.DiceDiv>
        {dices.map((dice, index) =>(
          <S.Dice>
            <S.DiceImg src={`images/dice${dice}.png`} selected={dicesSelected[index]} onClick={()=> changeSelected(index)}></S.DiceImg>
          </S.Dice>
        ))}
        </S.DiceDiv>
        <b>RollCount - {countRoll}</b>
        <S.RollButton onClick={()=>changeDice()}>
          Roll
        </S.RollButton>
        
        <S.FinishButton onClick={()=>navigate("/")}>
          <b>x</b>
        </S.FinishButton>
      </S.PlayDiv>
      <S.RollButton onClick={()=>saveFirebase()} style={{
        marginLeft:"30px"
      }}>
          Save 
        </S.RollButton>
      
    </S.Container>
  );
}

export default Index;
