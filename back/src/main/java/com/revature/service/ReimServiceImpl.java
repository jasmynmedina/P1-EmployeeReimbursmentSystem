package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Reim;
import com.revature.exceptions.NotFoundException;
import com.revature.repository.ReimRepository;

@Service
public class ReimServiceImpl implements ReimService {
	
	@Autowired
	ReimRepository reimRepository;

	@Override
	public List<Reim> findAll() {
		return reimRepository.findAll();
	}

	@Override
	public Reim findById(int id) {
		return reimRepository.findById(id).orElseThrow(NotFoundException::new);
	}

	@Override
	public List<Reim> findByApproved(boolean approved) {
		if (approved == false) {
			System.out.println("This reim is pending!");
		} else {
		return reimRepository.findByApproved(approved);
		}
		return null;
	}

	@Override
	public List<Reim> findByPending(boolean pending) {
		if(pending == false) {
			System.out.println("This reim is approved!");
		}  else { 
			return reimRepository.findByPending(pending);
		}
		return null;
	}
	
	@Override
	public List<Reim> findReimByEmployee(int id) {
		return reimRepository.findByEmployee(id);

	}
	
	@Override
	public Reim add(Reim r) {
		return reimRepository.save(r);
	}

	@Override
	public Reim update(Reim r, Integer id) {
		return reimRepository.save(r);
	}

	@Override
	public void approvedReim(Reim r) {
		reimRepository.save(r);
	}
}
