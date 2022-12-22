import React from 'react';
import { repairListBoard, repairListMice, upgradeList } from '../utils/repairUpgradeList';
import { useDispatch } from 'react-redux';
import { setAddItem } from '../redux/slices/cartSlice';
const Repair = () => {
  const dispatch = useDispatch();
  const cartImg = 'https://cdn-icons-png.flaticon.com/512/7050/7050730.png';
  const onClickAdditem = (obj) => {
    dispatch(
      setAddItem({
        id: obj.id + 100,
        title: obj.title,
        img: cartImg,
        switch: obj.category,
        price: obj.price,
      }),
    );
  };
  return (
    <div className="item_container">
      <h1>Ремонт и апгрейд</h1>
      <h3>Ремонт клавиатуры </h3>
      <div className="list_container">
        {repairListBoard.map((obj) => {
          return (
            <div className="grid_block_container" key={obj.title}>
              <div className="repair_title">{obj.title}</div>
              <div style={{ display: 'flex' }}>
                <div className="repair_description">{obj.description}</div>
                <div onClick={() => onClickAdditem(obj)} className="repair_price">
                  {obj.price + ' P'}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Апгрейд</h3>
      <div className="list_container">
        {upgradeList.map((obj) => {
          return (
            <div className="grid_block_container" key={obj.title}>
              <div className="repair_title">{obj.title}</div>
              <div style={{ display: 'flex' }}>
                <div className="repair_description">{obj.description}</div>
                <div onClick={() => onClickAdditem(obj)} className="repair_price">
                  {obj.price + ' P'}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Ремонт мышки</h3>
      <div className="list_container">
        {repairListMice.map((obj) => {
          return (
            <div className="grid_block_container" key={obj.title}>
              <div className="repair_title">{obj.title}</div>
              <div style={{ display: 'flex' }}>
                <div className="repair_description">{obj.description}</div>
                <div onClick={() => onClickAdditem(obj)} className="repair_price">
                  {obj.price + ' P'}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Repair;
