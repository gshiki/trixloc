package br.com.trixloc.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import br.com.trixloc.model.Marker;

@Repository("daoMarker")
public class MarkerDAOImpl extends DAOImpl<Marker> {

	@Override
	public void save(Marker marker) {
		super.save(marker);
	}

	@Override
	public void update(Marker marker) {
		super.update(marker);
	}

	@Override
	public void delete(Marker marker) {
		super.delete(marker);
	}

	@Override
	public Marker findById(int id) {
		return super.findById(id);
	}

	@Override
	public List<Marker> findByName(String name) {
		return super.findByName(name);
	}

}
