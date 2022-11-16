package com.example.bankapp.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
@Data
@Document(collection = "Transactions")
public class TransactionModel {
	private String accNo1;
	private String accNo2;
	private String trnstype;
	private double amount;
}
