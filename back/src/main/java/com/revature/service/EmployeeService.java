package com.revature.service;

import java.util.List;

import com.revature.beans.Employee;

public interface EmployeeService {
	
	public List<Employee> findAll();
	
	public Employee findById(int id);
	
	public Employee getByUsername(String username);
	
	public Employee add(Employee e);
	
	public Employee update(Employee e, Integer id);
}
