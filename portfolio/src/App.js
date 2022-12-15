import React from 'react';

import {About, Footer, Header, Skills, Testimonial, Work} from './container/Index';
import { Navbar } from './components/Index';
import './App.scss';
const App = () => {
  return (
    <div className='app'>
      <Navbar/>   
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonial/>
        <Footer/>

    </div> 
  );
}

export default App;

/*to reuse the componenets we are going to use higher order components */