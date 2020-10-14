package com.forge.Mini.Proyecto.APIs;

import com.forge.Mini.Proyecto.JDBC.DAO.UsuarioDao;
import com.forge.Mini.Proyecto.JDBC.DTO.Usuario;
import com.microsoft.sqlserver.jdbc.SQLServerException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(value = "http://localhost:4200", maxAge = 3600)
public class UsuarioResource {
    @RequestMapping(method = RequestMethod.GET, value = "/todos")
    public List<Usuario> GETALL() throws SQLException {
        List<Usuario> usuario = new UsuarioDao().obtenerTodos();
        return usuario;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/todo/{correo}")
    public List<Usuario> GETNMAIL(@PathVariable("correo") String c) throws SQLException {
        List<Usuario> usuario = new UsuarioDao().ObtenerPorCorreo(c);
        return usuario;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/todos/{nombre}")
    public List<Usuario> GETNAME(@PathVariable("nombre") String n) throws SQLException {
        List<Usuario> usuario = new UsuarioDao().ObtenerPorNombre(n);
        return usuario;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/borrar/{id}")
    public void DELETE(@PathVariable("id") int i) throws SQLException {
        new UsuarioDao().borrarUsuario(i);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/actualizar/{id}")
    public void UPDATE(@PathVariable("id") int i, @RequestBody Usuario u) throws SQLException {
        try {
            new UsuarioDao().actualizarUsuario(i, u);
        } catch (SQLServerException e) {
            System.out.println(e.toString());
            throw new ResponseStatusException(HttpStatus.CONFLICT, "El correo ya se encuentra en uso");
        } catch (SQLException e){
            System.out.println(e.toString());
        }
    }
    @RequestMapping(method = RequestMethod.POST, value = "/crear")
    public void CREATE(@RequestBody Usuario u) throws SQLException {
        new UsuarioDao().crearUsuario(u);
    }
}
