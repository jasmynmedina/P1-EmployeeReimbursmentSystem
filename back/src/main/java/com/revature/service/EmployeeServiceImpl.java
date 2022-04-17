package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Employee;
import com.revature.exceptions.NotFoundException;
import com.revature.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public List<Employee> findAll() {
		return employeeRepository.findAll();
	}

	@Override
	public Employee findById(int id) {
		return employeeRepository.findById(id).orElseThrow(NotFoundException::new);
	}

	@Override
	public Employee getByUsername(String username) {
		return employeeRepository.getByUsername(username);
	}

	@Override
	public Employee add(Employee e) {
		return employeeRepository.save(e);
	}

	@Override
	public Employee update(Employee request, Integer id) {
		Employee e = new Employee();
		e.setId(id);
		e.setUsername(request.getUsername());
		e.setEmail(request.getEmail());
		e.setFirstName(request.getFirstName());
		e.setLastName(request.getLastName());
		e.setPassword(request.getPassword());
		e.setRoleId(request.getRoleId());
		e.setRole(request.getRole());
		return employeeRepository.save(e);
	}
}
