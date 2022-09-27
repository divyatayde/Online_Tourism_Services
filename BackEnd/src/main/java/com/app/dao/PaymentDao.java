package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Payments;

public interface PaymentDao extends JpaRepository<Payments, Long>{
//	Payments savePayment(Payments payment);
//	Payments findPaymentById(long id);
}
