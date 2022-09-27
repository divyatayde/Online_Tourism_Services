package com.app.entities;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long userId;
	@Column(name="first_name",length = 20,nullable = false)
	private String firstName;
	@Column(name="last_name", length = 20, nullable = false)
	private String lastName;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@Column(name="dob")
	private Date dob;
	@Column(name="mobile",length = 20)
	private String mobile;
	@Column(name="gender")
	private String gender;
	@Column(name="email",unique = true, length = 20, nullable = false)
	private String email;
	@Column(name = "password", length = 255,nullable = false)
	private String password;
	@Column(name="address")
	private String address;
	@Column(name="is_host")
	private boolean isHost;
	@Column(name="id_proof_no")
	private int idProofNo;
	@Column(name="id_proof_img")
	private String idProofImg;
	@Column(name="profile_pic")
	private String profilePic;
	@Column(name="user_status")
	private String userStatus;
	@Column(name = "role")
	private String role;
     
	
	
}
