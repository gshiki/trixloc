package br.com.trixloc.service;

public interface InterfaceService<T> {

	void save(T obj);
	void update(T obj);
	void delete(T obj);
	
	T findById(int id);
	T findByName(String name);
	
}
