package com.synchro.restapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.synchro.restapi.models.User;

public interface RepositorioUser extends JpaRepository<User,Long>{
    
}
