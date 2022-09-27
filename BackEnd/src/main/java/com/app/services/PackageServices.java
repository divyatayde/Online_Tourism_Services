package com.app.services;

import java.util.List;

import com.app.entities.Packages;

public interface PackageServices {
	public List<Packages> getAllPackages();
	public Packages findPackageById(long id);
	public Packages save(Packages pkg);
	public void deletePackageById(long id);
	List<Packages> findByCity(String city);
	
}
