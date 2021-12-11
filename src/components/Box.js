import React, { useState } from 'react';

export const Box = ({ setDettaglio, box }) => {

  const [activeHover, setActiveHover] = useState(false);


  const clickActive = (ev) => {
    setDettaglio(ev);

  };


  return (
    <div className={'ps-content__box '} id={'box' + box.id}>


      <div className={'ps-content__box__img ' + (!activeHover ? "" : "x-activehover")} style={{ 'backgroundImage': `url(${box.img[1]})` }}  >
        <img src={box.img[0]}
          id={box.id}
          onClick={clickActive}
          onMouseEnter={() => setActiveHover(true)}
          onMouseLeave={() => setActiveHover(false)}
          alt={box.title} />
      </div>

      <div className="ps-content__box__text">
        <div className="ps-content__box__title">{box.title}</div>
        <div className="ps-content__box__data">{box.data}</div>
      </div>


    </div>
  );
}