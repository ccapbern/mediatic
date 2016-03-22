package org.dta.dao;

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
}
