package com.project.soarcapstone.userdetails;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Request {

	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String status;
	
	private Integer price;
	private String remarks;
	private Date date;
	
	
	@ManyToOne( cascade = CascadeType.ALL)
	private User user;
	
	@ManyToOne( cascade = CascadeType.ALL)
	private Products products;

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	
	

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Products getProducts() {
		return products;
	}

	public void setProducts(Products products) {
		this.products = products;
	}

	
	public Request(String status,  Integer price, String remarks, Date date,
			User user, Products products) {
		super();
		
		this.status = status;
		this.price = price;
		this.remarks = remarks;
		this.date = date;
		this.user = user;
		this.products = products;
	}

	public Request() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Request [id=" + id + ", status=" + status + ",  price=" + price
				+ ", remarks=" + remarks + ", date=" + date + ", user=" + user + ", products=" + products + "]";
	}

	
	
	
}
