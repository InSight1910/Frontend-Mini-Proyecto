package com.forge.Mini.Proyecto.JDBC.DTO;

import java.sql.Date;

public class Usuario {
    private String Nombre;
    private String Correo;
    private String Contraseña;
    private String Genero;
    private String FechaNacimiento;
    private int Id;

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getCorreo() {
        return Correo;
    }

    public void setCorreo(String correo) {
        Correo = correo;
    }

    public String getContraseña() {
        return Contraseña;
    }

    public void setContraseña(String contraseña) {
        Contraseña = contraseña;
    }

    public String getGenero() {
        return Genero;
    }

    public void setGenero(String genero) {
        Genero = genero;
    }

    public String getFechaNacimiento() {
        return FechaNacimiento;
    }

    public void setFechaNacimiento(String fechaNacimiento) {
        FechaNacimiento = fechaNacimiento;
    }

    public Usuario(String nombre, String correo, String contraseña, String genero, String fechaNacimiento, int id) {
        Nombre = nombre;
        Correo = correo;
        Contraseña = contraseña;
        Genero = genero;
        FechaNacimiento = fechaNacimiento;
        Id = id;
    }
}
