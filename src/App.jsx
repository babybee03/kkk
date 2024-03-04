import {useState} from 'react';
import styled from 'styled-components';
import {FaTh, FaHome, FaUserAlt, FaRegHandshake} from 'react-icons/fa';

const Menu_all = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 200px;
  line-height: 50px;
  font-size: 15pt;
  text-align: center;
  background: #f4f4f4;
`

const Nav = styled.nav`
  position: absolute;
  left: 0;
  top: 50px;
  width: 200px;
  height: 150px;
  background: #ddd;
  transition: all 0.5s;

  &:hover {
    background: #990;
    transition: all 0.5s;
  }
  &.act {
    left: -150px;
    transition: all 0.5s;
  }
`;

const Menu_01 = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #f90;
  transition: all 0.5s;

  &:hover {
    background: #333;
    color: #fff;
    transition: all 0.5s;
  }
`;

const Menu_01_text = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 150px;
  height: 50px;
`;
const Menu_01_icon = styled.div`
  position: absolute;
  left: 150px;
  top: 0;
  width: 50px;
  height: 50px;
  font-size: 15pt;
`

const Menu_02 = styled.div`
  position: absolute;
  left: 0;
  top: 50px;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #0cc;
  transition: all 0.5s;

  &:hover {
    background: #333;
    color: #fff;
    transition: all 0.5s;
  }
`;

const Menu_02_text = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 150px;
  height: 50px;
`;
const Menu_02_icon = styled.div`
  position: absolute;
  left: 150px;
  top: 0;
  width: 50px;
  height: 50px;
  font-size: 15pt;
`

const Menu_03 = styled.div`
  position: absolute;
  left: 0;
  top: 100px;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #cc0;
  transition: all 0.5s;

  &:hover {
    background: #333;
    color: #fff;
    transition: all 0.5s;
  }
`;

const Menu_03_text = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 150px;
  height: 50px;
`;
const Menu_03_icon = styled.div`
  position: absolute;
  left: 150px;
  top: 0;
  width: 50px;
  height: 50px;
  font-size: 15pt;
`

const Menu_text = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 150px;
  height: 50px;
  background: #ddd;
`;

const Menu_icon = styled.div`
  position: absolute;
  left: 150px;
  top: 0;
  width: 50px;
  height: 50px;
`
export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Menu_all>
        <Menu_text>Menu 모음</Menu_text>
        <Menu_icon onClick={(
          function(){
            setMenuOpen(menuOpen =>!menuOpen)
          }
        )}><FaTh/></Menu_icon>
      </Menu_all>
      <Nav className={menuOpen ? 'act' : ''}>
          <Menu_01>
            <Menu_01_text>Home</Menu_01_text>
            <Menu_01_icon> <FaHome/></Menu_01_icon>
          </Menu_01>
          <Menu_02>
            <menu_02_text>About</menu_02_text>
            <Menu_02_icon><FaUserAlt/></Menu_02_icon>
          </Menu_02>
          <Menu_03>
            <Menu_03_text>Contact</Menu_03_text>
            <Menu_03_icon><FaRegHandshake/></Menu_03_icon>
          </Menu_03>
      </Nav>
      
    </>
  )
}