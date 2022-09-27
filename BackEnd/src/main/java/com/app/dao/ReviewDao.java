package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.app.entities.Reviews;
public interface ReviewDao extends JpaRepository<Reviews, Long> {

		
		Reviews findByReviewId(long reviewId);
		Reviews findReviewByPackageId(long packageId);
		Reviews findReviewByUserId(long userId);
		List<Reviews> findByUserId(long uId);
		List<Reviews> findByPackageId(long pId);
		
		@Query("SELECT r FROM Reviews r WHERE r.userId = ?1  AND r.packageId = ?2")
		Reviews checkReviewExists(long userId, long hotelId);
			
	

}
