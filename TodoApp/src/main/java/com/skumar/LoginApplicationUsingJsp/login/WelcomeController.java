package com.skumar.LoginApplicationUsingJsp.login;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;


@Controller
@SessionAttributes("name")
public class WelcomeController {
	
	@RequestMapping("say-hello")
	@ResponseBody
	public String sayHello() {
		return "Welcome to login controller";
	}
	
	@RequestMapping(value ="/",method = RequestMethod.GET)
	public String goToWelcomePage(ModelMap model) {
		model.put("name","Susheel");
		return "welcome";
	}
}
