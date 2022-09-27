package com.app.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Ratings;

	

	public interface RatingDao extends JpaRepository<Ratings, Long>{

		Ratings findByRatingId(Long ratingId);
		Ratings findByPackageId(long pkgId);
		Ratings findRatingsByUserId(long userId);
		List<Ratings> findRatingsByPackageId(long pkgId);
		
	}

	


