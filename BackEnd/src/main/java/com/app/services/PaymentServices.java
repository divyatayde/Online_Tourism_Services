package com.app.services;

import com.app.entities.Payments;

public interface PaymentServices {
	Payments savePayment(Payments payment);
	Payments findPaymentById(long id);
}
