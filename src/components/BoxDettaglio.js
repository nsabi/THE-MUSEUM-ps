import React from 'react';
import Swiper from './Swiper'

export const BoxDettaglio = ({ clearDettaglio, boxz }) => {

  return (
    <div className="ps-content__dettaglio" id="boxdettaglio">
      <div className="ps-content__dettaglio__content">
        <button onClick={clearDettaglio} className="ps-content__dettaglio__close"><span className="ps-hide">Chiudi</span></button>
        <div className="ps-content__dettaglio__title">{boxz.title}</div>
        <div className="ps-content__dettaglio__description">{boxz.description}</div>
      </div>
      <div className="ps-swiper__container">
        <Swiper sliders={boxz.img} />
      </div>
    </div>

  );
}