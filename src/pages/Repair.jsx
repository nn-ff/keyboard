import React from 'react';
import { repairListBoard, repairListMice, upgradeList } from '../utils/repairUpgradeList';

const Repair = () => {
  return (
    <div className="item_container">
      <h1>Ремонт и апгрейд</h1>
      <h3>Ремонт клавиатуры </h3>
      <div className="list_container">
        {repairListBoard.map((obj) => {
          return (
            <div className="grid_block_container">
              <div className="repair_title">{obj.title}</div>
              <div style={{ display: 'flex' }}>
                <div className="repair_description">{obj.description}</div>
                <div className="repair_price">{obj.price + ' P'}</div>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Апгрейд</h3>
      <div className="list_container">
        {upgradeList.map((obj) => {
          return (
            <div className="grid_block_container">
              <div className="repair_title">{obj.title}</div>
              <div style={{ display: 'flex' }}>
                <div className="repair_description">{obj.description}</div>
                <div className="repair_price">{obj.price + ' P'}</div>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Ремонт мышек</h3>
      <div className="list_container">
        {repairListMice.map((obj) => {
          return (
            <div className="grid_block_container">
              <div className="repair_title">{obj.title}</div>
              <div style={{ display: 'flex' }}>
                <div className="repair_description">{obj.description}</div>
                <div className="repair_price">{obj.price + ' P'}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Repair;
