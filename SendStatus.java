package com.project.soarcapstone.userdetails;

public class SendStatus<T> {
	private Integer status;
	private String message;
	private T data;
	
	
	public SendStatus(Integer status , String message , T data) {
		this.status  = status;
		this.message = message;
		this.data = data;
	}
	
	


	public Integer getStatus() {
		return status;
	}




	public void setStatus(Integer status) {
		this.status = status;
	}




	public String getMessage() {
		return message;
	}




	public void setMessage(String message) {
		this.message = message;
	}




	public T getData() {
		return data;
	}




	public void setData(T data) {
		this.data = data;
	}




	@Override
	public String toString() {
		return "SendStatus [status=" + status + ", message=" + message + ", data=" + data + "]";
	}
	
	

}