package com.example.bankapp.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.bankapp.model.TransactionModel;
@Repository
public interface TransactionRepo extends MongoRepository<TransactionModel, Integer> {


}
