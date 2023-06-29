import React from 'react';
import { Route, Routes } from "react-router-dom";
import StartPage from './StartPage'
import Game from './Game'
import Result from './Result'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </div>
  );
};

export default App;