import React from 'react';
import { ClassNames } from '@emotion/react';
import './App.css';
import { Header } from './Components/Header';
import {Home} from './Components/Home';
import {AboutMe} from './Components/AboutMe';
import {Timeline} from './Components/Timeline';
import {Works} from './Components/Works';
import {Contact} from './Components/Contact';


function App() {
  return (
    <>
    <Header></Header>
    <Home></Home>
    <AboutMe></AboutMe>
    <Timeline></Timeline>
    <Works></Works>
    <Contact></Contact>
    </>
  );
}

export default App;
