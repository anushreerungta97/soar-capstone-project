package com.project.soarcapstone.userdetails;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserJpaRepository extends JpaRepository<User , String> {

}
