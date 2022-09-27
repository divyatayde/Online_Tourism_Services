package com.app.services;

import java.util.List;


import com.app.entities.User;

public interface UserServices {
	public User findUserByEmailAndPassword(String email,String password);
	public User findUserById(long id);
	public List<User> findAllUsers();
	public User save(User user);
	public void updateUser(User user);
	public String toggleUserStatus(String status,long uId);
	
}
