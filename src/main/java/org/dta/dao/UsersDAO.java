package org.dta.dao;

import javax.persistence.EntityManager;
import org.dta.model.Users;

public class UsersDAO {

    private static UsersDAO dao;
    
    public static UsersDAO instance() {
    if (dao == null) {
            dao = new UsersDAO();
        }
        return dao;
    }

    private UsersDAO() {
    }
    
    public Users find(Long id) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        Users users = entityManager.find(Users.class, id);
        entityManager.close();
        return users;
    }

    public Users persist(Users users) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        DatabaseHelper.beginTx(entityManager);
        entityManager.persist(users);
        DatabaseHelper.commitTxAndClose(entityManager);
        return users;
    }

    public Users merge(Users users) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        DatabaseHelper.beginTx(entityManager);
        entityManager.merge(users);
        DatabaseHelper.commitTxAndClose(entityManager);
        return users;
    }

    public void remove(Long id) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        DatabaseHelper.beginTx(entityManager);
        entityManager.remove(entityManager.find(Users.class, id));
        DatabaseHelper.commitTxAndClose(entityManager);
    }
}
