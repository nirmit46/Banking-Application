package com.example.bankapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.bankapp.model.UserModel;
@Repository
public interface UserRepo extends MongoRepository<UserModel, String> {

}
