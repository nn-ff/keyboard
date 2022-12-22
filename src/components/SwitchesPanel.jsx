import React, { useEffect, useState } from 'react';
import Parser from 'html-react-parser';
import { switchesArr, switchDescriptionArr } from '../utils/switches';

const SwitchesPanel = ({ switches }) => {
  const [sw, setSw] = useState('close');
  const [asd, setAsd] = useState([]);
  useEffect(() => {
    if (switches) {
      setAsd(switches);
    }
  }, [switches]);

  const switchRender = switchesArr.map((obj) => {
    const switchClass = ' switch_change';
    const switchar = asd.map((swarr) => {
      if (swarr.id == obj.id) {
        return (
          <div
            className={
              swarr.soldout == 'false'
                ? obj.class + switchClass
                : obj.class + switchClass + ' active'
            }
            key={obj.title}
            onMouseOver={() => setSw(obj.id)}
            onMouseOut={() => setSw('close')}>
            {obj.title}
          </div>
        );
      }
    });

    return switchar;
  });

  const switchDesc = switchDescriptionArr.map((obj) => {
    if (sw == obj.id) {
      return (
        <div className="product_info_container" key={obj.img}>
          <div className="product_info_title">{obj.title}</div>
          {asd.map((swarr) => {
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
          })}
          <div style={{ display: 'flex' }}>
            <img
              style={{ width: '25%', height: '30%', marginLeft: 15, marginTop: 15 }}
              src={obj.img}
              alt="img"
            />
            <div
              className="product_info_desc_property"
              style={{ fontSize: 13, marginLeft: 15, marginRight: 15 }}>
              {Parser(obj.descProperty)}
            </div>
          </div>
          <p style={{ fontSize: 13, marginLeft: 15, marginRight: 15 }}>{obj.description}</p>
        </div>
      );
    }
  });

  return (
    <div style={{ marginTop: 'auto' }}>
      <div className={sw !== 'close' ? 'product_card_info active' : 'product_card_info'}>
        <div>{switchDesc}</div>
      </div>
      <div className="switch_inner">{switchRender}</div>
    </div>
  );
};

export default SwitchesPanel;
