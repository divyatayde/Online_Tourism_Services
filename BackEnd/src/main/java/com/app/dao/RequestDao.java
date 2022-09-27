package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Requests;

public interface RequestDao extends JpaRepository<Requests, Integer> {
	Requests findById(int id);
	Requests findRequestBySenderId(int senderId);
	Requests findByReceiverId(int receiverId);
	List<Requests> findAllByReceiverId(int receiverId);
	
}
