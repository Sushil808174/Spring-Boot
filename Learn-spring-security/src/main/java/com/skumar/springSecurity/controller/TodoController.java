package com.skumar.springSecurity.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TodoController {
	
	Logger logger = LoggerFactory.getLogger(getClass());

	private static final List<Todo> TODOS_LIST = List.of(new Todo("Susheel","Learn Python"),new Todo("Susheel","Learn AWS"));

	@GetMapping("/todos")
	public List<Todo> retrieveAllTodo(){
		return TODOS_LIST;
	}
	@GetMapping("/users/{username}/todos")
	public Todo retrievePerticularTodo(@PathVariable String username){
		return TODOS_LIST.get(0);
	}
	@PostMapping("/users/{username}/todos")
	public void postPerticularTodo(@PathVariable String username,@RequestBody Todo todo){
		logger.info("create {} for {}",todo,username);
	}
}
record Todo (String username,String description) {}
