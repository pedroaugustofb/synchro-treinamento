import React from 'react'
//depedencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
//Rotas
import Navbar from './components/Navbar';
import MethodController from './controllers/login/MethodController';
import UserController from './controllers/UserController';

const RouterContainer = styled.div`
display: flex;
justify-content: center;
align-items:center;
padding: 2rem;
margin-top: 5rem;
`


const NavbarRoute = ({ children } : any) => {
  return (
      <RouterContainer>
        <Navbar />
        {children}
      </RouterContainer>
  )
}

/*
const PrivateRoute = ({ children, redirectTo } : any) =>{
  const isAuthenticated = sessionStorage.getItem("UserEmail") !== null;
  return !isAuthenticated ? <Navigate to={redirectTo} />: children 
};
*/
const IsLoggedRoute = ({ children } :any) => {
  const isLogged = sessionStorage.getItem("UserEmail") !== null;
  if(isLogged){
    sessionStorage.removeItem('UserEmail')
  }
  return children
}

type Props = {}
const Router = (props: Props) => {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<IsLoggedRoute><MethodController/></IsLoggedRoute>}/>
                <Route path={'/users'} element={<NavbarRoute><UserController /></NavbarRoute>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router