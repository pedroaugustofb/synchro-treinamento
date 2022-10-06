import React from 'react'
//types
import { User } from '../controllers/UserController'
//components
import Loader from '../components/Loader'
import { Typography, Modal, Button, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import FingerPrint from '@mui/icons-material/Fingerprint'
//syles
import {
  UsersContainer,
  UserCard,
} from './styles'
import { DoubleColumn, FormInputsArea } from '../controllers/login/styles/Styles'

type Props = {
    loading: Boolean,
    users: [User] | null,
    modalDelete: boolean,
    modalPut: boolean,
    userSelected: User,

    onChangeModalDelete: (user: User) => void,
    onChangeModalPut: (user: User) => void, 
    cancelModal: (type: String) => void,
    deleteUser: () => void,
    updateUserSelected: (user: User) => void,
    updateUser: () => void,
}

const UserView = ({
    loading,
    users,
    modalDelete,
    modalPut,
    userSelected,
    cancelModal,
    deleteUser,
    onChangeModalDelete,
    onChangeModalPut,
    updateUser,
    updateUserSelected
}: Props) => {
  return (
    <>
      {loading ? (
        <Loader/>
      ):(
        <UsersContainer >


          <Modal open={modalPut} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px', background: '#fff', borderRadius: '1rem', flexDirection: 'column' }}>
                
              <FormInputsArea>
                <DoubleColumn>
                  <TextField 
                    size='medium'
                    fullWidth
                    label="Nome"
                    value={userSelected.name}
                    onChange={ event => {
                      userSelected.name = event.target.value
                      updateUserSelected(userSelected)
                    }}
                  />
                  <TextField 
                    size='medium'
                    fullWidth
                    label="Sobrenome"
                    value={userSelected.lastName}
                    onChange={ event => {
                      userSelected.lastName = event.target.value
                      updateUserSelected(userSelected)
                    }}
                  />
                </DoubleColumn>
                <TextField 
                  size='medium'
                  fullWidth
                  label="Email"
                  value={userSelected.email}
                  onChange={ event => {
                    userSelected.email = event.target.value
                    updateUserSelected(userSelected)
                  }}
                />
                <TextField 
                  size='medium'
                  fullWidth
                  type="password"
                  label="Senha"
                  value={userSelected.password}
                  onChange={ event => {
                    userSelected.password = event.target.value
                    updateUserSelected(userSelected)
                  }}
                />


              </FormInputsArea>
              <div>
                <Button variant="contained" startIcon={<DeleteIcon />}  onClick={ e => cancelModal('put')} style={{margin: '30px 15px'}}>
                  Cancelar
                </Button>
                <Button variant="contained" startIcon={<FingerPrint />}  onClick={ e => updateUser()} style={{margin: '30px 15px'}}>
                  Alterar
                </Button>
              </div>

            </div>
          </Modal>


           <Modal open={modalDelete} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px', background: '#fff', borderRadius: '1rem', flexDirection: 'column' }}>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{margin: '5px 10px 10px 0'}} >
                    Deseja excluir o usuário { userSelected !== null ? userSelected.name : 'Atual'}?
                  </Typography>
                <div>
                <Button variant="contained" startIcon={<DeleteIcon />}  onClick={ e => cancelModal('delete')} style={{margin: '30px 15px'}}>
                  Cancelar
                </Button>
                <Button variant="contained" startIcon={<DeleteIcon />}  onClick={ e => deleteUser()} style={{margin: '30px 15px'}}>
                  Deletar
                </Button>
                </div>
              </div>
            </Modal> 



          {
            users &&
            users.map( user => {
              return (
                <UserCard>
                  <Typography variant="h5" component="div" style={{margin: '10px 0 30px 10px'}}>
                    {user.name + ' ' + user.lastName}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{margin: '5px 10px 10px 0'}} >
                    {user.email}
                  </Typography>
                    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '3rem'}}>
                      <Button variant="contained" startIcon={<DeleteIcon />}  onClick={ e => onChangeModalDelete(user)}>
                        Delete
                      </Button>
                      <Button variant="outlined" startIcon={<FingerPrint />}  onClick={e => onChangeModalPut(user)} >
                        Alterar
                      </Button>
                    </div>
                </UserCard>
              )
            })
          }
        </UsersContainer>
      )}
      </>
  )
}

export default UserView