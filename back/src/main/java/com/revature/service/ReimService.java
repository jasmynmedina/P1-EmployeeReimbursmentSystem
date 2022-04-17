package com.revature.service;

import java.util.List;

import com.revature.beans.Reim;

public interface ReimService {
	
	public List<Reim> findAll();
	
	public Reim findById(int id);
		
	public List<Reim> findByApproved(boolean approved);
	
	public List<Reim> findByPending(boolean pending);
		
	public Reim add(Reim r);
	
	public Reim update(Reim r, Integer id);
	
	public void approvedReim(Reim r);
	
	public List<Reim> findReimByEmployee(int id);
	}
