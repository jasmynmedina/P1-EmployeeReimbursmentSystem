package com.revature.beans;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="reim")
public class Reim {
	
	@Id
	@GeneratedValue
	@Column(name="id")
	private Integer id;
	
	@Column(name="amount")
	private Integer amount;
	
	@Column(name="submitted")
	private LocalDateTime submitted;
	
	@Column(name="resolved")
	private LocalDateTime resolved;
	
	@Column(name="descr")
	private String desc;
	
	@Column(name="author")
	private Integer author;
	
	@Column(name="res")
	private Integer res;
	
	@Column(name="pending")
	public Boolean pending;
	
	@Column(name="approved")
	public Boolean approved;
	
	@Column(name="type")
	private String type;
	
	public Reim() {
		super();
	}

	public Reim(Integer id, Integer amount, LocalDateTime submitted, LocalDateTime resolved, String desc, Integer author, Integer res,
			Boolean pending, Boolean approved, String type) {
		super();
		this.id = id;
		this.amount = amount;
		this.submitted = submitted;
		this.resolved = resolved;
		this.desc = desc;
		this.author = author;
		this.res = res;
		this.pending = pending;
		this.approved = approved;
		this.type = type;
	}

	

	@Override
	public String toString() {
		return "Reim [id=" + id + ", amount=" + amount + ", submitted=" + submitted + ", resolved=" + resolved
				+ ", desc=" + desc + ", author=" + author + ", res=" + res + ", pending=" + pending + ", approved="
				+ approved + ", type=" + type + "]";
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	public LocalDateTime getSubmitted() {
		return submitted;
	}

	public void setSubmitted(LocalDateTime submitted) {
		this.submitted = submitted;
	}
	
	public void setSubmitted() {
		this.submitted = LocalDateTime.now();
	}


	public LocalDateTime getResolved() {
		return resolved;
	}

	public void setResolved(LocalDateTime resolved) {
		this.resolved = resolved;
	}
	
	public void setResolved() {
		this.resolved = LocalDateTime.now();
	}


	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public Integer getAuthor() {
		return author;
	}

	public void setAuthor(Integer author) {
		this.author = author;
	}

	public Integer getRes() {
		return res;
	}

	public void setRes(Integer res) {
		this.res = res;
	}

	public Boolean isPending() {
		return pending;
	}

	public void setPending(Boolean pending) {
		this.pending = pending;
	}

	public Boolean getPending() {
		return pending;
	}

	public Boolean getApproved() {
		return approved;
	}

	public Boolean isApproved() {
		return approved;
	}

	public void setApproved(Boolean approved) {
		this.approved = approved;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
}
