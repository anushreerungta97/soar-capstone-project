package com.project.soarcapstone.userdetails;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	private String name;
	@Id
	private String email;
	private String typeOfEmployee;
	
	
	
	public User() {
		// TODO Auto-generated constructor stub
	}
	public User(String name, String email, String typeOfEmployee) {
		super();
		
		this.name = name;
		this.email = email;
		this.typeOfEmployee = typeOfEmployee;
		
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTypeOfEmployee() {
		return typeOfEmployee;
	}
	public void setTypeOfEmployee(String typeOfEmployee) {
		this.typeOfEmployee = typeOfEmployee;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", typeOfEmployee=" + typeOfEmployee + "]";
	}
	
	
	

}
