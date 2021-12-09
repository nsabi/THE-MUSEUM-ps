import React, { useState } from 'react';

export const Select = ({ namez, labelz }) => {

  const [valore, setValore] = useState("");
  const [open, setOpen] = useState(false);

  const clickActive = (ev) => {
    setValore("ddd");
  };

  const clickOpen = (ev) => {
    setOpen(!open)
  };


  return (
    <>
      <div className={'ps-select ' + (open ? "x-opened":"")} onClick={clickOpen}>
        <div  className="ps-select__content">
          <span className="ps-select__placeholder">{labelz}</span>
          <span className="ps-select__arrow"></span>
        </div>
        <ul className="ps-select__items">
          <input name={namez} type="hidden" value={valore} />
          <li className="ps-select__item" onClick={clickActive}><span>9:00</span></li>
          <li className="ps-select__item" onClick={clickActive}><span>10:00</span></li>
          <li className="ps-select__item" onClick={clickActive}><span>11:00</span></li>
          <li className="ps-select__item" onClick={clickActive}><span>12:00</span></li>
          <li className="ps-select__item" onClick={clickActive}><span>13:00</span></li>
        </ul>
      </div>
    </>
  );
}