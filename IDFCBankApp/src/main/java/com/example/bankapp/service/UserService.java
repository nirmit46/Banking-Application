package com.example.bankapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.bankapp.model.UserModel;
import com.example.bankapp.repository.UserRepo;

@Service
public class UserService {
	@Autowired
	private UserRepo userRepo;
	
	public String forgotpassword(String accNo,String email,String password) {
		if(userRepo.existsById(accNo)) {
			if(userRepo.findById(accNo).get().getEmail().equals(email)) {
				UserModel m= userRepo.findById(accNo).get();
				m.setPassword(password);
				userRepo.save(m);
				return "Password Updated Successfully";
			}
			else {
				return "Email does not match with the account number";
			}
		}
		else {
			return "Account not found";
		}
	}
	
	public String createuser(UserModel user) {
		if(!userRepo.existsById(user.getAccNo())) {
		userRepo.save(user);
		return "User Created";
		}
		else {
		return "Account Already Exists";
	}}
	
	public List<UserModel> getuser() {
		return userRepo.findAll();
	}
	
	public UserModel viewbalance(String accNo) {
		if(userRepo.existsById(accNo)) {
		return userRepo.findById(accNo).get();
	}
		else {
			return null;
		}
}}
