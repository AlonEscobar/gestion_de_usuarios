package com.xdevelop.Usuario.controller;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.xdevelop.Usuario.Model.Usuario;
import com.xdevelop.Usuario.Service.UsuarioService;


@RestController
@RequestMapping(path="/api/usuarios/")
public class UsuarioController {
	private final UsuarioService usuarioService;
	public UsuarioController (UsuarioService usuarioService) {
	this.usuarioService = usuarioService;
	
	}//controlador
	@GetMapping
	public List<Usuario> getAllUsuarios(){
		return usuarioService.getAllUsuarios();
	}//getallusuarios
	@GetMapping (path="{userId}")
	public Usuario getUsuario(@PathVariable("userId")Long id) {
		return usuarioService.getUsuario(id);
	}//getusuario
	@DeleteMapping(path="{userId}")
	public Usuario deleteUsuario(@PathVariable("userId")Long id) {
		return usuarioService.deleteUsuario(id);
	}//deleteUsuario
	@PostMapping
	public Usuario addUsuario(@RequestBody Usuario usuario) {
		return usuarioService.addUsuario(usuario);
	}//addUsuario
	@PutMapping(path="{userId}")
	public Usuario updateUsuario(@PathVariable("userId")Long id,
		@RequestParam (required = false)String nombre,
		@RequestParam (required = false)String apellido,
		@RequestParam (required = false)String email,
		@RequestParam (required = false)String imagen,
		@RequestParam (required = false)String password) {
return usuarioService.updateUsuario(id, nombre, apellido, email, imagen, password);
}
}//classController