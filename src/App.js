import React from 'react';
import Allitems from './components/Allitems';
import Footer from './components/Footer';
import Header from './components/Header';
import NewAndPopular from './components/NewAndPopular';
import Newsitem from './components/Newsitem';
import SmenuBottom from './components/SmenuBottom';
import SwiperMenu from './components/SwiperMenu';

import './scss/global.scss';
function App() {
  return (
    <div className="App">
      <Header />
      <SwiperMenu />
      <Newsitem />
      <Allitems />
      <SmenuBottom />
      <NewAndPopular />
      <Footer />
    </div>
  );
}
export default App;
