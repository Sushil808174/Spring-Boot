package com.skumar.LoginApplicationUsingJsp.todo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoService {

	public static int count = 0;
	public static List<Todo> todos = new ArrayList<>();
	static {
		todos.add(new Todo(++count,"susheel","Learn AWS",LocalDate.now().plusYears(1),false));
		todos.add(new Todo(++count,"himanshu","Spring framework",LocalDate.now().plusYears(1),false));
		todos.add(new Todo(++count,"aman","Spring Boot",LocalDate.now().plusYears(1),false));
		todos.add(new Todo(++count,"Ratan","Spring Security",LocalDate.now().plusYears(1),false));
	}
	
	public List<Todo> findByUsername(String username){
		return todos;
	}
	
	public void addNewTodo(String username,String desc,LocalDate targetDate,boolean isDone) {
	
		Todo todo = new Todo(++count, username, desc, targetDate, isDone);
		todos.add(todo);
	}
}
