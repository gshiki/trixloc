package br.com.trixloc.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import br.com.trixloc.model.Marker;
import br.com.trixloc.util.HibernateUtil;

@Repository("daoMarker")
public class MarkerDAOImpl extends DAOImpl<Marker> {

	@Override
	public void save(Marker marker) {
		super.save(marker);
	}

	@Override
	public void update(Marker marker) {
		super.update(marker);
	}

	@Override
	public void delete(Marker marker) {
		super.delete(marker);
	}

	@Override
	public Marker findById(int id) {
		Marker marker = null;
		
		SessionFactory sf = HibernateUtil.getSessionFactory();
		Session session = sf.openSession();
		try {
			session.beginTransaction();
			
			Criteria criteria = session.createCriteria(Marker.class);
			
			criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
			criteria.add( Restrictions.eq("id", id) );
			criteria.addOrder( Order.desc("dateCreated") );
			
			marker = (Marker) criteria.list().get(0);
			
			session.getTransaction().commit();
		} catch (Exception ex) {
			session.getTransaction().rollback();
			
			ex.printStackTrace();
		}
		return marker;
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Marker> findByName(String name) {
		List<Marker> markers = new ArrayList<Marker>();
		
		SessionFactory sf = HibernateUtil.getSessionFactory();
		Session session = sf.openSession();
		try {
			session.beginTransaction();
			
			Criteria criteria = session.createCriteria(Marker.class);
			
			criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
			criteria.add( Restrictions.ilike("name", "%" + name + "%") );
			criteria.addOrder( Order.desc("dateCreated") );
			
			markers.addAll(criteria.list());
			
			session.getTransaction().commit();
		} catch (Exception ex) {
			session.getTransaction().rollback();
			
			ex.printStackTrace();
		}
		return markers;
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Marker> list() {
		List<Marker> markers = new ArrayList<Marker>();
		
		SessionFactory sf = HibernateUtil.getSessionFactory();
		Session session = sf.openSession();
		try {
			session.beginTransaction();
			
			Criteria criteria = session.createCriteria(Marker.class);
			
			criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
			criteria.addOrder( Order.desc("dateCreated") );
			
			markers.addAll(criteria.list());
			
			session.getTransaction().commit();
		} catch (Exception ex) {
			session.getTransaction().rollback();
			
			ex.printStackTrace();
		}
		session.close();
		
		return markers;
	}

}
