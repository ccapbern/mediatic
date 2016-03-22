package org.dta.model;

import javax.persistence.*;

@Entity
@Table(name="medias")
public class Medias {
	@Id
	@GeneratedValue
	private Long id;
	private String title;
	private String author;
	private Long type_id;
	
	public Medias(){
		
	}
	
	public Medias(Long id, String title, String author, Long type_id){
		this.id = id;
		this.title = title;
		this.author = author;
		this.type_id = type_id;
	}
	
	public Long getId(){
		return id;
	}
	
	public void setId(Long id){
		this.id = id;
	}
	
	public String getTitle(){
		return title;
	}
	
	public void setTitle(String title){
		this.title = title;
	}
	
	public String getAuthor(){
		return author;
	}
	
	public void setAuthor(String author){
		this.author = author;
	}
	
	public Long getType_id(){
		return type_id;
	}
	
	public void setType_id(Long type_id){
		this.type_id = type_id;
	}
	
	
}
