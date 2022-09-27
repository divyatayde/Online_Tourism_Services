package com.app.servicesImpl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.PaymentDao;
import com.app.entities.Payments;
import com.app.services.PaymentServices;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentServices
{
	@Autowired
	private PaymentDao pdao;

	@Override
	public Payments savePayment(Payments payment) {
		
		return pdao.save(payment);
	}

	@Override
	public Payments findPaymentById(long id) {
		
		return pdao.getById(id);
	}

}
