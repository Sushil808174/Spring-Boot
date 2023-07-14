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
public class LoginController {
	
	@RequestMapping("say-hello")
	@ResponseBody
	public String sayHello() {
		return "Welcome to login controller";
	}
	@RequestMapping(value ="login",method = RequestMethod.GET)
//	@ResponseBody
	public String gotoLogin() {
		return "login";
	}
	
	
	@RequestMapping(value ="login",method = RequestMethod.POST)
	public String gotoWelcome(@RequestParam String name,@RequestParam String password,ModelMap model){
		
		model.put("name",name);
		
		return "welcome";
	}
}
