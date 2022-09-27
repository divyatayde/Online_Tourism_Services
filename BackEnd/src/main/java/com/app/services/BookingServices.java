package com.app.services;

import java.util.List;

import com.app.entities.Bookings;


public interface BookingServices {
	public List<Bookings> findAllBookings();
	public Bookings findBookingById(long id);
	public Bookings save(Bookings bookings);
	public int deleteBookingById(long id);
	public List<Bookings> findAllByUserId(long userId);
	public List<Bookings> findAllByPackageId(long pkgId);
}
