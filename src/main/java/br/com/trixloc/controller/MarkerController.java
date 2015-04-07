package br.com.trixloc.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.trixloc.model.Marker;
import br.com.trixloc.model.Tag;
import br.com.trixloc.service.impl.MarkerService;
import br.com.trixloc.service.impl.TagService;
import br.com.trixloc.util.Util;

@Controller
@RequestMapping("/marker")
public class MarkerController {
	
	@Autowired
	private MarkerService serviceMarker;
	@Autowired
	private TagService serviceTag;
	
	
	/* ********************************************************************************************************* */
	/* 												CADASTROS													 */
	/* ********************************************************************************************************* */
	@RequestMapping(value = "/register", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String regsiterMarker(HttpServletRequest req, HttpServletResponse res) {
		String paramsSTR = req.getParameter("params-json");
		
		Map<String, String> jsonMapping = new HashMap<String, String>();
		
		try {
			if ( Util.validateParam(paramsSTR) ) {
				JSONParser jsonParser = new JSONParser();
				JSONObject paramsJSON = (JSONObject) jsonParser.parse(paramsSTR);
				
				String markerName = (String) paramsJSON.get("param-name");
				String markerLat = (String) paramsJSON.get("param-lat");
				String markerLng = (String) paramsJSON.get("param-lng");
				String markerTags = (String) paramsJSON.get("param-tags");
				
				if ( Util.validateParam(markerName, markerLat, markerLng, markerTags) ) {
					List<Tag> tags = new ArrayList<Tag>();
					
					Marker marker = new Marker();
					
					String[] paramTagsParts = markerTags.split(",");
					
					for (String tagSTR : paramTagsParts) {
						Tag tag = new Tag();
						
						tag.setName(tagSTR);
						tag.setDateCreated(new Date());
						tags.add(tag);
					}
					marker.setName(markerName);
					marker.setDateCreated(new Date());
					marker.setLatitude(Double.parseDouble(markerLat.replace(",", ".")));
					marker.setLongitude(Double.parseDouble(markerLng.replace(",", ".")));
					marker.setTags(tags);
					
					serviceMarker.save(marker);
				}
				
				jsonMapping.put("param-response", "registered");
			} else {
				jsonMapping.put("param-response", "failed");
			}
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return JSONValue.toJSONString(jsonMapping);
	}
	
	
	/* ********************************************************************************************************* */
	/* 												LISTAGEM													 */
	/* ********************************************************************************************************* */
	@RequestMapping(value = "/list", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String listMarkers(HttpServletRequest req, HttpServletResponse res) {
		String paramsSTR = req.getParameter("params-json");
		
		Map<String, String> jsonMapping = new HashMap<String, String>();
		
		try {
			List<Marker> markers = new ArrayList<Marker>();
			List<String> markersSTR = new ArrayList<String>();
			
			if ( Util.validateParam(paramsSTR) ) {
				JSONParser jsonParser = new JSONParser();
				JSONObject paramsJSON = (JSONObject) jsonParser.parse(paramsSTR);
				
				String markerName = (String) paramsJSON.get("param-name");
				
				if ( Util.validateParam(markerName) ) {
					markers = serviceMarker.findByName(markerName);
				}
			} else {
				markers = serviceMarker.list();
			}
			
			for (Marker marker : markers) {
				markersSTR.add(marker.toStringJSON());
			}
			
			jsonMapping.put("param-response", "listed");
			jsonMapping.put("param-list", markersSTR.toString());
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return JSONValue.toJSONString(jsonMapping);
	}
	
	
	/* ********************************************************************************************************* */
	/* 												EXCLUSAO													 */
	/* ********************************************************************************************************* */
	@RequestMapping(value = "/delete", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String deleteMarker(HttpServletRequest req, HttpServletResponse res) {
		String paramsSTR = req.getParameter("params-json");
		
		Map<String, String> jsonMapping = new HashMap<String, String>();
		
		try {
			if ( Util.validateParam(paramsSTR) ) {
				JSONParser jsonParser = new JSONParser();
				JSONObject paramsJSON = (JSONObject) jsonParser.parse(paramsSTR);
				
				String action = (String) paramsJSON.get("param-action");
				int markerID = Integer.parseInt( (String) paramsJSON.get("param-id") );
				
				if ("delete".equals(action) && markerID > -1) {
					Marker marker = serviceMarker.findById(markerID);
					
					if (marker != null && serviceMarker.delete(marker)) {
						jsonMapping.put("param-response", "deleted");
						jsonMapping.put("param-id", String.valueOf(markerID));
					}
				} else {
					jsonMapping.put("param-response", "failed");
				}
			}
		} catch (ParseException e) {
			e.printStackTrace();
			
			jsonMapping.put("param-response", "failed");
		}
		return JSONValue.toJSONString(jsonMapping);
	}
	
}
