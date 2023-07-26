package com.skumar.springSecurity.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NormalController {

	@GetMapping("/hello")
	public ResponseEntity<String> helloHandler(){
		return new ResponseEntity<>("Hello World",HttpStatus.ACCEPTED);
	}
}
