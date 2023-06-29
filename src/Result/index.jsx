import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../db'
import { addDoc, collection , doc, getDocs} from 'firebase/firestore'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Table = styled.table`
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  table-layout: fixed;
`;

const TableHeader = styled.thead`
  width: 70vw;
  background-color: pink;
  border-radius: 10px 10px 0px 0px;
`;

const Th = styled.th`
  width: 33.33vw;
  background-color: pink;
  font-size: 20px;
  font-family: 'GmarketSansMedium';
  line-height: 35px;
  text-align: left;
`;

const TableBody = styled.tbody`
  width: 70vw;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
`;

const Td = styled.td`
  width: 17.5vw;
  background-color: white;
  font-size: 15px;
  line-height: 40px;
  text-align: left;
`;
const Index = () => {
  const resultCollection = collection(db, "result");
  const [resultInfo, setResultInfo] = useState([]);

  useEffect(()=> {
    const getResultInfo = async () => {
      const data = await getDocs(resultCollection);
      console.log(data)
      setResultInfo(data.docs.map(doc=>(
        {...doc.data()}
      )))
    }
    getResultInfo();
  }, []);
  return (
    <div>
      <Container>
        <Table >
          <TableHeader>
            <tr>
              <Th></Th>
              <Th>P1</Th>
              <Th>P2</Th>
              
              <Th>Date</Th>
            </tr>
          </TableHeader>
          <TableBody>
          {
            resultInfo.map((data, index) => {
              const date = new Date(data.date * 1000);
              return(
                <tr key={data.id}>
                  <Td>{index+1}</Td>
                  <Td>{data.p1}점</Td>
                  <Td>{data.p2}점</Td>
                  <Td>2023년{date.getMonth() + 1}월 {date.getDate() + 1}일 {date.getHours()}시 {date.getMinutes()}분 {date.getSeconds()}초</Td>
                
                </tr>
              )
            })
          }
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default Index;