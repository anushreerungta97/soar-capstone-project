package com.project.soarcapstone.userdetails;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginJpaRepository extends JpaRepository<Login , Integer> {

	
	public Login findByUser(User user) ;
	
}
