package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.Manager;

@Repository
public interface ManagerRepository extends JpaRepository<Manager, Integer> {
	
	Manager getByUsername(String username);
}