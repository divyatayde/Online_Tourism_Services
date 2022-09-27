package com.app.servicesImpl;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserDao;
import com.app.entities.User;
import com.app.services.UserServices;

@Transactional
@Service
public class UserServiceImpl implements UserServices{


		@Autowired
		private UserDao userDao;
		
		
		public User findUserByEmailAndPassword(String email,String password) {
			User user = userDao.findByEmail(email);
			System.out.println("userfound pass = "+user);
			System.out.println("from service = "+password);
			if(user!=null) {
				return user;
			}
			System.out.println("from userService "+user);
			return null;
		}

		public User findUserById(long id) {
			Optional<User> user = userDao.findById(id);
			return user.orElse(null);
		}
		
		public List<User> findAllUsers() {
			return userDao.findAll();
			
		}

		public User save(User user) {
			return userDao.save(user);	
		}
		
		public String toggleUserStatus(String status,long uId) {
			int res = userDao.toggleUserStatus(status, uId);
			if(res > 0) {
				return "Success";
			}
			return null;
		}
        @Override
		public void updateUser(User user) {
			if(user.getPassword().equals("") || user.getPassword()==null) {
				user.setPassword(findUserById(user.getUserId()).getPassword());
			}
			userDao.save(user);
		}

		
		

	

}
