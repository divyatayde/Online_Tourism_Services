package com.app.services;

import java.util.List;

import com.app.entities.Ratings;

public interface RatingServices {
	public Ratings findRatingsById(long id);
	public List<Ratings> findAllRatings();
	public Ratings save(Ratings ratings);
	public Ratings findRatingsByUserId(long userid);
	public double findAvgRatingsByPackageId(long pkgid);
	public List<Ratings> findRatingsByPackageId(long pkgid);
}
