package br.com.trixloc.util;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.trixloc.model.Marker;
import br.com.trixloc.model.Tag;
import br.com.trixloc.service.impl.MarkerService;

@Component
public class Test {
	
	@Autowired
	private MarkerService ms;
	
	@PostConstruct
	public void testHibernate() {
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
 
		ms.save(marker);
 
		System.out.println("DEU CERTOOOOOOOOOOOOO UHUUUUUUUU");
	}
	
}
