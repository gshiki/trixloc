package br.com.trixloc.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import br.com.trixloc.util.Util;

@Entity
@Table(name="t001_marker", catalog="trixloc", schema="public")
public class Marker implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -673335867312084268L;

	@Id
	@Column(name="d001_id", unique=true, nullable=false)
	@SequenceGenerator(name="seq_marker", sequenceName="seq_t001_id", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq_marker")
	private int id;
	
	@Column(name="d001_lat", nullable=false)
	private double latitude;
	
	@Column(name="d001_lng", nullable=false)
	private double longitude;
	
	@Column(name="d001_name", length=30, nullable=false)
	private String name;
	
	@Column(name="d001_date_created", nullable=false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateCreated;
	
	@ManyToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinTable(name="t003_markers_tags", catalog="trixloc", schema="public", 
		joinColumns = { 
			@JoinColumn(name="d001_id", nullable=false, updatable=false) 
		}, 
		inverseJoinColumns = { 
			@JoinColumn(name="d002_id", nullable=false, updatable=false) 
		})
	private List<Tag> tags;

	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}
	
	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((dateCreated == null) ? 0 : dateCreated.hashCode());
		result = prime * result + id;
		long temp;
		temp = Double.doubleToLongBits(latitude);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		temp = Double.doubleToLongBits(longitude);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Marker other = (Marker) obj;
		if (dateCreated == null) {
			if (other.dateCreated != null)
				return false;
		} else if (!dateCreated.equals(other.dateCreated))
			return false;
		if (id != other.id)
			return false;
		if (Double.doubleToLongBits(latitude) != Double
				.doubleToLongBits(other.latitude))
			return false;
		if (Double.doubleToLongBits(longitude) != Double
				.doubleToLongBits(other.longitude))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

	/**
	 * Converte um objeto Marker para formato JSON String.
	 * @param tags
	 * @return
	 */
	public String toStringJSON() {
		String toJSON = "{";
		toJSON += "\"id\":\"" + String.valueOf(id) + "\",";
		toJSON += "\"lat\":\"" + String.valueOf(latitude) + "\",";
		toJSON += "\"lng\":\"" + String.valueOf(longitude) + "\",";
		toJSON += "\"name\":\"" + String.valueOf(name) + "\",";
		toJSON += "\"date\":\"" + Util.formatToSimpleDate(dateCreated) + "\"";
		if (!tags.isEmpty()) {
			toJSON += ",";
			toJSON += "\"tags\": [";
			for (Tag tag : tags) {
				toJSON += tag.toStringJSON();
				if (tags.indexOf(tag) < tags.size() - 1) {
					toJSON += ",";
				}
			}
			toJSON += "]";
		}
		toJSON += "}";
		return toJSON;
	}

}
