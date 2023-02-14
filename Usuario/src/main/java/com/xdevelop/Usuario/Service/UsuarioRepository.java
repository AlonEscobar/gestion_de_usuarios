package com.xdevelop.Usuario.Service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xdevelop.Usuario.Model.Usuario;


public interface UsuarioRepository  extends JpaRepository<Usuario, Long>{

}
