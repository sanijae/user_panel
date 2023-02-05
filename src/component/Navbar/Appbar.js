import React, { useState } from 'react';
import { Brand, Hamburger, Navbar, NavItems, Navs } from './styles';
import {MdMenu,MdClose} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

export default function Appbar() {
    const [show,setshow] = useState(false)
    const navigate = useNavigate()

  return (
    <Navbar> 
        <Brand onClick={()=>navigate('/')}>Alyaros inc</Brand>
        <Navs show={show} onClick={()=>setshow(!show)}>
            <Link to='/' style={{listStyle:'none',textDecoration:'none',color:'inherit'}}>
              <NavItems>Home</NavItems>
            </Link>
            <Link to='/Projects' style={{listStyle:'none',textDecoration:'none',color:'inherit'}}>
              <NavItems>Projects</NavItems>
            </Link>
            <Link to='/Proposals' style={{listStyle:'none',textDecoration:'none',color:'inherit'}}>
              <NavItems>Proposals</NavItems>
            </Link>
            <Link to='/Topics' style={{listStyle:'none',textDecoration:'none',color:'inherit'}}>
              <NavItems>Topics</NavItems>
            </Link>
        </Navs>
        <Hamburger onClick={()=>setshow(!show)}>
          {show ? <MdClose size={'1.5em'}/>:<MdMenu size={'1.5em'}/>}
        </Hamburger>
    </Navbar>
  );
}
