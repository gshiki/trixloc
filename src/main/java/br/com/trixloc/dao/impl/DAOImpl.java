package br.com.trixloc.dao.impl;

import java.util.List;

import org.hibernate.Session;

import br.com.trixloc.dao.DAO;
import br.com.trixloc.util.HibernateUtil;

public abstract class DAOImpl<T> implements DAO<T> {
	
	@Override
	public void save(T obj) {
		Session session = HibernateUtil.getHibernateSession();
		
		session.beginTransaction();
		
		session.save(obj);
		
		session.getTransaction().commit();
	}

	@Override
	public void update(T obj) {
		Session session = HibernateUtil.getHibernateSession();
		
		session.beginTransaction();
		
		session.update(obj);
		
		session.getTransaction().commit();
	}

	@Override
	public void delete(T obj) {
		Session session = HibernateUtil.getHibernateSession();
		
		session.beginTransaction();
		
		session.delete(obj);
		
		session.getTransaction().commit();
	}

	@Override
	public T findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<T> findByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
