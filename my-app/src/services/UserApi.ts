//import React from 'react'
//dependencies
import axios from 'axios'

//isLocalhost?
const isLocalhost = true;

export const baseUrl = axios.create({
    baseURL: isLocalhost ? 'http://localhost:8080' : '<aqui o link de produção>'
})

type User = {
    name: String,
    lastName: String,
    email: String,
    password: String,
    isAdmin: Boolean
}

export const UsersApi = {
    createUser: (newUser: User) => baseUrl.post('/user', newUser),
    deleteUser: (id: any) => baseUrl.delete(`/user/${id.id}`),
    loadUsers: () => baseUrl.get('/user'),
    updateUser: (updatedUser: User) => baseUrl.put('/user', updatedUser),
}