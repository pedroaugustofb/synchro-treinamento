import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavbarContainer = styled.div`
position: fixed;
height: 5rem;
z-index: 997;
left: 0;
top: 0;
width: 100%;
padding: 0 2rem;
background-color: #fff;
transition: left .2s;
display: flex;
justify-content: center;S
align-items: center;
box-shadow: 0 3px 5px rgb(0 0 0 / 2%), 0 0 2px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 8%);
`

const NavbarTitle = styled.span`
color: #212121;
font-size: 1.5rem;
font-weight: 500;
display: flex;
align-items: center;
`

const Sair = styled.button`
position: fixed;
right: 0;
margin: 2rem;
color: #212121;
font-size: 1.5rem;
font-weight: 500;
display: flex;
align-items: center;
border: none;
background: transparent;
:hover{
  cursor: pointer;
}
`


const Navbar = () =>{
  return (
    <>
    <NavbarContainer>
        <NavbarTitle>
            Banco de Usuários
        </NavbarTitle>
        
        <Link to='/'>
        <Sair style={{fontSize: '1rem'}}>
            Sair
        </Sair>
        </Link>
    </NavbarContainer>
    </>
  )
}

export default Navbar