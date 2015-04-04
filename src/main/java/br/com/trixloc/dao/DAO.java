package br.com.trixloc.dao;

import java.util.List;

public interface DAO<T> {
	
	void save(T obj);
	void update(T obj);
	void delete(T obj);
	
	T findById(int id);
	List<T> findByName(String name);

}
