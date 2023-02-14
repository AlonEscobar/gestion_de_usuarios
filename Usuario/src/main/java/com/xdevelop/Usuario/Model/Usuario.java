package com.xdevelop.Usuario.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "usuarios")
public class Usuario {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
			@Column(name="id", unique=true)
		private Long id;
		@Column(nullable=false)
		private String nombre;
		@Column(nullable=false)
		private String apellido;
		@Column(nullable=false)
		private String email;
		@Column(length=3000)
		private String imagen;
		@Column(nullable=false)
		private String password;
		public Usuario(String nombre, String apellido, String email, String password) {
			super();
			this.nombre = nombre;
			this.apellido = apellido;
			this.email = email;
			this.password = password;
		}//Constructor
		public Usuario() {
			
		}//constructorvacio
		public String getNombre() {
			return nombre;
		}
		public void setNombre(String nombre) {
			this.nombre = nombre;
		}
		public String getApellido() {
			return apellido;
		}
		public void setApellido(String apellido) {
			this.apellido = apellido;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public Long getId() {
			return id;
		}
		public String getImagen() {
			return imagen;
		}
	
		public void setImagen(String imagen) {
			this.imagen = imagen;
		}
		@Override
		public String toString() {
			return "Usuario [nombre=" + nombre + ", apellido=" + apellido + ", email=" + email + ", imagen=" + imagen
					+ ", password=" + password + "]";
		}//toString

}//class
