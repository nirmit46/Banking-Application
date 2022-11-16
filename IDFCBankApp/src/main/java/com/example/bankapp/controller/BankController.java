package com.example.bankapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bankapp.model.TransactionModel;
import com.example.bankapp.model.UserModel;
import com.example.bankapp.service.TransactionService;
import com.example.bankapp.service.UserService;

@RestController
//@CrossOrigin("*")
public class BankController {
@Autowired
private TransactionService tService;
@Autowired
private UserService uService;

@PostMapping("/create")
public String newacc(@RequestBody UserModel user) {
	return uService.createuser(user);
}

@GetMapping("/viewbalance/{accNo}")
public UserModel viewbalance(@PathVariable String accNo) {
	return uService.viewbalance(accNo);
}

@PostMapping("/deposit/{accNo}/{amount}")
public String deposit(@PathVariable String accNo,@PathVariable double amount) {
	return tService.depositamt(accNo, amount);
}

@PostMapping("/withdraw/{accNo}/{amount}")
public String withdraw(@PathVariable String accNo,@PathVariable double amount) {
	return tService.withdrawamt(accNo, amount);
}

@PostMapping("transfer/{accNo1}/{accNo2}/{amount}")
public String transfer(@PathVariable String accNo1,@PathVariable String accNo2, @PathVariable double amount) {
	
	return tService.transferamt(accNo1, accNo2, amount);
}

@GetMapping("history/{accNo}")
public List<TransactionModel> thistory(@PathVariable String accNo) {
	return tService.history(accNo);
}

@PutMapping("setpassword/{accNo}/{email}/{password}")
public String updatepassword(@PathVariable String accNo,@PathVariable String email, @PathVariable String password) {
	return uService.forgotpassword(accNo, email, password);
}
}
