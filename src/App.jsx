import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu_all from './component/Menu_all';
import Home from './component/Home';
import About from './component/About';
import Shop from './component/Shop';
import './App.css';

const App = ()=> {
  return (
    <div className="wrap">
      <BrowserRouter>
        <Menu_all></Menu_all>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
