import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pokemon from './components/pages/Pokemon.jsx'
import Card from './components/elements/carrousel/Test';
import CountriesPage from './components/pages/CountriesPage';
import Bank from './components/pages/Bank';
import Gea from './components/pages/Gea';
import RubberDucky from './components/pages/RubberDucky';
import FramerModal from './components/elements/carrousel/Test2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />}></Route>
        <Route path='/pokemon-page' element={<Pokemon></Pokemon>}></Route>
        <Route path='/countries-page' element={<CountriesPage></CountriesPage>}></Route>
        <Route path='/bank' element={<Bank></Bank>}></Route>
        <Route path='/gea-web' element={<Gea></Gea>}></Route>
        <Route path='/rubber-ducky-with-arduino' element={<RubberDucky/>}></Route>
        <Route path='/test' element={<Card></Card>}></Route>
        <Route path='/test2' element={<FramerModal></FramerModal>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
