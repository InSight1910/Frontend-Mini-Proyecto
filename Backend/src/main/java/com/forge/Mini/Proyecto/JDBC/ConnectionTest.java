package com.forge.Mini.Proyecto.JDBC;

import java.sql.Connection;
import java.sql.SQLException;

public class ConnectionTest {
    public static void main(String[] args) throws SQLException {
        Connection conn = ConnectionManager.obtenerConexion();

    }
}
