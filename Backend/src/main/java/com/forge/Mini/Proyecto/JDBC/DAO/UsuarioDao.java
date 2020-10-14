package com.forge.Mini.Proyecto.JDBC.DAO;

import com.forge.Mini.Proyecto.JDBC.ConnectionManager;
import com.forge.Mini.Proyecto.JDBC.DTO.Usuario;
import org.springframework.web.bind.annotation.RequestMapping;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;


public class UsuarioDao {
    private Connection conn;
    public UsuarioDao() throws SQLException {
        conn = ConnectionManager.obtenerConexion();
    }


    public List<Usuario> obtenerTodos() throws SQLException {
        String sql = "select * from usuarios";
        PreparedStatement ps = conn.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        List<Usuario> usuarios = new LinkedList<>();
        while (rs.next()){
            Usuario u = new Usuario(rs.getString("NOMBRE"),rs.getString("CORREO"),rs.getString("CONTRASEÑA"),
                    rs.getString("GENERO") ,rs.getString("FECHANACIMIENTO"),rs.getInt("ID"));
            usuarios.add(u);
        }
        return usuarios;

    }


    public void borrarUsuario(int i) throws SQLException {
        String sql = "delete usuarios where id = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1,i);
        ps.executeUpdate();
    }


    public void actualizarUsuario(int i,  Usuario usuario) throws SQLException {
        String sql = "UPDATE usuarios SET NOMBRE = ?, CORREO = ?, CONTRASEÑA= ?, FECHANACIMIENTO = ?, GENERO = ? " +
                "WHERE ID = ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, usuario.getNombre());
        ps.setString(2, usuario.getCorreo());
        ps.setString(3,usuario.getContraseña());
        ps.setString(4,usuario.getFechaNacimiento());
        ps.setString(5,usuario.getGenero());
        ps.setInt(6 ,i);
        ps.executeUpdate();
    }

    public void crearUsuario(Usuario u) throws SQLException {
        String sql = "INSERT INTO usuarios (NOMBRE, CORREO, GENERO, CONTRASEÑA, FECHANACIMIENTO) " +
                "VALUES (?,?,?,?,?)";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1,u.getNombre());
        ps.setString(2,u.getCorreo());
        ps.setString(3,u.getGenero());
        ps.setString(4,u.getContraseña());
        ps.setString(5,u.getFechaNacimiento());
        ps.executeUpdate();
    }

    public List<Usuario> ObtenerPorCorreo(String c) throws SQLException {
        String sql = "SELECT * FROM usuarios where correo LIKE ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1,"%"+c+"%");
        ResultSet rs = ps.executeQuery();
        List<Usuario> usuarios = new LinkedList<>();
        while (rs.next()){
            Usuario u = new Usuario(rs.getString("NOMBRE"),rs.getString("CORREO"),rs.getString("CONTRASEÑA"),
                    rs.getString("GENERO") ,rs.getString("FECHANACIMIENTO"),rs.getInt("ID"));
            usuarios.add(u);
        }
        return usuarios;
    }

    public List<Usuario> ObtenerPorNombre(String n) throws SQLException {
        String sql = "SELECT * FROM usuarios where NOMBRE LIKE ?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1,"%"+n+"%");
        ResultSet rs = ps.executeQuery();
        List<Usuario> usuarios = new LinkedList<>();
        while (rs.next()){
            Usuario u = new Usuario(rs.getString("NOMBRE"),rs.getString("CORREO"),rs.getString("CONTRASEÑA"),
                    rs.getString("GENERO") ,rs.getString("FECHANACIMIENTO"),rs.getInt("ID"));
            usuarios.add(u);
        }
        return usuarios;

    }
}
