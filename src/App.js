import React from 'react';
import logo from './logo.svg';
import './App.css';
import img_01 from './img_01.jpg'

import Header from "./component/Header";

function App() {
  let text_01 ='React 학습 - 자유롭게 실습';
  let text_02 = {color: "#f0f", fontSize: "15pt"};

  function 함수이름() {
    return '행복한 하루';
  }
  return(
    <div className="App">
      <div className="site_title">
        <div style={{color: '#f90', fontSize: "15pt"}}>
          App Site
        </div>
      </div>
      <div className='img_all'>
        <img src={img_01} className="img_01"></img>
      </div>
      <h4>{text_01}</h4>
      <h5 style={text_02}>맑은하늘 시원한 바람</h5>
      <h6>{함수이름()}</h6>
    </div>
      
    
  );
}
export default App;