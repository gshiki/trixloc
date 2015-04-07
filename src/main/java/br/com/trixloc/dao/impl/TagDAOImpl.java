package br.com.trixloc.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import br.com.trixloc.model.Tag;
import br.com.trixloc.util.HibernateUtil;

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
		Tag tag = null;
		
		Session session = HibernateUtil.getSession();
		
		try {
			session.beginTransaction();
			
			Criteria criteria = session.createCriteria(Tag.class);
			
			criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
			criteria.add( Restrictions.eq("id", id) );
			criteria.addOrder( Order.desc("dateCreated") );
			
			tag = (Tag) criteria.list().get(0); 
			
			session.getTransaction().commit();
		} catch (Exception ex) {
			session.getTransaction().rollback();
			
			ex.printStackTrace();
		}
		
		if (session.isOpen()) {
			session.close();
		}
		
		return tag;
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Tag> findByName(String name) {
		List<Tag> tags = new ArrayList<Tag>();
		
		Session session = HibernateUtil.getSession();
		
		try {
			session.beginTransaction();
			
			Criteria criteria = session.createCriteria(Tag.class);
			
			criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
			criteria.add( Restrictions.ilike("name", "%" + name + "%") );
			criteria.addOrder( Order.desc("dateCreated") );
			
			tags.addAll(criteria.list());
			
			session.getTransaction().commit();
		} catch (Exception ex) {
			session.getTransaction().rollback();
			
			ex.printStackTrace();
		}

		if (session.isOpen()) {
			session.close();
		}
		
		return tags;
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Tag> list() {
		List<Tag> tags = new ArrayList<Tag>();
		
		Session session = HibernateUtil.getSession();
		
		try {
			session.beginTransaction();
			
			Criteria criteria = session.createCriteria(Tag.class);
			
			criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
			criteria.addOrder( Order.desc("dateCreated") );
			tags.addAll(criteria.list());
			
			session.getTransaction().commit();
		} catch (Exception ex) {
			session.getTransaction().rollback();
			
			ex.printStackTrace();
		}
		
		if (session.isOpen()) {
			session.close();
		}
		
		return tags;
	}
	
}
