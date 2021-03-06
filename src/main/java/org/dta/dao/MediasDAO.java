package org.dta.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import org.dta.model.Medias;
import org.dta.model.Type;

public class MediasDAO {

    private static MediasDAO dao;

    private MediasDAO() {
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
    
    public List<Medias> getMediasByTitle(String title) {
        String sql = "select m "
                + "from Medias m "
                + "where m.title like :title";
        EntityManager entityManager = DatabaseHelper.createEntityManager();

        TypedQuery query = entityManager.createQuery(sql, Medias.class);
        query.setParameter("title", "%" + title + "%");

        return query.getResultList();
    }
    
    public List<Medias> getMediasByAuthor(String author) {
        String sql = "select m "
                + "from Medias m "
                + "where m.author like :author";
        EntityManager entityManager = DatabaseHelper.createEntityManager();

        TypedQuery query = entityManager.createQuery(sql, Medias.class);
        query.setParameter("author", "%" + author + "%");

        return query.getResultList();
    }
    
    public List<Medias> getMediasByType(Type type) {
        String sql = "select m "
                + "from Medias m "
                + "where m.type.id = :type_id";
        EntityManager entityManager = DatabaseHelper.createEntityManager();

        TypedQuery query = entityManager.createQuery(sql, Medias.class);
        query.setParameter("type_id", type.getId());

        return query.getResultList();
    }
}
