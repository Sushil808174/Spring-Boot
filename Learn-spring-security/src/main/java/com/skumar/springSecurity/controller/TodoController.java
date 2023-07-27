package com.skumar.springSecurity.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {

	private static final List<Todo> TODOS_LIST = List.of(new Todo("Susheel","Learn Python"),new Todo("Susheel","Learn AWS"));

	@GetMapping("/todos")
	public List<Todo> retrieveAllTodo(){
		return TODOS_LIST;
	}
	@GetMapping("/users/{username}/todos")
	public Todo retrievePerticularTodo(@PathVariable String username){
		return TODOS_LIST.get(0);
	}
}
record Todo (String username,String description) {}
