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

import com.revature.beans.Reim;
import com.revature.service.ReimService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path="reimbursement")
public class ReimController {
	
	@Autowired
	ReimService reimService;
	
	@GetMapping
	public List<Reim> getReim(){
		return reimService.findAll();
	}
	
	@GetMapping(path="/{id}") 
	public Reim getReimById(@PathVariable("id") Integer id) {
		return reimService.findById(id);
	}
	
	@GetMapping(path="/byEmployee/{id}")
	public List<Reim> getReimByEmployee(@PathVariable("id") int id) {
		return reimService.findReimByEmployee(id);
	}
	
	@RequestMapping(path="/byApproved/{approved}", method=RequestMethod.GET)
	public List<Reim> getApproved(@PathVariable("approved") boolean approved) {
		return reimService.findByApproved(approved);
	}
	@RequestMapping(path="/byPending/{pending}", method=RequestMethod.GET)
	public List<Reim> getPending(@PathVariable("pending") boolean pending) {
		return reimService.findByPending(pending);
	}
	
	@PostMapping("/add")
	public void addReim(@RequestBody Reim r) {
		r.setPending(true);
		r.setApproved(false);
		r.setSubmitted();
		reimService.add(r);
	}
	
	@PutMapping("/{id}")
	public Reim updateReim(@PathVariable("id") Integer id, @RequestBody Reim r) {
		return reimService.update(r, id);
	}
	
	@PutMapping("/approve/{id}")
	public void approvedReim(@PathVariable("id") Integer id, @RequestBody Reim r) {
		r.pending = false;
		r.approved = true;
		r.setResolved();
		r.setRes(r.getRes());
		reimService.approvedReim(r);
	}
}