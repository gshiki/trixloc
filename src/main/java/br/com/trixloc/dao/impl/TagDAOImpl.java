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
	public void save(Tag tag) throws Exception {
		super.save(tag);
	}

	@Override
	public void update(Tag tag) throws Exception {
		super.update(tag);
	}

	@Override
	public void delete(Tag tag) throws Exception {
		super.delete(tag);
	}

	@Override
	public Tag findById(int id) throws Exception {
		Tag tag = null;
		
		Session session = HibernateUtil.getHibernateSession();
		
		session.beginTransaction();
		
		Criteria criteria = session.createCriteria(Tag.class);
		
		criteria.add( Restrictions.eq("id", id) );
		
		criteria.addOrder( Order.desc("dateCreated") );
		
		tag = (Tag) criteria.list().get(0); 
		
		session.getTransaction().commit();
	 
		return tag;
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Tag> findByName(String name) throws Exception {
		List<Tag> tags = new ArrayList<Tag>();
		
		Session session = HibernateUtil.getHibernateSession();
		
		session.beginTransaction();
		
		Criteria criteria = session.createCriteria(Tag.class);
		
		criteria.add( Restrictions.ilike("name", "%" + name + "%") );
		
		criteria.addOrder( Order.desc("dateCreated") );
		
		tags.addAll(criteria.list());
		
		session.getTransaction().commit();
	 
		return tags;
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Tag> list() throws Exception {
		List<Tag> tags = new ArrayList<Tag>();
		
		Session session = HibernateUtil.getHibernateSession();
		
		session.beginTransaction();
		
		Criteria criteria = session.createCriteria(Tag.class);
		
		criteria.addOrder( Order.desc("dateCreated") );
		
		tags.addAll(criteria.list());
		
		session.getTransaction().commit();
		
		return tags;
	}

}
