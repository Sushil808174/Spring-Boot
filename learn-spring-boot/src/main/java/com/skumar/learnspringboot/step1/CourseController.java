package com.skumar.learnspringboot.step1;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseController {

	@RequestMapping("/Course")
	public List<Course> getAllCourses(){
		return Arrays.asList(
				new Course(1,"Spring boot","John Doe"),
				new Course(2,"JavaScript","Raja"),
				new Course(3,"DevOps","Ranga")
				);
	}
}
