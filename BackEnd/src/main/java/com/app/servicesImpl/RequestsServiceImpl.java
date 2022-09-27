package com.app.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.RequestDao;
import com.app.entities.Requests;

@Transactional
@Service
public class RequestsServiceImpl {

	@Autowired
	private RequestDao requestDao; 
	
	public List<Requests> findAllRequests() {
		return requestDao.findAll();
	}
	
	public Requests findRequestById(int id) {
		return requestDao.findById(id);
	}
	
	public Requests findRequestBySenderId(int senderId) {
		return requestDao.findRequestBySenderId(senderId);
	}
	
	public Requests findByReceiverId(int receiverId) {
		return requestDao.findByReceiverId(receiverId);
	}
	public Requests save(Requests requests) {
		return requestDao.save(requests);
	}
	
	
	
	public int deleteRequestsById(int id) {
		if(requestDao.existsById(id)) {
			requestDao.deleteById(id);
			return 1;
		}
		return 0;
	}
	public Requests update(Requests req)
	{
		
		if(req.getRequestStatus().equals("pending"))
		{
			req.setRequestStatus("Approved");
			requestDao.save(req);
			return req;
		}
		else return null;
		
	}

	public List<Requests> findAllByReceiverId(int receiverId) {
		// TODO Auto-generated method stub
		return (List<Requests>) requestDao.findAllByReceiverId(receiverId);
	}
}
