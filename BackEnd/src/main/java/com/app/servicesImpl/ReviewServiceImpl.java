package com.app.servicesImpl;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ReviewDao;
import com.app.entities.Reviews;
import com.app.services.ReviewServices;

@Transactional
@Service
public class ReviewServiceImpl implements ReviewServices{
	
		
		@Autowired
		private ReviewDao reviewDao;
		
		public Reviews findReviewById(long id) {
			return reviewDao.findByReviewId(id);
		}
		
		public List<Reviews> findAllReviews(){
			return reviewDao.findAll();
		}
		
		public Reviews save(Reviews reviews) {
			return reviewDao.save(reviews);
		}
		
		public List<Reviews> findReviewByUserId(long userid) {
			System.out.println(userid);
			return reviewDao.findByUserId(userid);
		}
		
		public List<Reviews> findReviewByPackageId(long pkgid) {
			System.out.println(pkgid);
			return reviewDao.findByPackageId(pkgid);
		}

	

}
