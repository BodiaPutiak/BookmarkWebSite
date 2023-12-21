import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import { PopUpProvider } from './context/PopUpContext';

function App() {
  return (
    <PopUpProvider>
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </PopUpProvider>
  )
}

export default App
