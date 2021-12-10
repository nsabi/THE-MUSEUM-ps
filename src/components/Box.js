import React from 'react';

export const Box = ({ setDettaglio, box }) => {



  const clickActive = (ev) => {
    setDettaglio(ev);

  };


  return (
    <div className={'ps-content__box '} id={'box' + box.id}>


      <div className="ps-content__box__img" style={{ 'backgroundImage': `url(${box.img[1]})` }}  >
        <img src={box.img[0]} id={box.id} onClick={clickActive} alt={box.title} />
      </div>

      <div className="ps-content__box__text">
        <div className="ps-content__box__title">{box.title}</div>
        <div className="ps-content__box__data">{box.data}</div>
      </div>


    </div>
  );
}