package com.app.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.ReviewDao;
import com.app.dto.Response;
import com.app.entities.Reviews;
import com.app.servicesImpl.ReviewServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/reviews")
public class ReviewResource {
	
		
		@Autowired
		private ReviewServiceImpl reviewServices;
		
		@Autowired
		private ReviewDao reviewDao;
		
		@GetMapping("/")
		public ResponseEntity<?> findAll() {
			List<Reviews> result = reviewDao.findAll();
			return Response.success(result);
		}
		
		@GetMapping("/{id}")
		public ResponseEntity<?> findById(@PathVariable("id") long id) {
			Reviews result = reviewServices.findReviewById(id);
			if(result == null)
				return Response.error("Review not found");
			return Response.success(result);
		}
		
		@PostMapping("/addreview")
		public ResponseEntity<?> save(@RequestBody Reviews reviews) {
			Reviews result = reviewDao.save(reviews);
			return Response.success(result);
		}
		//mark for review
		@PutMapping("/update/{id}")
		public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody Reviews reviews) {
			System.out.println(id);
			System.out.println(reviews);
			reviews.setUserId(id);
			Reviews result = reviewDao.save(reviews);
			return Response.success(result);
		}
		
		@DeleteMapping("/delete/{id}")
		public ResponseEntity<?> deleteById(@PathVariable("id") long id) {
			
			Reviews reviews = reviewDao.findByReviewId(id);
			if(reviews!=null) {
				reviewDao.deleteById(id);
				return Response.success(reviews);
			}else {
				return Response.error("Review Not Found");
			}
		}
		
		@GetMapping("/user/{uid}")
		public ResponseEntity<?> findReviewByUserId(@PathVariable("uid") long id) {
			List<Reviews> result = reviewServices.findReviewByUserId(id);
			if(result == null)
				return Response.error("Review not found");
			return Response.success(result);
		}
		
		@GetMapping("/package/{pid}")
		public ResponseEntity<?> findReviewByPackageId(@PathVariable("pid") long id) {
			List<Reviews> result = reviewServices.findReviewByPackageId(id);
			if(result.isEmpty())
				return Response.error("Review not found");
			return Response.success(result);
		}
	

}
