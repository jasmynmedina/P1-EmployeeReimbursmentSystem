package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Employee;
import com.revature.service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path="employee")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	@GetMapping
	public List<Employee> getEmployee(){
		return employeeService.findAll();
	}
	
	@GetMapping(path="/{id}") 
	public Employee getEmployeeById(@PathVariable("id") Integer id) {
		return employeeService.findById(id);
	}
	
	@GetMapping(path="/byUsername/{username}")
	public Employee getEmployeeByUsername(@PathVariable("username") String username) {
		return employeeService.getByUsername(username);
	}
	
	@PostMapping("/add")
	public void addEmployee(@RequestBody Employee e) {
		employeeService.add(e);
	}
	
	@PutMapping(path="/{id}")
	public void updateEmployee(@PathVariable("id") Integer id, @RequestBody Employee e) {
		 employeeService.update(e, id);
	}
}
