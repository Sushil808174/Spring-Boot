package com.skumar.springBoot.hello;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

//@RestController
@Controller
public class SayHelloController {
	
	private Logger logger = LoggerFactory.getLogger(getClass());
	

	@RequestMapping("/say-hello")
	@ResponseBody
	public String sayHello() {
		return "Hello, What are you learning today?";
	}
	
	
	@RequestMapping("/say-hello-html")
	@ResponseBody
	public String sayHelloHtml() {
		StringBuffer sb = new StringBuffer();
		
		sb.append("<html>");
		
		sb.append("<head>");
		sb.append("<title>My First Web App using html</title>");
		sb.append("</head>");
		sb.append("<body style='color:red'>");
		sb.append("Hey! What are you learning today?.");
		sb.append("</body>");
		
		sb.append("</html>");
		
		return sb.toString();
	}
	
	
	
	// src/main/resources/META-INF/resources/WEB-INF/jsp/sayHello.jsp
	@RequestMapping("say-hello-jsp")
	public String sayHelloJsp() {
		return "sayHello";
	}
	
	
}
