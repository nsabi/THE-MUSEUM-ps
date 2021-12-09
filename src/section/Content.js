import React, { useState,useEffect } from 'react';
import { Box } from '../components/Box';
import { BoxDettaglio } from '../components/BoxDettaglio';
import { Select } from '../components/Select';
import jsonData from "../file.json";


export const Content = () => {

  const [boxs, setBoxs] = useState([]);
  const [boxdettaglio, SetBoxdettaglio] = useState([]);

  useEffect(() => {
    setBoxs(jsonData);
    return () => {
     
    }
  }, [boxs,boxdettaglio])

  const setDettaglio = (ev) => {
    SetBoxdettaglio(jsonData.filter(t => t.id == ev.target.id));
    let i = 0;
    for (i = 0; i <  document.getElementsByClassName("ps-content__box x-active").length; i ++) {
      document.getElementsByClassName("ps-content__box x-active")[i].classList.remove("x-active");
      }
    document.getElementById("box"+ev.target.id).classList.add("x-active");
  };
  const clearDettaglio = () => {
    SetBoxdettaglio("");

    let i = 0;
    for (i = 0; i <  document.getElementsByClassName("ps-content__box x-active").length; i ++) {
      document.getElementsByClassName("ps-content__box x-active")[i].classList.remove("x-active");
      }

  };

  return (
    <div className="ps-content">
      <div className="ps-content__search">
      <div className="ps-content__search__title">
        Title
        </div>
      <div className="ps-content__search__select"><Select namez="nome" labelz="label"  /></div>
      <div className="ps-content__search__select"><Select namez="nomez" labelz="labelz" /></div>
      </div>
        {boxdettaglio.length ? (
      <BoxDettaglio key={boxdettaglio.id} clearDettaglio={clearDettaglio} boxz={boxdettaglio[0]}/>
      ):(
        <> </>
      )}
      <div className="ps-content__list">
      {
          boxs.map(box => <Box key={box.id} setDettaglio={setDettaglio} box={box}/>)
        }
      </div>
    </div>
  );
}