package org.dta.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "borrow")
public class Borrow implements Serializable {

    @Id
    @SequenceGenerator(name = "borrow_id_sequence", sequenceName = "borrow_id_sequence", allocationSize = 1)
    @GeneratedValue(generator = "borrow_id_sequence")
    private Long id;
    @NotNull
    @ManyToOne
    private Members member_id;
    @NotNull
    @ManyToOne
    private Medias media_id;
    @NotNull
    @Temporal(TemporalType.DATE)
    private Date borrowing_date;
    @Temporal(TemporalType.DATE)
    private Date return_date;

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @return the member_id
     */
    public Members getMember_id() {
        return member_id;
    }

    /**
     * @param member_id the member_id to set
     */
    public void setMember_id(Members member_id) {
        this.member_id = member_id;
    }

    /**
     * @return the media_id
     */
    public Medias getMedia_id() {
        return media_id;
    }

    /**
     * @param media_id the member_id to set
     */
    public void setMedia_id(Medias media_id) {
        this.media_id = media_id;
    }

    /**
     * @return the borrowing_date
     */
    public Date getBorrowing_date() {
        return borrowing_date;
    }

    /**
     * @param borrowing_date the borrowing_date to set
     */
    public void setBorrowing_date(Date borrowing_date) {
        this.borrowing_date = borrowing_date;
    }

    /**
     * @return the return_date
     */
    public Date getReturn_date() {
        return return_date;
    }

    /**
     * @param return_date the return_date to set
     */
    public void setReturn_date(Date return_date) {
        this.return_date = return_date;
    }
}
