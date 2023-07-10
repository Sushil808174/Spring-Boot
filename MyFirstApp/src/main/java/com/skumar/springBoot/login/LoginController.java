package com.skumar.springBoot.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {

	@RequestMapping("/login-page")
	public String loggedIn() {
		return "login";
	}
}
