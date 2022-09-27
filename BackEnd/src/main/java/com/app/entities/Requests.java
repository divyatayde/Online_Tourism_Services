package com.app.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

	@Entity
	@Table(name="requests")
	@AllArgsConstructor
	@NoArgsConstructor
	@Getter
	@Setter
	@ToString
	public class Requests {

		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Id
		@Column(name="request_id")
		private int id;
		@Column(name="sender_id")
		private int senderId;
		@Column(name="receiver_id")
		private int receiverId;
		@Temporal(TemporalType.DATE)
		private Date from_date;
		@Temporal(TemporalType.DATE)
		private Date to_date;
		@Column(name="request_status")
		private String requestStatus;
}
