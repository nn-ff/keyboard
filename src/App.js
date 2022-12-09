import React from 'react';
import Allitems from './components/Allitems';
import Header from './components/Header';
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
    </div>
  );
}
export default App;
