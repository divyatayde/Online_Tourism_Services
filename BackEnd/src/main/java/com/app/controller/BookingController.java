package com.app.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.app.dto.Response;
import com.app.entities.Bookings;
import com.app.entities.Packages;

import com.app.entities.User;
import com.app.servicesImpl.BookingServiceImpl;
import com.app.servicesImpl.PackageServiceImpl;
import com.app.servicesImpl.PaymentServiceImpl;
import com.app.servicesImpl.UserServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bookings")
public class BookingController {
	

		@Autowired
		private BookingServiceImpl bookingService;
		
		@Autowired
		private  UserServiceImpl userService;
		
		@Autowired
		private PackageServiceImpl packageService;
		
		@Autowired PaymentServiceImpl paymentService;
		
		@GetMapping("/getall")
		public ResponseEntity<?> findAll() {
			List<Bookings> result = bookingService.findAllBookings();
			return Response.success(result);
		}
		
		@GetMapping("/getbybookingid/{id}")
		public ResponseEntity<?> findById(@PathVariable("id") long id) {
			Bookings result = bookingService.findBookingById(id);
			
			return Response.success(result);
		}
		@GetMapping("/getallbyuserid/{userId}")
		public ResponseEntity<?> findByUserId(@PathVariable("userId") long userId) {
			 List<Bookings> result = bookingService.findAllByUserId(userId);
			 User user;
			 Packages packages;
			 for(Bookings b : result)
			 {
				user = userService.findUserById(b.getUser().getUserId());
				b.setUserName(user.getFirstName()+" "+user.getLastName());
			 }
			 for(Bookings b : result)
			 {
				packages = packageService.findPackageById(b.getPackages().getPackageId());
				b.setPackageName(packages.getPackageName());
			 }
			return Response.success(result);
		}
		
		
		
		@GetMapping("/getallbypackageid/{packageId}")
		public ResponseEntity<?> findAllByPackageId(@PathVariable("packageId") long packageId) {
			List<Bookings> result = bookingService.findAllByPackageId(packageId);
			User user;
			Packages packages;
			for(Bookings b : result)
			{
				user = userService.findUserById(b.getUser().getUserId());
				b.setUserName(user.getFirstName()+" "+user.getLastName());
			}
			for(Bookings b : result)
			{
				packages = packageService.findPackageById(b.getPackages().getPackageId());
				b.setPackageName(packages.getPackageName());
			}
			return Response.success(result);
		}
		
		@PostMapping("/")
		public ResponseEntity<?> save(@RequestBody Bookings bookings) {
//				dto.getPayment().setPaymentdate(new Date());
//				Payments payment=paymentService.savePayment(dto.getPayment());
//				Bookings booking=new Bookings();
//				booking.setBookingDate(new Date());
//				booking.setPayment(payment);
//				User user= userService.findUserById(dto.getUserId());
//				booking.setUser(user);
//				bookingService.save(booking);
//
//				System.out.println(dto.getUserId());
//				System.out.println(dto.getPayment());
				Bookings result=bookingService.save(bookings);
			return Response.success(result);
			
		}
		
		
		
		@DeleteMapping("/delete/{id}")
		public ResponseEntity<?> deleteBookingsById(@PathVariable("id") long id) {
			int count = bookingService.deleteBookingById(id);
			return Response.success("Records Deleted: " + count);
		}
	

}
