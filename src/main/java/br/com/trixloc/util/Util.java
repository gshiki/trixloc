package br.com.trixloc.util;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import br.com.trixloc.business.impl.MarkerBusinessImpl;
import br.com.trixloc.model.Marker;
import br.com.trixloc.model.Tag;

public class Util {
	
	/**
	 * Valida um parametro.
	 * @param parameter
	 * @return
	 */
	public static boolean validateParam(String parameter) {
		return parameter != null && !parameter.isEmpty();
	}

	/**
	 * Teste do Hibernate.
	 * @param args
	 */
	public static void main(String[] args) {
		System.out.println("Hibernate one to one (Annotation)");
		
		MarkerBusinessImpl mbo;
		
		Marker marker = new Marker();
		
		List<Tag> tags = new ArrayList<Tag>();
		
		for (int i = 0; i < 10; i++) {
			Tag tag = new Tag();
			
			tag.setName("Tag " + i);
			tag.setDateCreated(new Date());
			
			tags.add(tag);
		}
		
		marker.setName("Nome do Marcador de Teste");
		marker.setDateCreated(new Date());
		marker.setTags(tags);
 
//		mbo.save(marker);
 
		System.out.println("Done");
	}
	
}
