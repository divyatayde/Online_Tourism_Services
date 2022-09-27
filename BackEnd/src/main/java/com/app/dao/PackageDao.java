package com.app.dao;
import java.util.List;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Packages;

public interface PackageDao extends JpaRepository<Packages, Long> {
	

		List<Packages> findAll();
		List<Packages> findByCity(String city);
		List<Packages> findByCityAndIsAvailable(String place,boolean isAvailable);
		
		@Query(value = "select * from packages  where city = ?1 AND is_available = ?2",nativeQuery = true)
		List<Packages> findPackagesSearchList(String city);
		
		//@Query(value = "select * from bookings  where user_id=?",nativeQuery = true)

}
