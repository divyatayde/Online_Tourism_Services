package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.app.dto.Response;
import com.app.entities.Requests;
import com.app.servicesImpl.RequestsServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class RequestsController {

	@Autowired
	private RequestsServiceImpl requestsService;
	
	@GetMapping("/requests")
	public ResponseEntity<?> findAll() {
		List<Requests> result = requestsService.findAllRequests();
		return Response.success(result);
	}
	
	@GetMapping("/requests/{id}")
	public ResponseEntity<?> findById(@PathVariable("id") int id) {
		Requests result = requestsService.findRequestById(id);
		
		return Response.success(result);
	}
	
	@GetMapping("/requests/findAllByReceiverId/{receiverId}")
	public ResponseEntity<?> findAllByReceiverId(@PathVariable("receiverId") int receiverId) {
		List<Requests> result = requestsService.findAllByReceiverId(receiverId);
		return Response.success(result);
	}
	
	@GetMapping("/requests/getRequestBySenderId/{senderId}")
	public  ResponseEntity<?> findBySenderId(@PathVariable("senderId") int senderId) {
		Requests result = requestsService.findRequestBySenderId(senderId);
		
		return Response.success(result);
	}
	
	@PostMapping("/requests/add")
	public ResponseEntity<?> save(@RequestBody Requests requests) {
		Requests result = requestsService.save(requests);
		return Response.success(result);
	}
	
	@PutMapping("/requests/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id) {
	
		Requests req=requestsService.findRequestById(id);
		requestsService.update(req);
		
		
		return Response.success(req);
	}	
//	
	@DeleteMapping("/requests/{id}")
	public @ResponseBody String deleteRequestsById(@PathVariable("id") int id) {
		int count = requestsService.deleteRequestsById(id);
		return "Records Deleted: " + count;
	}
}
