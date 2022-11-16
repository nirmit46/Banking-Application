package com.example.bankapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "User")
public class UserModel {
@Id
private String accNo;
private String username;
private String email;
private String phoneno;
private String city;
private String password;
private double balance;
}
