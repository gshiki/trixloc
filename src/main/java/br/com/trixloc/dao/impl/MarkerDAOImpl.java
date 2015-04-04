package br.com.trixloc.dao.impl;

import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import br.com.trixloc.dao.DAO;
import br.com.trixloc.model.Marker;

@Repository("daoMarker")
public class MarkerDAOImpl implements DAO<Marker> {

	@Override
	@Transactional
	public void save(Marker marker) {
		// TODO Auto-generated method stub
	}

	@Override
	@Transactional
	public void update(Marker marker) {
		// TODO Auto-generated method stub
	}

	@Override
	@Transactional
	public void delete(Marker marker) {
		// TODO Auto-generated method stub
	}

	@Override
	public Marker findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Marker findByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

}
