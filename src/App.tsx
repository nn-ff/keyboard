import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Keyboards from './pages/Keyboards';
import Mouses from './pages/Mouses';
import './scss/global.scss';
import Accessories from './pages/Accessories';
import Repair from './pages/Repair';
import FullItem from './pages/FullItem';
import Search from './pages/Search';
import CartModal from './components/cartModal/CartModal';
import Article from './pages/Article';
import ArticleFull from './pages/ArticleFull';
import Delivery from './pages/Delivery';
import Vacancy from './pages/Vacancy';
import TradeIn from './pages/TradeIn';
import Discount from './pages/Discount';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<FullItem />} />
        <Route path="/products/keyboards" element={<Keyboards />} />
        <Route path="/products/keyboards/:param" element={<Keyboards />} />
        <Route path="/products/mice/:param" element={<Mouses />} />
        <Route path="/products/mice" element={<Mouses />} />
        <Route path="/products/accessories" element={<Accessories />} />
        <Route path="/products/accessories/:query" element={<Accessories />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/search" element={<Search />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:param" element={<ArticleFull />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/trade-in" element={<TradeIn />} />
        <Route path="/discount" element={<Discount />} />
      </Routes>
      <CartModal />
      <Footer />
    </div>
  );
}
export default App;
