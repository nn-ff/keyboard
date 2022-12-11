import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import Keyboards from './pages/Keyboards';
import Mouses from './pages/Mouses';
import { fetchGlobal } from './redux/slices/fetchGlobalSlice';

import './scss/global.scss';
import Accessories from './pages/Accessories';
import Repair from './pages/Repair';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getALL() {
      dispatch(fetchGlobal({}));
    }
    getALL();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="keyboards" element={<Keyboards />} />
        <Route path="keyboards/:size" element={<Keyboards />} />
        <Route path="keyboards/:wire" element={<Keyboards />} />
        <Route path="mice/:size" element={<Mouses />} />
        <Route path="mice" element={<Mouses />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="repair" element={<Repair />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
