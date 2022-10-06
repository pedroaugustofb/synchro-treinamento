import React, { Component } from 'react'
//depedencies
import './styles/methodStyles.css'

//components
import { LoginContainer, ImageContainer, Divider } from './styles/Styles'
import { BottomNavigation, BottomNavigationAction  } from '@mui/material'  
import RegisterController from './RegisterController'
import LoginController from './LoginController'

type Props = {}

type State = {
  isRegister: Boolean,
}

export default class MethodController extends Component<Props, State> {
  state = {
    isRegister: false
  }


  render() {
    const { isRegister } = this.state;
    return (
      <Divider>
        <ImageContainer>

        </ImageContainer>
        <LoginContainer>
          <BottomNavigation
            showLabels
            value={isRegister}
            onChange={(event, newValue) => this.setState({ isRegister: newValue }) }
            style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}
          >
            <BottomNavigationAction label="Login" style={{ fontWeight: 'bold' }} />
            <BottomNavigationAction label="Register" style={{ fontWeight: 'bold' }} />
          </BottomNavigation>
          {
            isRegister ? (
              <RegisterController />
            ) :
            (
              <LoginController />
            )
          }
        </LoginContainer>
      </Divider>
    )
  }
}