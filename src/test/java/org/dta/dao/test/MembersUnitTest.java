package org.dta.dao.test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import org.dta.dao.MembersDAO;
import org.dta.model.Members;
import org.hamcrest.core.IsEqual;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author utilisateur
 */
public class MembersUnitTest {

    private static SimpleDateFormat sdf;
    private static MembersDAO dao;
    private static List<Members> members;

    public MembersUnitTest() {
    }

    @BeforeClass
    public static void setUpClass() throws ParseException {
        sdf = new SimpleDateFormat("dd/MM/yyyy");
        dao = MembersDAO.instance();
        members = new ArrayList<Members>();

        Members m1 = new Members("Doe", "John", sdf.parse("01/01/1970"), "john.doe@unknow.com");
        Members m2 = new Members("Dupont", "Jean", sdf.parse("05/09/1975"), "j.dupont@test.com");
        Members m3 = new Members("Leblanc", "Juste", sdf.parse("28/02/1980"), "juste.leblanc@diner.com");
        Members m4 = new Members("Dupond", "Bernard", sdf.parse("31/12/1985"), "b.dupond@example.com");

        members.add(m1);
        members.add(m2);
        members.add(m3);
        members.add(m4);
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() throws ParseException {
    }

    @After
    public void tearDown() {
    }

    @Test
    public void crud() {

        // Persist
        for (Members m : members) {
            dao.persist(m);
        }

        assertThat(members.get(0).toString(), IsEqual.equalTo("John DOE"));
        assertThat(dao.getMembersByName("").size(), IsEqual.equalTo(4));

        // Update
        Members m = members.get(0);
        m.setAddress("Unknown");
        dao.merge(m);

        assertThat(dao.find(m.getId()).getAddress(), IsEqual.equalTo("Unknown"));

        // Remove
        dao.remove(m.getId());

        assertThat(dao.find(m.getId()), IsEqual.equalTo(null));
        assertThat(dao.getMembersByName("").size(), IsEqual.equalTo(3));
    }
}
