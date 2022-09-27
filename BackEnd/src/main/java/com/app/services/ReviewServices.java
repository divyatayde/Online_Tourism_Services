package com.app.services;

import java.util.List;

import com.app.entities.Reviews;

public interface ReviewServices {
	public Reviews findReviewById(long id);
	public List<Reviews> findAllReviews();
	public Reviews save(Reviews reviews);
	public List<Reviews> findReviewByUserId(long userid);
	public List<Reviews> findReviewByPackageId(long pkgid) ;
	
}
