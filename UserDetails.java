package com.project.soarcapstone.userdetails;

public class UserDetails {
	private String name;
	private String email;
	private String password;
	private String typeOfEmployee;
	
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getTypeOfEmployee() {
		return typeOfEmployee;
	}
	public void setTypeOfEmployee(String typeOfEmployee) {
		this.typeOfEmployee = typeOfEmployee;
	}
	public UserDetails(String name, String email, String password, String typeOfEmployee) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.typeOfEmployee = typeOfEmployee;
	}
	public UserDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "UserDetails [name=" + name + ", email=" + email + ", password=" + password + ", typeOfEmployee="
				+ typeOfEmployee + "]";
	}
	
	

}
