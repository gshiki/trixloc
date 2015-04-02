package br.com.trixloc.business;

public interface Business<T> {

	void save(T obj);
	void update(T obj);
	void delete(T obj);
	
	T findById(int id);
	T findByName(String name);
	
}
