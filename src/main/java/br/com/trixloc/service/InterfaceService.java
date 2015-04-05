package br.com.trixloc.service;

import java.util.List;

public interface InterfaceService<T> {

	boolean save(T obj);
	boolean update(T obj);
	boolean delete(T obj);
	
	T findById(int id);
	
	List<T> findByName(String name);
	
	List<T> list();
	
}
