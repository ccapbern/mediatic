package org.dta.dao.test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import org.dta.dao.MembersDAO;
import org.dta.model.Medias;
import org.dta.model.Members;
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
public class MembersDaoTest {

    private static SimpleDateFormat sdf;
    private static MembersDAO dao;
    private static List<Members> members;

    public MembersDaoTest() {
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

        for (Members m : members) {
            dao.persist(m);
        }
    }

    @AfterClass
    public static void tearDownClass() {
        List<Members> mList = dao.getMembersByName("");

        for (Members m : mList) {
            dao.remove(m.getId());
        }
    }

    @Before
    public void setUp() throws ParseException {
    }

    @After
    public void tearDown() {
    }

    @Test
    public void findAll() {
        List<Members> mList = dao.getMembersByName("");

        assertEquals(mList.size(), 4);

        Members m = mList.get(3);
        dao.remove(m.getId());
        mList = dao.getMembersByName("");

        assertEquals(mList.size(), 3);
        assertNull(dao.find(m.getId()));
    }

    @Test
    public void find() {
        List<Members> mList = dao.getMembersByName("doe");

        assertEquals(mList.size(), 1);
        assertEquals(mList.get(0).toString(), "John DOE");
    }

    @Test
    public void update() {
        List<Members> mList = dao.getMembersByName("doe");
        Members m = mList.get(0);

        m.setAddress("Unknown");
        dao.merge(m);

        assertEquals(dao.find(m.getId()).getAddress(), "Unknown");
    }
    
    @Test
    public void findAllMedias() {
        List<Members> mList = dao.getMembersByName("");
        Members m = mList.get(0);
        
        List<Medias> mediaList = dao.getAllMedias(m);
        
        assertEquals(mediaList.size(), 0);
    }
}
