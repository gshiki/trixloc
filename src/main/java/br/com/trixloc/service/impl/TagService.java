package br.com.trixloc.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	public void save(Tag obj) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void update(Tag obj) {
		// TODO Auto-generated method stub
		
	}

	@Override
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
