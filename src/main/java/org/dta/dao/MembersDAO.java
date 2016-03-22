package org.dta.dao;

import javax.persistence.EntityManager;
import org.dta.model.Members;

public class MembersDAO {

    private static MembersDAO dao;

    public MembersDAO() {

    }

    public static MembersDAO instance() {
        if (dao == null) {
            dao = new MembersDAO();
        }
        return dao;
    }

    public Members find(Long id) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        Members member = entityManager.find(Members.class, id);
        entityManager.close();
        return member;
    }

    public Members persist(Members member) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        DatabaseHelper.beginTx(entityManager);
        entityManager.persist(member);
        DatabaseHelper.commitTxAndClose(entityManager);
        return member;
    }

    public Members merge(Members member) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        DatabaseHelper.beginTx(entityManager);
        entityManager.merge(member);
        DatabaseHelper.commitTxAndClose(entityManager);
        return member;
    }

    public void remove(Long id) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        DatabaseHelper.beginTx(entityManager);
        entityManager.remove(entityManager.find(Members.class, id));
        DatabaseHelper.commitTxAndClose(entityManager);
    }
}
