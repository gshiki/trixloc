package br.com.trixloc.business.impl;

import javax.inject.Inject;
import javax.inject.Named;

import br.com.trixloc.business.Business;
import br.com.trixloc.dao.DAO;
import br.com.trixloc.dao.impl.MarkerDAOImpl;
import br.com.trixloc.model.Marker;

@Named
public class MarkerBusinessImpl implements Business<Marker> {
	
	@Inject
	private DAO<Marker> markerDAO;
	
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
