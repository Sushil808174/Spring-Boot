package com.skumar.learnLombookAndLogging.model;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class StudentService {

	Logger logger = LoggerFactory.getLogger(StudentService.class);
	private List<Students> student = new ArrayList<>();
	
	@GetMapping("/hello")
	@ResponseBody
	public String hello() {
//		logger.trace("This is trace message ");
		logger.debug("This is debug message");
//		logger.info("This is info message");
//		logger.warn("This is warn message");
//		logger.error("This is error message");
		return "Hello World 1";
	}
	
	@PostMapping("/student")
	public ResponseEntity<String> postStudent(@RequestBody Students st){
		System.out.println(st);
		student.add(st);
		return new ResponseEntity<>("success",HttpStatus.CREATED);
	}
	
	@GetMapping("/students")
	public ResponseEntity<List<Students>> getStudent(){
		return new ResponseEntity<>(student,HttpStatus.ACCEPTED);
	}
	
	
	
}
