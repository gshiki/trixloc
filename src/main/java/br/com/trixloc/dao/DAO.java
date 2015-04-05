package br.com.trixloc.dao;

import java.util.List;

public interface DAO<T> {
	
	void save(T obj) throws Exception;
	void update(T obj) throws Exception;
	void delete(T obj) throws Exception;
	
	T findById(int id) throws Exception;
	
	List<T> findByName(String name) throws Exception;
	
	List<T> list() throws Exception;

}
