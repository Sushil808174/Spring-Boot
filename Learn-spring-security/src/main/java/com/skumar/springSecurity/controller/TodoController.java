package com.skumar.springSecurity.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {

	@GetMapping("/todos")
	public List<Todo> retrieveAllTodo(){
		return List.of(new Todo("Susheel","Learn Python"),new Todo("Susheel","Learn AWS"));
	}
}
record Todo (String username,String description) {}
