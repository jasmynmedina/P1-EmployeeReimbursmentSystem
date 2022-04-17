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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Manager;
import com.revature.service.ManagerService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path="manager")
public class ManagerController {
	
	@Autowired
	ManagerService managerService;
	
	@GetMapping
	public List<Manager> getManager(){
		return managerService.findAll();
	}
	
	@GetMapping(path="{id}") 
	public Manager getManagerById(@PathVariable("id") Integer id) {
		return managerService.findById(id);
	}
	
	@RequestMapping(path="/byUsername/{username}", method=RequestMethod.GET)
	public Manager getManagerByUsername(@PathVariable("username") String username) {
		return managerService.getByUsername(username);
	}
	
	@PostMapping("/add")
	public void addManager(@RequestBody Manager m) {
		managerService.add(m);
	}
	
	@PutMapping(path="{id}")
	public Manager updateManager(@PathVariable("id") Integer id, @RequestBody Manager m) {
		return managerService.update(m, id);
	}
}
