package br.com.trixloc.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class IndexController {
	
	@RequestMapping( method = RequestMethod.GET )
	protected ModelAndView index(HttpServletRequest req, HttpServletResponse res) {
		ModelAndView model = new ModelAndView("index");
		return model;
	}
	
}
