import React, { Component } from 'react'
import { UsersApi } from '../../services/UserApi'

//components
import { TextField, Button } from '@mui/material'
import { User } from './RegisterController'
import { Link } from 'react-router-dom'

//styles
import { 
    FormContainer, 
    FormInputsArea,
    FormTitle,
    FlexCenter,
   } from './styles/Styles'

type Props = {}

type State = {
    email: String,
    password: String,
}

export default class LoginController extends Component<Props, State> {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    if( this.verification(password, email) ){
      let isValid = false;
      UsersApi.loadUsers().then(res => {
        console.log(res)
        res.data.forEach( (user:User) => {
          if(user.email === email){
            if(user.password === password){
              console.log('ok')
              sessionStorage.setItem('Admin', `${user.isAdmin.value}`)
              sessionStorage.setItem('UserEmail', email)
              isValid = true
              
            }
          }
        })

        if(!isValid){
          sessionStorage.removeItem('Admin')
          return sessionStorage.removeItem('UserEmail')
        }
      })
    }

  }

  verification = (password:String, email:String) => {
    let isValid = true

    if(password === '' || email === ''){
      isValid = false
      console.error('Campo(s) incorreto(s).')
    }

    return isValid
  }

  render() {

    let { email, password } = this.state;

    return (
      <FormContainer>
        <FlexCenter>
            <FormTitle>
                Bem vindo!
            </FormTitle>
        </FlexCenter>

        <FormInputsArea>
            <TextField 
            size='medium'
            fullWidth
            label="Email"
            value={email}
            onChange={ event => this.setState({ email: event.target.value })}
          />
          <TextField 
            size='medium'
            fullWidth
            type="password"
            label="Senha"
            value={password}
            onChange={ event => this.setState({ password: event.target.value })}
          />
        </FormInputsArea>

        <Link to="/users" onClick={this.handleSubmit}>
          <Button variant="outlined">Entrar</Button>
        </Link>

      </FormContainer>
    )
  }
}