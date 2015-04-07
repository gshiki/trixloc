package br.com.trixloc.dao.impl;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import br.com.trixloc.dao.DAO;
import br.com.trixloc.util.HibernateUtil;

public abstract class DAOImpl<T> implements DAO<T> {
	
	public void save(T obj) {
		SessionFactory sf = HibernateUtil.getSessionFactory();
		Session session = sf.openSession();
		try {
			session.beginTransaction();
			
			session.save(obj);
			
			session.getTransaction().commit();
		} catch (Exception ex) {
			session.getTransaction().rollback();
			
			ex.printStackTrace();
		}
	}
	
	public void update(T obj) {
		SessionFactory sf = HibernateUtil.getSessionFactory();
		Session session = sf.openSession();
		try {
			session.beginTransaction();
			
			session.update(obj);
			
			session.getTransaction().commit();
		} catch (Exception ex) {
			session.getTransaction().rollback();
			
			ex.printStackTrace();
		}
	}

	public void delete(T obj) {
		SessionFactory sf = HibernateUtil.getSessionFactory();
		Session session = sf.openSession();
		try {
			session.beginTransaction();
			
			session.delete(obj);
			
			session.getTransaction().commit();
		} catch (Exception ex) {
			session.getTransaction().rollback();
			
			ex.printStackTrace();
		}
	}

}
