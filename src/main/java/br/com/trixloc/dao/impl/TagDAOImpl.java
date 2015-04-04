package br.com.trixloc.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import br.com.trixloc.model.Tag;

@Repository("daoTag")
public class TagDAOImpl extends DAOImpl<Tag> {

	@Override
	public void save(Tag tag) {
		super.save(tag);
	}

	@Override
	public void update(Tag tag) {
		super.update(tag);
	}

	@Override
	public void delete(Tag tag) {
		super.delete(tag);
	}

	@Override
	public Tag findById(int id) {
		return super.findById(id);
	}

	@Override
	public List<Tag> findByName(String name) {
		return super.findByName(name);
	}
	
}
