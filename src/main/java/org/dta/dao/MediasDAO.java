package org.dta.dao;

import javax.persistence.EntityManager;

import org.dta.model.Medias;

public class MediasDAO {
	private static MediasDAO dao;
	
	public MediasDAO(){
		
	}
	
	public static MediasDAO instance() {
        if (dao == null) {
            dao = new MediasDAO();
        }
        return dao;
    }
	

    public Medias find(Long id) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        Medias medias = entityManager.find(Medias.class, id);
        entityManager.close();
        return medias;
    }

    public Medias persist(Medias medias) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        DatabaseHelper.beginTx(entityManager);
        entityManager.persist(medias);
        DatabaseHelper.commitTxAndClose(entityManager);
        return medias;
    }

    public Medias merge(Medias medias) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        DatabaseHelper.beginTx(entityManager);
        entityManager.merge(medias);
        DatabaseHelper.commitTxAndClose(entityManager);
        return medias;
    }

    public void remove(Long id) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        DatabaseHelper.beginTx(entityManager);
        entityManager.remove(entityManager.find(Medias.class, id));
        DatabaseHelper.commitTxAndClose(entityManager);
    }
}
