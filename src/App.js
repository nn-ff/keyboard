import React from 'react';
import Allitems from './components/Allitems';
import Header from './components/Header';
import Newsitem from './components/Newsitem';
import SwiperMenu from './components/SwiperMenu';

import './scss/global.scss';
function App() {
  return (
    <div className="App">
      <Header />
      <SwiperMenu />
      <Newsitem />
      <Allitems />
    </div>
  );
}
export default App;
