package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.User;

public interface UserDao extends JpaRepository<User, Long> {
	User findByuserId(Long userId);
	User findByEmail(String email);
	 
	
	@Modifying
	@Query("update User u set u.userStatus=?1 where u.userId=?2")
	int toggleUserStatus(String status,long uId);
	
	@Query("SELECT u FROM User u WHERE u.email = ?1 ") 
	User checkIfUserExists(String email);
}
