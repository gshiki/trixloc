package br.com.trixloc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.trixloc.dao.impl.TagDAOImpl;
import br.com.trixloc.model.Tag;
import br.com.trixloc.service.InterfaceService;

@Service("serviceTag")
public class TagService implements InterfaceService<Tag> {

	@Autowired
	private TagDAOImpl tagDAO;
	
	public void setTagDAO(TagDAOImpl tagDAO) {
		this.tagDAO = tagDAO;
	}
	
	@Override
	@Transactional
	public void save(Tag tag) {
		tagDAO.save(tag);
	}

	@Override
	@Transactional
	public void update(Tag tag) {
		tagDAO.update(tag);
	}

	@Override
	@Transactional
	public void delete(Tag tag) {
		tagDAO.delete(tag);
	}

	@Override
	public Tag findById(int id) {
		return tagDAO.findById(id);
	}

	@Override
	public List<Tag> findByName(String name) {
		return tagDAO.findByName(name);
	}

}
