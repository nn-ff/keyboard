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
import FullItem from './pages/FullItem';
import Search from './pages/Search';
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
        <Route path="/products/:id" element={<FullItem />} />
        <Route path="/products/keyboards" element={<Keyboards />} />
        <Route path="/products/keyboards/:size" element={<Keyboards />} />
        <Route path="/products/keyboards/:wire" element={<Keyboards />} />
        <Route path="/products/mice/:size" element={<Mouses />} />
        <Route path="/products/mice" element={<Mouses />} />
        <Route path="/products/accessories" element={<Accessories />} />
        <Route path="/products/accessories/:size" element={<Accessories />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
