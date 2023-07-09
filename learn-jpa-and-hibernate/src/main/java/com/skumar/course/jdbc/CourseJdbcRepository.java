package com.skumar.course.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CourseJdbcRepository {

	@Autowired
	JdbcTemplate courseRepo;
	
	
	private static String INSERT_QUERY = 
			"""
				insert into course (id,name,author)
				values (1,'Java','Ratan');
			""";

	
	private static String DELETE_QUERY = 
			"""
				delete from course where id = ?;
			""";
	public void insert() {
		courseRepo.update(INSERT_QUERY);
	}
}
