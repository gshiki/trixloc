package br.com.trixloc.dao.impl;

import org.hibernate.Session;

import br.com.trixloc.dao.DAO;
import br.com.trixloc.util.HibernateUtil;

public abstract class DAOImpl<T> implements DAO<T> {
	
	public void save(T obj) throws Exception {
		Session session = HibernateUtil.getHibernateSession();
		
		session.beginTransaction();
		
		session.save(obj);
		
		session.getTransaction().commit();
	}

	public void update(T obj) throws Exception {
		Session session = HibernateUtil.getHibernateSession();
		
		session.beginTransaction();
		
		session.update(obj);
		
		session.getTransaction().commit();
	}

	public void delete(T obj) throws Exception {
		Session session = HibernateUtil.getHibernateSession();
		
		session.beginTransaction();
		
		session.delete(obj);
		
		session.getTransaction().commit();
	}

}
