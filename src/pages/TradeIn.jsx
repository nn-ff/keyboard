import React from 'react';

const TradeIn = () => {
  const formparams = [
    { id: '0', placeholder: 'Олег', title: 'Имя' },
    { id: '1', placeholder: 'example@gmail.com', title: 'Почта' },
    {
      id: '2',
      placeholder: 'Leopold FC750R BT Light Pink',
      title: 'Модель вашей клавиатуры и ее переключателей',
    },
    {
      id: '3',
      placeholder: 'Ducky One 3 TKL Yellow',
      title: 'Какая модель клавиатуры и переключателей нужна?',
    },
    { id: '4', placeholder: 'Коробка, кабель, сменный кейкапы', title: 'Комплектация клавиатуры' },
    {
      id: '5',
      placeholder: 'Использовал год, есть потертости',
      title: 'Расскажите про свою клавиатуру',
    },
  ];
  return (
    <div className="item_container">
      <div className="tradein_container" style={{ textAlign: 'center', paddingTop: 20 }}>
        <div className="tradein_title">Trade-In</div>
        <div>
          Трейд-ин — это программа, по которой вы можете сдать старую клавиатуру и получить скидку
          на новую в нашем магазине. Скидку можно получить не только на новую клавиатуру, но и на
          все аксессуары и услуги, а также подарочные сертификаты.
        </div>
        <form className="form_container">
          <div className="form_title">Как получить скидку?</div>
          <h4>Заполните форму &gt; получите оценку &gt; наслаждайтесь новой клавиатурой </h4>
          <div className="form_input_container">
            {formparams.map((obj) => {
              return (
                <div key={obj.id} className="form_item_container">
                  <input required id={obj.id} placeholder={obj.placeholder} />
                  <label for={obj.id}>{obj.title}</label>
                </div>
              );
            })}
          </div>
          <input className="submit_button" type="submit" value="Отправить" />
        </form>
      </div>
    </div>
  );
};

export default TradeIn;
