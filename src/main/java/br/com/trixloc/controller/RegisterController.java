package br.com.trixloc.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/register")
public class RegisterController {
	
	@RequestMapping( method = RequestMethod.POST )
	protected String index(HttpServletRequest req, HttpServletResponse res) {
		
		return "CADASTRO";
	}
	
}
