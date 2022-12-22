import React from 'react';
import { switchDescriptionArr, switchesArr } from '../utils/switches';
import Parser from 'html-react-parser';
const FullItemSwitch = ({ idProduct, sw, onClickSwitch }) => {
  const switchFilter = switchesArr.filter((obj) => {
    const switchIdFilter = idProduct.switches.map((arr) => {
      if (arr.id == obj.id) {
        return true;
      } else {
        return null;
      }
    });
    return switchIdFilter.includes(true);
  });
  const fullItemSwitch = switchFilter.map((obj) => {
    const fullItemSwitchSoldOut = idProduct.switches.map((arr) => {
      if (arr.id == obj.id) {
        const selectSwitch = sw.id !== obj.id ? '' : ' select';
        return (
          <div
            onClick={() => onClickSwitch(obj, arr)}
            key={obj.title}
            className={
              arr.soldout === 'false'
                ? obj.class + ' switch_change' + selectSwitch
                : obj.class + ' switch_change' + ' active' + selectSwitch
            }>
            {obj.title}
          </div>
        );
      } else {
        return null;
      }
    });

    return fullItemSwitchSoldOut;
  });

  const switchDesc = switchDescriptionArr.map((obj) => {
    const fetchSwitchFilter = idProduct.switches.map((swarr) => {
      if (swarr.soldout == 'true' && obj.id == swarr.id) {
        return (
          <div className="stock_button active" key={swarr.id}>
            Нет в наличии
          </div>
        );
      } else if (swarr.soldout == 'false' && obj.id == swarr.id) {
        return (
          <div className="stock_button" key={swarr.id}>
            В наличии
          </div>
        );
      }
    });
    if (sw.id == obj.id) {
      return (
        <div className="product_info_container" key={obj.img}>
          <div className="product_info_title">{obj.title}</div>
          {fetchSwitchFilter}
          <div style={{ display: 'flex' }}>
            <img
              style={{ width: '15%', height: '15%', marginLeft: 15, marginTop: 15 }}
              src={obj.img}
              alt="img"
            />
            <div
              className="product_info_desc_property"
              style={{ fontSize: 13, marginLeft: 15, marginRight: 15 }}>
              {Parser(obj.descProperty)}
            </div>
          </div>
          <p style={{ fontSize: 15, marginLeft: 15, marginRight: 15 }}>{obj.description}</p>
        </div>
      );
    }
  });
  return (
    <>
      <div className="fullitem_switch_container">{fullItemSwitch}</div>
      {sw.id == 'close' ? (
        <div className="fullitem_switch_info_container">
          <div className="fullitem_switch_info alert">Выберите тип переключателей !</div>
        </div>
      ) : (
        <div className="fullitem_switch_info_container">
          <div className="fullitem_switch_info">{switchDesc}</div>
        </div>
      )}
    </>
  );
};

export default FullItemSwitch;
