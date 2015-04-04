package br.com.trixloc.dao;

public interface DAO<T> {
	
	void save(T obj);
	void update(T obj);
	void delete(T obj);
	
	T findById(int id);
	T findByName(String name);

}
