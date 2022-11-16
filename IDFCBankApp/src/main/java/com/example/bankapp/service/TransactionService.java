package com.example.bankapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bankapp.model.TransactionModel;
import com.example.bankapp.model.UserModel;
import com.example.bankapp.repository.TransactionRepo;
import com.example.bankapp.repository.UserRepo;

@Service
public class TransactionService {
@Autowired
private TransactionRepo tRepo;
@Autowired
private UserRepo userRepo;

TransactionModel m=new TransactionModel();


public String depositamt(String accNo, double amount) {
	UserModel user=userRepo.findById(accNo).get();
	m.setAmount(amount);
	m.setAccNo1(accNo);
	m.setTrnstype("Deposit");
	tRepo.save(m);
	user.setBalance(user.getBalance()+amount);
	userRepo.save(user);
	return "Amount Deposited";
	
}

public String withdrawamt(String accNo,double amount) {
	if(userRepo.findById(accNo).get().getBalance()>amount) {
	UserModel user=userRepo.findById(accNo).get();
	m.setAmount(amount);
	m.setAccNo1(accNo);
	m.setTrnstype("Withdraw");
	tRepo.save(m);
	user.setBalance(user.getBalance()-amount);
	userRepo.save(user);
	return "Amount Withdrawn";
}
	else {
		return "Insufficient Balance";
	}
	}

public String transferamt(String accNo1,String accNo2,double amount) {
	if(userRepo.existsById(accNo2)) {
		if(userRepo.findById(accNo1).get().getBalance()>amount) {
		UserModel user1=userRepo.findById(accNo1).get();
		UserModel user2=userRepo.findById(accNo2).get();
		m.setAccNo1(accNo1);
		m.setAccNo2(accNo2);
		m.setAmount(amount);
		m.setTrnstype("Transfer");
		tRepo.save(m);
		user1.setBalance(user1.getBalance()-amount);
		user2.setBalance(user2.getBalance()+amount);
		userRepo.save(user1);
		userRepo.save(user2);
		return "Transfer Successful";
	}else{
		return "Insufficient Balance";
	}
	}
	else {
		return "Receiver Account Not Found";
	}
	
}

public List<TransactionModel> history(String accNo) {
   return tRepo.findAll().stream().filter(ab->ab.getAccNo1().equals(accNo)).toList();
}


}
