package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SearchPackageDto;
import com.app.entities.Packages;
import com.app.dto.Response;


import com.app.servicesImpl.PackageServiceImpl;
import com.app.servicesImpl.RatingServiceImpl;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/packages")
public class PackageController {
		
		@Autowired
		private PackageServiceImpl pkgService;
		
		@Autowired
		private RatingServiceImpl ratingServices;
	
		@GetMapping("/getpackages")
		public ResponseEntity<?> getPackages(){
			
			List<Packages> result = pkgService.getAllPackages();
			return Response.success(result);
		}
		
		
		@GetMapping("/getpackage/{id}")
		public ResponseEntity<?> getPackage(@PathVariable("id") long id){
			
			Packages pkg = pkgService.findPackageById(id);
			System.out.println("yse" + pkg);
			return Response.success(pkg);
		}
		
		
		
		@PostMapping("/addpackage")
		public @ResponseBody void save(@RequestBody Packages pkg) {
			 pkgService.save(pkg);
		}
		
		@PutMapping("/updatepackage")
		public @ResponseBody void updatehotel(@RequestBody Packages pkg) {
			 pkgService.save(pkg);
		}
		
		@DeleteMapping("/deletepackage/{id}")
		public @ResponseBody void deletepackage(@PathVariable("id") long id){
			pkgService.deletePackageById(id);
		}
		
		@PostMapping("/searchpackage")
		public ResponseEntity<?> packageSearchPackage(@RequestBody SearchPackageDto searchpackage, Model model){
			System.out.println("con " + searchpackage.getLocation());
			System.out.println("con " + searchpackage.isPackageType());
			List<Packages> result = pkgService.searchPackageList(searchpackage);
			for(Packages p : result)
			{
				p.setRating((int)Math.round(ratingServices.findAvgRatingsByPackageId(p.getPackageId())));
			}
			
			System.out.println(result);
			return Response.success(result);
		}
		@GetMapping("/getbycity/{city}")
		public ResponseEntity<?> getByCity(@PathVariable ("city")String city){
			
			List<Packages> result = pkgService.findByCity(city);
			return Response.success(result);
			
	}
		
}
	