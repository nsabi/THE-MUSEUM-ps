import React, { useState, useEffect } from 'react';
import { Box } from '../components/Box';
import { BoxDettaglio } from '../components/BoxDettaglio';
import { Select } from '../components/Select';
import jsonData from "../file.json";


export const Content = () => {

  const [boxs, setBoxs] = useState(jsonData);
  const [boxdettaglio, SetBoxdettaglio] = useState([]);
  const [hasmore, SetHasmore] = useState([]);
  const [loading, SetLoading] = useState(true);


  useEffect(() => {
    if (document.getElementById('boxdettaglio') !== null)
      document.getElementById('boxdettaglio').scrollIntoView({ behavior: 'smooth' });
    SetLoading(false);
    return () => {

    }
  }, [boxs, boxdettaglio])

  const loadMore = (ev) => {
    SetLoading(true);
    let newBox = boxs.concat(jsonData);

    setTimeout(function () {
      setBoxs(newBox);
      SetHasmore(false);
    }, 300);

  }
  const setDettaglio = (ev) => {
    SetBoxdettaglio(jsonData.filter(t => parseInt(t.id) === parseInt(ev.target.id)));


    let i = 0;
    for (i = 0; i < document.getElementsByClassName("ps-content__box x-active").length; i++) {
      document.getElementsByClassName("ps-content__box x-active")[i].classList.remove("x-active");
    }
  };
  const clearDettaglio = () => {
    SetBoxdettaglio("");
    document.getElementById("content").scrollIntoView({ behavior: 'smooth' });
    let i = 0;
    for (i = 0; i < document.getElementsByClassName("ps-content__box x-active").length; i++) {
      document.getElementsByClassName("ps-content__box x-active")[i].classList.remove("x-active");
    }

  };

  return (
    <div className="ps-content" id="content">
      <div className="ps-content__search">
        <div className="ps-content__search__title">
          Title
        </div>
        <div className="ps-content__search__select">
          <p className="ps-content__search__select__label">Label</p>
          <Select namez="nome" labelz="label" />
        </div>
        <div className="ps-content__search__select">
          <p className="ps-content__search__select__label">Label</p>
          <Select namez="nomez" labelz="labelz" />
        </div>
      </div>
      {boxdettaglio.length ? (
        <BoxDettaglio key={boxdettaglio.id} clearDettaglio={clearDettaglio} boxz={boxdettaglio[0]} />
      ) : (
        <> </>
      )}
      <div className="ps-content__list">
        {
          boxs.map((box, index) => <Box key={index} setDettaglio={setDettaglio} box={box} />)
        }
      </div>
      {hasmore ? (
        <>{loading ? (
          <>
            <div className="ps-content__loader"><span className="ps-loader"></span></div></>
        ) : (
          <></>
        )}
          <div className="ps-content__more"><button onClick={loadMore}>load more</button></div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}