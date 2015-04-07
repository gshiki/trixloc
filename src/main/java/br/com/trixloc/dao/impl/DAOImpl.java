package br.com.trixloc.dao.impl;

import org.hibernate.Session;

import br.com.trixloc.dao.DAO;
import br.com.trixloc.util.HibernateUtil;

public abstract class DAOImpl<T> implements DAO<T> {
	
	public void save(T obj) {
		Session session = HibernateUtil.getSession();
		
		try {
			session.beginTransaction();
			
			session.save(obj);
			
			session.getTransaction().commit();
		} catch (Exception ex) {
			session.getTransaction().rollback();
			
			ex.printStackTrace();
		}
		if (session.isOpen()) {
			session.close();
		}
	}
	
	public void update(T obj) {
		Session session = HibernateUtil.getSession();
		
		try {
			session.beginTransaction();
			
			session.update(obj);
			
			session.getTransaction().commit();
		} catch (Exception ex) {
			session.getTransaction().rollback();
			
			ex.printStackTrace();
		}
		if (session.isOpen()) {
			session.close();
		}
	}

	public void delete(T obj) {
		Session session = HibernateUtil.getSession();
		
		try {
			session.beginTransaction();
			
			session.delete(obj);
			
			session.getTransaction().commit();
		} catch (Exception ex) {
			session.getTransaction().rollback();
			
			ex.printStackTrace();
		}
		if (session.isOpen()) {
			session.close();
		}
	}

}
