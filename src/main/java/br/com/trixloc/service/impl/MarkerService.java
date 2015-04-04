package br.com.trixloc.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.trixloc.dao.impl.MarkerDAOImpl;
import br.com.trixloc.model.Marker;
import br.com.trixloc.service.InterfaceService;

@Service("serviceMarker")
public class MarkerService implements InterfaceService<Marker> {
	
	@Autowired
	private MarkerDAOImpl markerDAO;
	
	public void setMarkerDAO(MarkerDAOImpl markerDAO) {
		this.markerDAO = markerDAO;
	}

	@Override
	@Transactional
	public void save(Marker marker) {
		markerDAO.save(marker);
	}

	@Override
	@Transactional
	public void update(Marker marker) {
		markerDAO.update(marker);
	}

	@Override
	@Transactional
	public void delete(Marker marker) {
		markerDAO.delete(marker);
	}

	@Override
	public Marker findById(int id) {
		return markerDAO.findById(id);
	}

	@Override
	public List<Marker> findByName(String name) {
		return markerDAO.findByName(name);
	}

}
