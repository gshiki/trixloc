package br.com.trixloc.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	public void save(Marker marker) {
		markerDAO.save(marker);
	}

	@Override
	public void update(Marker marker) {
		markerDAO.update(marker);
	}

	@Override
	public void delete(Marker marker) {
		markerDAO.delete(marker);
	}

	@Override
	public Marker findById(int id) {
		return markerDAO.findById(id);
	}

	@Override
	public Marker findByName(String name) {
		return markerDAO.findByName(name);
	}

}
