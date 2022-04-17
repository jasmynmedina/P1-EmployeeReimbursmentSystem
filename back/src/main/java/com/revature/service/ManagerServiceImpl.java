package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Manager;
import com.revature.exceptions.NotFoundException;
import com.revature.repository.ManagerRepository;

@Service
public class ManagerServiceImpl implements ManagerService {

	@Autowired
	ManagerRepository managerRepository;

	@Override
	public List<Manager> findAll() {
		return managerRepository.findAll();
	}

	@Override
	public Manager findById(int id) {
		return managerRepository.findById(id).orElseThrow(NotFoundException::new);
	}

	@Override
	public Manager getByUsername(String username) {
		return managerRepository.getByUsername(username);
	}

	@Override
	public Manager add(Manager m) {
		return managerRepository.save(m);
	}

	@Override
	public Manager update(Manager m, Integer id) {
//		Manager manager = new Manager();
//		manager.setId(id);
//		manager.setUsername(m.getUsername());
//		manager.setPassword(m.getPassword());
//		manager.setFirstName(m.getFirstName());
//		manager.setLastName(m.getLastName());
//		manager.setEmail(m.getEmail());
//		manager.setRoleId(m.getRoleId());
//		manager.setRole(m.getRole());
		return managerRepository.save(m);
	}
}
