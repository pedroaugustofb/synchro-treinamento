import React, { Component } from 'react'
//files
import { UsersApi } from '../services/UserApi'
import UserView from '../views/UserView'

export type User = {
    id: Number, 
    name: String,
    lastName: String,
    email: String,
    password: String,
    isAdmin: Boolean
}

type Props = {
    
}

type State = {
    users: [User],
    loading: boolean
    modalDelete: boolean
    modalPut: boolean
    userSelected: User
}


export default class UserController extends Component<Props, State> {

    state: State = {
      users: [
        {
          id: 999,
          name: '',
          lastName: '',
          email: '',
          password: '',
          isAdmin: false,
        }

      ],
      loading: true,
      modalDelete: false,
      modalPut: false,
      userSelected: {
        id: 999,
        name: '',
        lastName: '',
        email: '',
        password: '',
        isAdmin: false,
      },
    }

    componentDidMount():void {
      UsersApi.loadUsers().then( res => {
        console.log(res)
        this.setState({
            users: res.data,
        })
      })

      this.setState({
        loading: false
      })
    }

    updateUserSelected = (user: User) => this.setState({ userSelected: user})

    onChangeModalDelete = (user: User) => this.setState({ modalDelete: !this.state.modalDelete, userSelected: user})
    onChangeModalPut = (user: User) => this.setState({ modalPut: !this.state.modalPut, userSelected: user})

    cancelModal = (type: String) => {

      if(type === 'delete') return this.setState({ modalDelete: false})
      if(type === 'put') {
        UsersApi.loadUsers().then( res => {
          this.setState({ users: res.data })
        })
        return this.setState({ modalPut: false})
      }
    }

    deleteUser = () => {
      const { users, userSelected } = this.state
        
        let newUsers: any = users.filter( (user) => user.email !== userSelected.email )

        UsersApi.deleteUser(userSelected)


        return this.setState({ modalDelete: false, users: newUsers })
    }

    updateUser = () => {
      const { users, userSelected } = this.state;

      let newUsers: any = users.map( user => {
        if(userSelected.id === user.id) return userSelected
        else return user
      })

      UsersApi.updateUser(userSelected)

      return this.setState({ modalPut: false, users: newUsers })
      
    }

  render() {
    const { loading, users, modalDelete, modalPut, userSelected } = this.state;
    return (
      <UserView
        loading={loading}
        users={users}
        modalDelete={modalDelete}
        modalPut={modalPut}
        userSelected={userSelected}
        onChangeModalDelete={this.onChangeModalDelete}
        onChangeModalPut={this.onChangeModalPut}
        cancelModal={this.cancelModal}
        deleteUser={this.deleteUser}
        updateUser={this.updateUser}
        updateUserSelected={this.updateUserSelected}
      />
    )
  }
}