package com.app.servicesImpl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.BookingDao;
import com.app.entities.Bookings;
import com.app.services.BookingServices;


@Transactional
@Service
public class BookingServiceImpl implements BookingServices {
	

		@Autowired
		private BookingDao bookingDao; 
		@Override
		public List<Bookings> findAllBookings() {
			return bookingDao.findAll();
		}
		@Override
		public Bookings findBookingById(long id) {
			return bookingDao.findByBookingId(id);
		}
		

		@Override
		public Bookings save(Bookings bookings) {
			return bookingDao.save(bookings);
		}
		@Override
		public int deleteBookingById(long id) {
			if(bookingDao.existsById(id)) {
				bookingDao.deleteById(id);
				return 1;
			}
			return 0;
		}
		@Override
		public List<Bookings> findAllByUserId(long userId) {
			return bookingDao.findByUserId(userId);
		}
		@Override
		public List<Bookings> findAllByPackageId(long pkgId) {
			
			return bookingDao.findByPackageId(pkgId);
		}
	

}
