package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Bookings;
public interface BookingDao extends JpaRepository<Bookings, Long> {
	

	

		List<Bookings> findAll();
		Bookings findByBookingId(Long id);
		Bookings deleteBookingByBookingId(long id);
		
		@Query(value = "select * from bookings  where user_id=?",nativeQuery = true)
		List<Bookings> findByUserId(long userId);
		
		@Query(value = "select * from bookings  where package_id=?",nativeQuery = true)
		List<Bookings> findByPackageId(long pkgId);
		
		
		
		
	

}
