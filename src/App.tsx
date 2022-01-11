import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.css';
import RoutesWrapper from './Components/Routers/Routes';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Route path="/" component={RoutesWrapper} />
      </div>
    </BrowserRouter>
  );
}

export default App;
