package com.app.entities;





import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "packages")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Packages {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "package_id")
private Long packageId;
	@Column(name = "package_name", length = 20,nullable = false)
private String packageName;
	@Column(name = "city", length = 255,nullable = false)
private String city;
	@Column(name="state")
	private String state;
	
	@Column(name="country")
	private String country;
	
	@Column(name="pin_code")
	private int pinCode;
	
	@Column(name="package_type")
	private String packageType;
	
	@Column(name = "is_available")
private boolean isAvailable;
	@Column(name = "place_img" ,length = 100,nullable = true)
	private String placeImg;
	@Column(name = "price", nullable = false)
private double price;
	@Column(name = "area")
private String area;
@Transient
	private int rating;
}
