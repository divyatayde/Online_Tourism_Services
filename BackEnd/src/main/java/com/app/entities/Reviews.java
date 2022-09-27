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
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name="reviews")
public class Reviews {
	
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Id
		@Column(name="review_id")
		private long reviewId;
		
		@Column(name="user_id")
		private long userId;
		
		@Column(name="package_id")
		private long packageId;
		
		@Column(name="review")
		private String review;

	
	

}
