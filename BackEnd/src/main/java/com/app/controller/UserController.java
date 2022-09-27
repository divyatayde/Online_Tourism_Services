package com.app.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.UserDao;
import com.app.dto.Credential;
import com.app.dto.Response;
import com.app.entities.*;
import com.app.services.UserServices;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {
		
		
		
		@Autowired
		private UserDao userDao;
		
		@Autowired UserServices userserv;
		
		@GetMapping("/getall")
		public ResponseEntity<?> findAll() {
			List<User> result = userDao.findAll();
			return Response.success(result);
		}
		
		@GetMapping("/getuser/{id}")
		public ResponseEntity<?> findById(@PathVariable("id") long id) {
			User result = userserv.findUserById(id);
			if(result == null)
				return Response.error("User not found");
			return Response.success(result);
		}
		
		@GetMapping("/getusername/{id}")
		public ResponseEntity<?> getUserName(@PathVariable("id") long id) {
			User result = userserv.findUserById(id);
			System.out.println(result);
			if(result == null)
				return Response.error("User not found");
			return Response.success(result.getFirstName()+" "+result.getLastName());
		}
		
		@PostMapping("/adduser")
		public ResponseEntity<?> saveuser(@RequestBody User user) {
			User existingUser  = userDao.checkIfUserExists(user.getEmail());
			if(existingUser == null)
			{
				User result = userDao.save(user);
				return Response.success(result);
			}
			return Response.error("User with this email-id already exists! try another email-id");	
		}
		
		@PutMapping("/{id}")
		public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody User user) {
			System.out.println(id);
			System.out.println(user);
			//user.setUserId(id);
			 userserv.updateUser(user);
			return Response.success(user);
		}
		
		@DeleteMapping("/deleteuser/{id}")
		public ResponseEntity<?> deleteById(@PathVariable("id") long id) {
			User user = userDao.findByuserId(id);
			if(user!=null) {
				userDao.deleteById(id);
				return Response.success(user);
			}else {
				return Response.success("User Not Found");
			}
			
			
		}
		
		
		//mark for review
		@PostMapping("/signin")
		public ResponseEntity<?> signIn(@RequestBody Credential cred) {
			System.out.println(cred);
			User user = userserv.findUserByEmailAndPassword(cred.getEmail(),cred.getPassword());
			System.out.println(user);
			if(user == null)
				return Response.error("user not found");
			return Response.success(user);
		}
		
		@PatchMapping("/toggle/{id}")
		public ResponseEntity<?> updateStatus(@PathVariable("id") int id, @RequestBody String status) {
			System.out.println(id);
			System.out.println(status);
			String res = userserv.toggleUserStatus(status, id);
			if(res != null)
				return Response.success(res);
			return Response.error("Error");
		}
		

	

}
