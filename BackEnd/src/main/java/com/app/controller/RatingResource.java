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

import com.app.dao.RatingDao;
import com.app.dto.Response;
import com.app.entities.Ratings;
import com.app.servicesImpl.RatingServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/ratings")
public class RatingResource {
		
		@Autowired
		private RatingServiceImpl ratingsServices;
		
		@Autowired
		private RatingDao ratingsDaos;
		
		@GetMapping("/getall")
		public ResponseEntity<?> findAll() {
			List<Ratings> result = ratingsDaos.findAll();
			return Response.success(result);
		}
		
		@GetMapping("/findbyid/{id}")
		public ResponseEntity<?> findById(@PathVariable("id") long id) {
			Ratings result = ratingsServices.findRatingsById(id);
			if(result == null)
				return Response.error("Ratings not found");
			return Response.success(result);
		}
		
		@PostMapping("/addrating")
		public ResponseEntity<?> save(@RequestBody Ratings ratings) {
			Ratings result = ratingsDaos.save(ratings);
			return Response.success(result);
		}
		
		@PutMapping("/update/{id}")
		public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody Ratings ratings) {
			System.out.println(id);
			System.out.println(ratings);
			ratings.setUserId(id);
			Ratings result = ratingsDaos.save(ratings);
			return Response.success(result);
		}
		
		@DeleteMapping("/delete/{id}")
		public ResponseEntity<?> deleteById(@PathVariable("id") long id) {
			Ratings ratings = ratingsDaos.findByRatingId(id);
			if(ratings!=null) {
				ratingsDaos.deleteById(id);
				return Response.success(ratings);
			}else {
				return Response.error("Not Found");
			}
		}
		
		@GetMapping("/user/{uid}")
		public ResponseEntity<?> findRatingsByUserId(@PathVariable("uid") long id) {
			Ratings result = ratingsServices.findRatingsByUserId(id);
			if(result == null)
				return Response.error("Ratings not found");
			return Response.success(result);
		}
		
		@GetMapping("/package/{pid}")
		public ResponseEntity<?> findRatingsByPackageId(@PathVariable("pid") long id) {
			List<Ratings> result = ratingsServices.findRatingsByPackageId(id);
			if(result == null)
				return Response.error("Ratings not found");
			return Response.success(result);
		}
		
		@GetMapping("/avgratings/{pid}")
		public ResponseEntity<?> findAvgRatingsByPackageId(@PathVariable("pid") long id) {
			double result = ratingsServices.findAvgRatingsByPackageId(id);
			if(result == 0)
				return Response.error("Ratings not found");
			return Response.success(result);
		}
		
		
	





}
