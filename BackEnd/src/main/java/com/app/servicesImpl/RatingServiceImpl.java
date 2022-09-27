package com.app.servicesImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.RatingDao;
import com.app.entities.Ratings;
import com.app.services.RatingServices;

@Transactional
@Service
public class RatingServiceImpl implements RatingServices{
	

		
		@Autowired
		private RatingDao ratingsDao;
		
		public Ratings findRatingsById(long id) {
			return ratingsDao.findByRatingId(id);
		}
		
		public List<Ratings> findAllRatings(){
			return ratingsDao.findAll();
		}
		
		public Ratings save(Ratings ratings) {
			return ratingsDao.save(ratings);
		}
		
		public Ratings findRatingsByUserId(long userid) {
			return ratingsDao.findRatingsByUserId(userid);
		}
		
		public double findAvgRatingsByPackageId(long pkgid) {
			List<Ratings> res = ratingsDao.findRatingsByPackageId(pkgid);
			double avg = 0;
			for(Ratings r : res) {
				avg = avg + r.getRating();
			}
			avg = avg / res.size();
			if(avg > 0)
				return avg;
			else 
				return 0;
		}
		
		public List<Ratings> findRatingsByPackageId(long pkgid) {
			List<Ratings> res = ratingsDao.findRatingsByPackageId(pkgid);
			if(res.size() > 0)
				return res;
			return null;
		}

	

}
