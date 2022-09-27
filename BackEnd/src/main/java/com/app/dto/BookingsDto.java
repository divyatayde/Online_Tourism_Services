package com.app.dto;

import com.app.entities.Payments;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class BookingsDto {
	private Payments payment;
	private long userId;

}
