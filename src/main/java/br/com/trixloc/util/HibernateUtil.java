package br.com.trixloc.util;

import java.io.File;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

public class HibernateUtil {
	
	private static SessionFactory sessionFactory = createSessionFactory();
	
	public static SessionFactory createSessionFactory() {
	    Configuration configuration = new Configuration();
	    
	    File configFile = new File("src/main/resources/hibernate/hibernate.cfg.xml");
	    
	    if (configFile.exists()) {
	    	configuration.configure(configFile);
	    	
	    	ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder().applySettings(configuration.getProperties()).build();
	    	
	    	sessionFactory = configuration.buildSessionFactory(serviceRegistry);
	    }
	    return sessionFactory;
	}
	
	public static SessionFactory getSessionFactory() {
		if (sessionFactory == null) {
			sessionFactory = createSessionFactory();
		}
	    return sessionFactory;
	}
	
	public static Session getSession() {
		return sessionFactory.getCurrentSession();
	}
}

