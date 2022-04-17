package com.revature.service;

import java.util.List;

import com.revature.beans.Manager;

public interface ManagerService {
	
	public List<Manager> findAll();
	
	public Manager findById(int id);
	
	public Manager getByUsername(String username);
	
	public Manager add(Manager m);
	
	public Manager update(Manager m, Integer id);
}
