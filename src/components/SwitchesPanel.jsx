import React, { useEffect, useState } from 'react';
import Parser from 'html-react-parser';

const switchesArr = [
  { id: 0, title: 'BR', class: 'chery_mx_brown' },
  { id: 1, title: 'R', class: 'chery_mx_red' },
  { id: 2, title: 'SR', class: 'cherry_mx_silent_red' },
  { id: 3, title: 'B', class: 'cherry_mx_blue' },
  { id: 4, title: 'BL', class: 'cherry_mx_black' },
  { id: 5, title: 'CL', class: 'cherry_mx_clear' },
  { id: 6, title: 'SS', class: 'cherry_mx_speed_silver' },
  { id: 7, title: 'SB', class: 'cherry_mx_silent_black' },
];
const SwitchesPanel = ({ switches }) => {
  const [sw, setSw] = useState('close');
  const [asd, setAsd] = useState([]);
  useEffect(() => {
    if (switches) {
      setAsd(switches);
    }
  }, [switches]);

  const swithDescriptionArr = [
    {
      id: 0,
      shortTitle: 'BR',
      description:
        'Самый популярный и универсальный вариант. Легко нажимаются и имеют тактильный отклик, хорошо подходят для печати.',
      descProperty:
        '<p>Производитель: Cherry<br>Тип: тактильный&nbsp;<br>Сила нажатия: 55 грамм (средние)<br>Длина пути: 4 мм (2 мм до срабатывания)</p>',
      title: 'Cherry MX Brown',
      img: 'https://static.insales-cdn.com/files/1/1899/17155947/original/icon-cherry-brown_0f6d349909cf352defa276d2e3803c92_1_.webp',
    },
    {
      id: 1,
      shortTitle: 'R',
      description:
        'Вторые по популярности, ход плавный и равномерный — очень удобно прожимать скилы или стрейфить. Чаще всего их берут именно геймеры.',
      descProperty:
        '<p>Производитель: Cherry<br>Тип: линейный<br>Сила нажатия: 45 грамм (лёгкие)<br>Длина пути: 4 мм (2 мм до срабатывания)</p>',
      title: 'Cherry MX Red',
      img: 'https://static.insales-cdn.com/files/1/1913/17155961/original/icon-cherry-silent-red_7aa40a585dc4ab598f1062f170396cd6_1e13c55d883b79767b19ba7e883e759b_1_.webp',
    },
    {
      id: 2,
      shortTitle: 'SR',
      description:
        'Те же Cherry MX Red, но очень тихие. Подойдут для тех, кому важно при работе с клавиатурой оставаться ниндзей. Слегка лишены романтики механики из-за менее явного нажатия.',
      descProperty:
        '<p>Производитель: Cherry<br>Тип: тихий линейный<br>Сила нажатия: 45 грамм (легкие)<br>Длина пути: 3.7 мм (1.9 мм до срабатывания)</p>',
      title: 'Cherry MX Silent Red',
      img: 'https://static.insales-cdn.com/files/1/1971/17156019/original/mx-red-silent_e68a532bdf939aec496db42af4fccff2_1_.webp',
    },
    {
      id: 3,
      shortTitle: 'B',
      description:
        'Издают громкий щелчок как олдскульная печатная машинка и дают шикарный тактильный отклик, но могут сильно раздражать своим звуком окружающих. Маст хэв для набора текста, но не так хороши для многократного прожимания одной кнопки в игре.',
      descProperty:
        '<p>Производитель: Cherry<br>Тип: кликающий<br>Сила нажатия: 60 грамм (несмотря на вес, средние)<br>Длина пути: 4 мм (2.2 мм до срабатывания)</p>',
      title: 'Cherry MX Blue',
      img: 'https://static.insales-cdn.com/files/1/1963/17156011/original/icon-cherry-blue_6abad6681d7324523cdd39265f7c65e5_1_.webp',
    },
    {
      id: 4,
      shortTitle: 'BL',
      description:
        'Равномерно тяжелое нажатие, достаточно тихие. С непривычки могут уставать руки, но для игр, где требуются быстрые и точные нажатия в течение небольших отрезков времени, а также для людей с большими руками подойдут отлично.',
      descProperty:
        '<p>Производитель: Cherry<br>Тип: линейный<br>Сила нажатия: 60 грамм (тяжёлые)<br>Длина пути: 4 мм (2 мм до срабатывания)</p>',
      title: 'Cherry MX Black',
      img: 'https://static.insales-cdn.com/files/1/1964/17156012/original/cherry_black_744d809d09f4a91ba89b3f896eee6345_1_.webp',
    },
    {
      id: 5,
      shortTitle: 'CL',
      description:
        'Более тугие и с более яркой тактильной отдачей, чем у Cherry MX Brown. Отлично подойдут тем, для кого Cherry MX Brown — слишком скучно, а Cherry MX Blue — слишком громко. Крепление толще обычного, поэтому на таких переключателях довольно тяжело и опасно менять кейкапы.',
      descProperty:
        '<p>Производитель: Cherry<br>Тип: тактильный<br>Сила нажатия: 65 грамм (тяжелые)<br>Длина пути: 4 мм (2 мм до срабатывания)</p>',
      title: 'Cherry MX Clear',
      img: 'https://static.insales-cdn.com/files/1/1970/17156018/original/clear_2b830d15c1cfb3fd83d3fcea196b8e06_1_.webp',
    },
    {
      id: 6,
      shortTitle: 'SS',
      description:
        'Очень лёгкое нажатие, похожи на Cherry MX Red, но ход укорочен. Срабатывают раньше, чем обычно, и поэтому очень популярны у геймеров. С непривычки могут возникать лишние срабатывания при печати.',
      descProperty:
        '<p>Производитель: Cherry<br>Тип: линейный<br>Сила нажатия: 45 грамм (лёгкие)<br>Длина пути: 3.4 мм (1.2 мм до срабатывания)</p>',
      title: 'Cherry MX Clear',
      img: 'https://static.insales-cdn.com/files/1/1969/17156017/original/icon-cherry-speed-silver_540920f85aea7c05caec48b7d543033f_1_.webp',
    },
    {
      id: 7,
      shortTitle: 'SB',
      description:
        'Специфические переключатели. Тяжёлые и, пожалуй, одни из самых плавных и тихих. Если сравнивать с пистолетами, то это — пистолет с глушителем. Подойдут для опытных пользователей с чётким пониманием того, какие переключатели им нравятся.',
      descProperty:
        '<p>Производитель: Cherry<br>Тип: тихий линейный<br>Сила нажатия: 60 грамм (тяжёлые)<br>Длина пути: 3.7 мм (1.9 мм до срабатывания)</p>',
      title: 'Cherry MX Clear',
      img: 'https://static.insales-cdn.com/files/1/1972/17156020/original/asdfasdfsdfcxzv_f56cdc9a878179919e34dea049e2d2e9_1_.webp',
    },
  ];

  const switchRender = switchesArr.map((obj) => {
    const switchClass = ' switch_change';
    const switchar = asd.map((swarr) => {
      if (swarr.title == obj.title) {
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

  const switchDesc = swithDescriptionArr.map((obj) => {
    if (sw == obj.id) {
      return (
        <div className="product_info_container" key={obj.img}>
          <div className="product_info_title">{obj.title}</div>
          {asd.map((swarr) => {
            if (swarr.soldout == 'true' && obj.shortTitle == swarr.title) {
              return (
                <div className="stock_button active" key={swarr.title}>
                  Нет в наличии
                </div>
              );
            } else if (swarr.soldout == 'false' && obj.shortTitle == swarr.title) {
              return (
                <div className="stock_button" key={swarr.title}>
                  В наличии
                </div>
              );
            }
          })}
          <div style={{ display: 'flex' }}>
            <img
              style={{ width: '25%', height: '30%', marginLeft: 15, marginTop: 15 }}
              src={obj.img}
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
