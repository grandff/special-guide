import React from "react";
import { HashRouter, Route } from "react-router-dom";
import './App.css';
import Game from './routes/Game';

function App() {
  return (
    <HashRouter>
      <Route path = "/" exact={true} component={Game} />
    </HashRouter>    
  );
}

export default App;
