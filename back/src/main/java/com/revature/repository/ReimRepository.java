package com.revature.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.revature.beans.Reim;

@Repository
public interface ReimRepository extends JpaRepository<Reim, Integer> {
	
	List<Reim> findByApproved(boolean approved);
	
	List<Reim> findByPending(boolean pending);
	

	@Query("select a from Reim a where a.author = :id")
	ArrayList<Reim> findByEmployee(@Param("id") int id);
}