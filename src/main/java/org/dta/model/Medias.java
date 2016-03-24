package org.dta.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotBlank;

@Entity
@Table(name = "medias")
public class Medias {

    @Id
    @SequenceGenerator(name = "medias_id_sequence", sequenceName = "medias_id_sequence", allocationSize = 1)
    @GeneratedValue(generator = "medias_id_sequence")
    private Long id;
    @NotBlank
    private String title;
    @NotBlank
    private String author;
    @NotNull
    @ManyToOne
    private Type type_id;

    public Medias() {

    }

    public Medias(Long id, String title, String author, Type type_id) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.type_id = type_id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Type getType_id() {
        return type_id;
    }

    public void setType_id(Type type_id) {
        this.type_id = type_id;
    }

}
