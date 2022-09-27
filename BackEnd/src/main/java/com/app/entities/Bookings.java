package com.app.entities;


import java.util.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@Table(name = "bookings")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Bookings {
@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
@Column(name = "booking_id")
private Long bookingId;
@Temporal(TemporalType.DATE)
private Date from_date;
@Temporal(TemporalType.DATE)
private Date to_date;
private int members_count;
private double total_amount;
private String payment_status;
@ManyToOne
@JoinColumn(name = "package_id")
private Packages packages;
@ManyToOne 
@JoinColumn(name = "user_id")
private User user;
private String userName;
private String packageName;
@ManyToOne
@JoinColumn(name="paymentId")
private Payments payment;
}
