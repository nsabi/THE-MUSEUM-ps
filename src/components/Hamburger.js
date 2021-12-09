import React, { useState,useEffect } from 'react';

export const Hamburger = () => {

  const [active, setActive] = useState(false);

  useEffect(() => {
    if(active){
      document.body.classList.add("ps-modalopen");
    }else{
      document.body.classList.remove("ps-modalopen");
    }
    return () => {

    }
  })

  return (
    <>
      <div className= {'ps-hamburger '+(!active?"":"x-active")}  onClick ={()=> {setActive(!active)}}> 
        <span className="ps-hamburger__overlay__top"></span>
        <span className="ps-hamburger__overlay__middle"></span>
        <span className="ps-hamburger__overlay__bottom"></span>
      </div>
      <div className={'ps-hamburger__overlay '+(!active?"":"x-open")} >
        <nav className="ps-hamburger__overlay__menu">
          <ul>
            <li><a href="#nolink">Visita</a></li>
            <li><a href="#nolink">Cosa vedere</a></li>
            <li><a href="#nolink">chi siamo</a></li>
            <li><a href="#nolink">attività</a></li>
            <li><a href="#nolink">Agenda</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}