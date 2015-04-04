package br.com.trixloc.service;

import java.util.List;

public interface InterfaceService<T> {

	void save(T obj);
	void update(T obj);
	void delete(T obj);
	
	T findById(int id);
	List<T> findByName(String name);
	
}
