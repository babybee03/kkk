import React from 'react';
import logo from './logo.svg';
import './App.css';
import './component/Header.css';
import Header_content from './component/Header';
import Index_content from "./component/Index_content";
import styles from './App.module.css';


function App() {
  return (
    <div>
      <h1 className="h1_style">css 직접 import 하기</h1>
      <p>HTML apply</p>
      <Header_content/>
      <h3 className={styles.module_css_01}>module css 내용입니다</h3>
      <h4 className=".module_css_02">module 내용 2 입니다</h4>
      <Index_content/>
      <Index_content_02/>
    </div>
  );
}

export default App;