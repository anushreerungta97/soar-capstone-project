package com.project.soarcapstone.userdetails;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin (origins="http://localhost:4200")
@RestController
public class UserController {
	
	@Autowired
	private UserJpaRepository userJpaRepository;
	
	@Autowired
	private LoginJpaRepository loginJpaRepository;

	@Autowired
	private ProductsJpaRepository productsJpaRepository;
	
	@Autowired
	private RequestJpaRepository requestJpaRepository;
  
	@PostMapping(path= "/users")
	public SendStatus<User> addUSer(@RequestBody UserDetails userDetails) {
		if(!userJpaRepository.existsById(userDetails.getEmail())) {
			User user = new User(userDetails.getName(), userDetails.getEmail(), userDetails.getTypeOfEmployee());
			userJpaRepository.save(user);
			Login login = new Login( userDetails.getPassword(), user);
			loginJpaRepository.save(login);
			
			return new SendStatus<User>(0 , "You're registered , you can now login" , user);
			
		}
		else
			return new SendStatus<User>(0 , "You're already registered" , null);
	}
	
//	@PostMapping(path= "/login")
//	public SendStatus<User> login(@RequestBody UserDetails userDetails) {
//		if(loginJpaRepository.equals(userDetails.getEmail()) && loginJpaRepository.equals(userDetails.getPassword())){
//			return new SendStatus<User>(1 , "Successful login" , null);
//		}
//		else
//			return new SendStatus<User>(0 , "invalid credentials " , null);			
//	}
	
	@GetMapping(path="/products")
	public Iterable<Products> products() {
		return productsJpaRepository.findAll();
	}
	
	@CrossOrigin (origins="http://localhost:4200")
	@PostMapping(path= "/request")
	public Request request(@RequestBody Request data) {
		System.out.println(data);
//		System.out.println("spring");
		return requestJpaRepository.save(data);
	}
	
	
	@PostMapping(path= "/requestDetails")
	public Request allRequestDetails(@RequestBody RequestDetails requestDetails) {
		return requestJpaRepository.save(requestDetails.getRequest());
	}
}
