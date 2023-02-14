package com.xdevelop.Usuario.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.xdevelop.Usuario.Model.Usuario;

@Service
public class UsuarioService {
private final UsuarioRepository usuarioRepository;
@Autowired 
public UsuarioService (UsuarioRepository usuarioRepository) {
	this.usuarioRepository = usuarioRepository;
	
}//constructor
public List<Usuario>getAllUsuarios(){
	return usuarioRepository.findAll();
}//getall
public Usuario getUsuario(Long id) {
	return usuarioRepository.findById(id).orElseThrow(
			()->new IllegalArgumentException("El usuario con el id " +id + "no existe."));
}//getusuario
public Usuario deleteUsuario(Long id) {
	Usuario tmp = null;
	if(usuarioRepository.existsById(id)) {
		tmp=usuarioRepository.findById(id).get();
		usuarioRepository.deleteById(id);
		}//if
	return tmp;
}//deleteusuario
public Usuario addUsuario(Usuario usuario) {
	return usuarioRepository.save(usuario);
}//addUsuario
public Usuario updateUsuario(Long id,String nombre,String apellido,
		String email, String imagen,String password) {
	Usuario tmp = null;
	if(usuarioRepository.existsById(id)) {
		tmp =usuarioRepository.findById(id).get();
		if (nombre !=null) tmp.setNombre(nombre);
		if (apellido !=null) tmp.setApellido(apellido);
		if (email !=null) tmp.setEmail(email);
		if (imagen !=null) tmp.setImagen(imagen);
		if (password !=null) tmp.setPassword(password);
		usuarioRepository.save(tmp);
	}//if
	else {
		System.out.println("UPDATE - El usuario con el id " +id + "no existe.");
	}//else
	return tmp;
}//updateUsuario


}//classUsuarioService
