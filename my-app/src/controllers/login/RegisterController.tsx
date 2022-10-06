import React, { Component } from 'react'

//components
import { TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom';
//api
import { UsersApi } from '../../services/UserApi';

//styles
import { 
  FormContainer, 
  FormInputsArea,
  DoubleColumn,
  FormTitle,
  FlexCenter,
 } from './styles/Styles'



//types
export type User = {
  name: String,
  lastName: String,
  email: String,
  password: String,
  isAdmin: {
    label: String, 
    value: Boolean
  }, 
}
/*
const options = [
  {
    //value: true,
    label: 'Sim',
  },
  {
    //value: false,
    label: 'Não',
  },
];
*/
type Props = {}

type State = {
    name: String,
    lastName: String,
    email: String,
    password: String,
    isAdmin: {
      label: String, 
      value: Boolean
    }, 
}


export default class RegisterController extends Component<Props, State> {
  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    isAdmin: {value: false, label: 'Não'},
  }

  handleSubmit = () => {

    const { name, lastName, email, password, isAdmin } = this.state;
    let isValid = true

    if(name === '' || lastName === '' || email === '' || password === '') isValid = false

    UsersApi.loadUsers().then( res => {
      console.log(res)
      if(res.data.length > 0){
        res.data.forEach( (user:User) => {
          if(user.email === email ){
            isValid = false
            console.error('Email já cadastrado.')
          }
        })
      }


      if(isValid && this.verification(name, lastName, password, email)){
        UsersApi.createUser({
          name,
          lastName,
          email,
          password,
          isAdmin: isAdmin.value
        }).then( (res) => {
          console.log(res)
          sessionStorage.setItem('Admin', `${isAdmin.value}`)
          return sessionStorage.setItem('UserEmail', email)
          

        })
      }else {
        console.error('Campo(s) incorreto(s).')
        sessionStorage.removeItem('Admin')
        return sessionStorage.removeItem('UserEmail')
      }

    })
  }

  verification = (name: String, lastName: String, password: String, email: String) => {
    let isValid = true

    if(name === '' || lastName === '' || password === '' || email === ''){
      isValid = false
    } 

    return isValid
  }

  render() {
    
    let { name, lastName, email, password } = this.state;
    return (
      <FormContainer>
        
        <FlexCenter>
          <FormTitle>
            Realize o seu cadastro!
          </FormTitle>
        </FlexCenter>

        <FormInputsArea>
          
          <DoubleColumn>
            <TextField
              size='medium'
              fullWidth
              label="Nome"
              value={name}
              onChange={ event => this.setState({ name: event.target.value })}
            />
            <TextField 
              size='medium'
              fullWidth
              label="Sobrenome"
              value={lastName}  
              onChange={ event => this.setState({ lastName: event.target.value })}
            />
          </DoubleColumn>

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
          {
          /*
          <TextField
            select
            fullWidth
            label='Usuário é Admin?'
            value={isAdmin.label}
            onChange={ event => { 
              if(event.target.value === 'Sim')
                this.setState({ isAdmin: { value:true, label: 'Sim'} })
              else this.setState({ isAdmin: { value:false, label: 'Não'} })
            } }
          >
            {
              options.map( option => (
                  <MenuItem value={option.label} key={option.label}>
                    {option.label}
                  </MenuItem>
              ))  
            }
          </TextField>
          */
          }

            <Link to='/users' onClick={this.handleSubmit} style={{display: 'flex', justifyContent: 'center'}}>
              <Button variant="outlined">Registrar</Button>
            </Link>


        </FormInputsArea>
        
      </FormContainer>
    )
  }
}