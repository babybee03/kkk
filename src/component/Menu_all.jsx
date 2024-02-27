import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Menu_all.css';

const Menu_all = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div onClick={() => { setMenuOpen(!menuOpen) }} className='btn'>
        메인메뉴 {menuOpen ? '열기' : '닫기'}
      </div>

      <nav className={menuOpen ? 'act' : ""}></nav>

                      
      <NavLink to="/">
        <div className="menu_01">Home</div>
      </NavLink>
      <NavLink to="/about">
        <div className="menu_02">About</div>
      </NavLink>
      <div className="menu_03">
        <NavLink to="/shop">
          Shop
        </NavLink>
      </div>
    </>
  );
}
export default Menu_all;