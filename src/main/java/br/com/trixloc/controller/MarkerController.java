package br.com.trixloc.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.trixloc.util.Util;

@Controller
@RequestMapping("/marker")
public class MarkerController {
	
	@RequestMapping(value = "/register", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String regsiterMarker(HttpServletRequest req, HttpServletResponse res) {
		String paramsJSON = req.getParameter("params-json");
		
		JSONArray jsonResponse = new JSONArray();
		
		try {
			if ( Util.validateParam(paramsJSON) ) {
				JSONObject params = new JSONObject(paramsJSON);
				JSONObject responseObject = new JSONObject();
				
				System.out.println(params);
				
				responseObject.put("resposta", "cadastrou");
				
				jsonResponse.put(responseObject);
			} else {
				JSONObject responseObject = new JSONObject();
				
				responseObject.put("resposta", "ta vazio");
				
				jsonResponse.put(responseObject);
			}
		} catch (JSONException ex) {
			ex.printStackTrace();
		}
		return jsonResponse.toString();
	}
	
}
