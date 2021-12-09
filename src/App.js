import React, { useState, useEffect } from 'react';

import './App.scss';

import { Header } from './section/Header';
import { Footer } from './section/Footer';
import { Content } from './section/Content';





function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
