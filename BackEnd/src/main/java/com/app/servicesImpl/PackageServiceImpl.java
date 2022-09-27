package com.app.servicesImpl;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.dao.PackageDao;
import com.app.dto.SearchPackageDto;
import com.app.entities.Packages;
import com.app.services.PackageServices;

//@Transactional
@Service 
public class PackageServiceImpl implements PackageServices{
	
		
		@Autowired
		private PackageDao pkgDao;
		@Override
		public List<Packages> getAllPackages()
		{
			List<Packages> list = pkgDao.findAll();
			return list;
		}
		@Override
		public Packages findPackageById(long id)
		{
			Optional<Packages> hotel = pkgDao.findById(id);
			return hotel.orElse(null);	
		}
		
		public Packages save(Packages pkg) {
			return pkgDao.save(pkg);
		}
		@Override
		public void deletePackageById(long id)
		{
			pkgDao.deleteById(id);	
		}
		
		public List<Packages> searchPackageList(SearchPackageDto searchPackage){
			List<Packages> packageList = pkgDao.findByCityAndIsAvailable(searchPackage.getLocation(), searchPackage.isPackageType());
			System.out.println(searchPackage.isPackageType());
			return packageList;
		}

		@Override
		public List<Packages> findByCity(String city) {
			List<Packages> packageList = pkgDao.findByCity(city);
			return packageList;
		}
		
		
	

}
