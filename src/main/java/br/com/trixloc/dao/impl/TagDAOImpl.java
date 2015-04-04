package br.com.trixloc.dao.impl;

import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import br.com.trixloc.dao.DAO;
import br.com.trixloc.model.Tag;

@Repository("daoTag")
public class TagDAOImpl implements DAO<Tag> {

	@Override
	@Transactional
	public void save(Tag obj) {
		
	}

	@Override
	@Transactional
	public void update(Tag obj) {
		// TODO Auto-generated method stub
	}

	@Override
	@Transactional
	public void delete(Tag obj) {
		// TODO Auto-generated method stub
	}

	@Override
	public Tag findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Tag findByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
