import React from 'react';
import Allitems from '../components/Allitems';
import NewAndPopular from '../components/NewAndPopular';
import Newsitem from '../components/Newsitem';
import SmenuBottom from '../components/SmenuBottom';
import SwiperMenu from '../components/SwiperMenu';
const Home = () => {
  return (
    <>
      <SwiperMenu />
      <Newsitem />
      <Allitems />
      <SmenuBottom />
      <NewAndPopular />
    </>
  );
};

export default Home;
