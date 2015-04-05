package br.com.trixloc.service.impl;


import java.util.ArrayList;
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
	public boolean save(Marker marker) {
		try {
			markerDAO.save(marker);
		} catch (Exception e) {
			e.printStackTrace();
			
			return false;
		}
		return true;
	}

	@Override
	@Transactional
	public boolean update(Marker marker) {
		try {
			markerDAO.update(marker);
		} catch (Exception e) {
			e.printStackTrace();
			
			return false;
		}
		return true;
	}

	@Override
	@Transactional
	public boolean delete(Marker marker) {
		try {
			markerDAO.delete(marker);
		} catch (Exception e) {
			e.printStackTrace();
			
			return false;
		}
		return true;
	}

	@Override
	public Marker findById(int id) {
		try {
			return markerDAO.findById(id);
		} catch (Exception e) {
			e.printStackTrace();
			
			return null;
		}
	}

	@Override
	public List<Marker> findByName(String name) {
		try {
			return markerDAO.findByName(name);
		} catch (Exception e) {
			e.printStackTrace();
			
			return new ArrayList<Marker>();
		}
	}

	@Override
	public List<Marker> list() {
		// TODO Auto-generated method stub
		return null;
	}

}
