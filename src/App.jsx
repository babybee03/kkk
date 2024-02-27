import React, {Component} from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Menu_all from './component/Menu_all';
import Home from './component/Home';
import About from './component/About';
import Shop from './component/Shop'


const App = ()=> {
  return {
    <div className="wrap">
    </div>
  }
}
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/경로2" element={<About/>}/>
    <Route path="/경로3" element={<Shop/>}/>
  </Routes>
</BrowserRouter>