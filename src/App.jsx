import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CoinList from './components/CoinList';
import CoinDetailPage from './components/CoinDetailPage';

function App() {

  const [coin, setCoin] = useState([]);

  const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios.get(API_URL).then(response => {
      setCoin(response.data);
      // console.log(response.data[0]);
    }).catch(err => {
      // console.log(err);
    })
  }, [])

  return (
    <div className='font-primary'>
      <Navbar />
      <Routes>
        <Route path="/" element={<CoinList coins={coin} />} />
        <Route path="/coin" element={<CoinDetailPage />}>
          <Route path=":coinId" element={<CoinDetailPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
