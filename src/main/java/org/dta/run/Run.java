package org.dta.run;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import org.dta.dao.MembersDAO;
import org.dta.model.Members;

public class Run {

    public static void main(String[] args) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        // DAO
        MembersDAO membersDAO = MembersDAO.instance();

        Members m1 = new Members("Doe", "John", sdf.parse("01/01/1970"), "john.doe@unknown.com");
        Members m2 = new Members("Dupond", "Jean", sdf.parse("01/01/1970"), "j.dupond@unknown.com");
        Members m3 = new Members("Dupont", "Bernard", sdf.parse("25/03/1986"), "b.dupont@unknown.com");
        Members m4 = new Members("Leblanc", "Juste", sdf.parse("31/12/1985"), "juste.leblanc@unknown.com");
        membersDAO.persist(m1);
        membersDAO.persist(m2);
        membersDAO.persist(m3);
        membersDAO.persist(m4);

        for (Members m : membersDAO.getMembersByName("")) {
            System.out.println(m);
        }

        m1.setAddress("Unknown");
        membersDAO.merge(m1);
        System.out.println(membersDAO.find(m1.getId()).getAddress());

        System.out.println(m3.getAge());
    }   
}
