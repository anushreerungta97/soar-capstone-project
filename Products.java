package com.project.soarcapstone.userdetails;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Products {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String imgUrl;
	private String type;
	private String name;
	private Integer price;
	private String available;
	private String remarks;
	
//	@OneToMany
//	private Request request;
	
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
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public String getAvailable() {
		return available;
	}
	public void setAvailable(String available) {
		this.available = available;
	}
	
	@Override
	public String toString() {
		return "Products [id=" + id + ", imgUrl=" + imgUrl + ", type=" + type + ", name=" + name + ", price=" + price
				+ ", available=" + available + ", remarks=" + remarks + "]";
	}
	public Products(Integer id, String imgUrl, String type, String name, Integer price, String available,
			String remarks) {
		super();
		this.id = id;
		this.imgUrl = imgUrl;
		this.type = type;
		this.name = name;
		this.price = price;
		this.available = available;
		this.remarks = remarks;
	}
	public Products() {
		
		// TODO Auto-generated constructor stub
	}
	
	
}
