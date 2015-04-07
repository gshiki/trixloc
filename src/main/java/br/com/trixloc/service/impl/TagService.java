package br.com.trixloc.service.impl;

import java.util.ArrayList;
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
	public boolean save(Tag tag) {
		try {
			tagDAO.save(tag);
		} catch (Exception e) {
			e.printStackTrace();
			
			return false;
		}
		return true;
	}

	@Override
	@Transactional
	public boolean update(Tag tag) {
		try {
			tagDAO.update(tag);
		} catch (Exception e) {
			e.printStackTrace();
			
			return false;
		}
		return true;
	}

	@Override
	@Transactional
	public boolean delete(Tag tag) {
		try {
			tagDAO.delete(tag);
		} catch (Exception e) {
			e.printStackTrace();
			
			return false;
		}
		return true;
	}

	@Override
	public Tag findById(int id) {
		try {
			return tagDAO.findById(id);
		} catch (Exception e) {
			e.printStackTrace();
			
			return null;
		}
	}

	@Override
	public List<Tag> findByName(String name) {
		try {
			return tagDAO.findByName(name);
		} catch (Exception e) {
			e.printStackTrace();
			
			return new ArrayList<Tag>();
		}
	}

	@Override
	public List<Tag> list() {
		try {
			return tagDAO.list();
		} catch (Exception e) {
			e.printStackTrace();
			
			return new ArrayList<Tag>();
		}
	}
	
}
