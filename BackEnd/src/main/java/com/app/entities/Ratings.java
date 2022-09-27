package com.app.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@Table(name = "ratings")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Ratings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "rating_id")
private Long ratingId;
	@Column(name = "user_id")
	private long userId;
	@Column(name = "package_id")
private long packageId;
	
	@Column(name="rating")
	private int rating;
}
