package com.synchro.restapi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.synchro.restapi.models.User;
import com.synchro.restapi.repositories.RepositorioUser;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    private RepositorioUser UserData;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<User>getAll(){
        return UserData.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public String saveUser(@RequestBody User user){
        UserData.save(user);
        return "Usuário salvo.";
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping
    public String updateUser(@RequestBody User user){
        if(user.getId() > 0)
            UserData.save(user);
            return "Usuário alterado.";
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id){
        UserData.deleteById(id);
        return "Usuário deletado.";
    }
}
