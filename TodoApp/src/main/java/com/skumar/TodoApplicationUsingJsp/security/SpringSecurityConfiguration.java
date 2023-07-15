package com.skumar.TodoApplicationUsingJsp.security;

import java.util.function.Function;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class SpringSecurityConfiguration {

//	InMemoryUserDetailsManager
//	InMemoryUserDetailsManager(UserDetails... users)
	
	@Bean
	public InMemoryUserDetailsManager ConfigurUserDetails() {
		UserDetails userDetails1 = createNewUser("Susheel", "dummy");
		UserDetails userDetails2 = createNewUser("Himanshu", "dummy");
		UserDetails userDetails3 = createNewUser("Ratan", "dummy");
		UserDetails userDetails4 = createNewUser("Aman", "dummy");
		
		return new InMemoryUserDetailsManager(userDetails1,userDetails2,userDetails3,userDetails4);
		
	}

	private UserDetails createNewUser(String username, String password) {
		Function<String, String> passwordEncode
		= input -> passwordEncoder().encode(input);

		UserDetails userDetails = User.builder()
				.passwordEncoder(passwordEncode)
				.username(username)
				.password(password)
				.roles("USER","ADMIN")
				.build();
		return userDetails;
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
