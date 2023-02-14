let addButton = document.getElementById('addButton');
let searchButton = document.getElementById('searchButton')
let idTimeout;
let usuariodb=[];
let alertError = document.getElementById('alertError');
let inputName = document.getElementById('name');
let inputLastName=document.getElementById('lastName');
let inputMail = document.getElementById('email');
let inputImage = document.getElementById('image');
let inputPassword = document.getElementById('password');
let inputUserId=document.getElementById('userId');
let deleteButton=document.getElementById('deleteButton');

function getUser(){
    return fetch('/api/usuarios/', {
      method: 'GET',})
      .then(function (response) {
        response.json().then(function (json) {
          usuariodb = json;
          usuariodb.forEach((usuario) => {
           return usuario;
          }); // foreach
          console.log(usuariodb);
        }); //then
      })
      .catch(function (err) {
        console.log(err);
      });
      }
  searchButton.addEventListener('click',function(event){
    event.preventDefault();
    alertError.style.display = 'none';
    alertError.innerHTML = '';
    if (usuariodb) {
      for (let i = 0; i < usuariodb.length; i++) {
        if (usuariodb[i].id == inputUserId.value){
    inputName.value=usuariodb[i].nombre;
    inputLastName.value=usuariodb[i].apellido;
    inputMail.value=usuariodb[i].email;
    inputImage.value=usuariodb[i].imagen;
    inputPassword.value=usuariodb[i].password; 
 }
 }
}else{
  alertError.style.display='block';
  alertError.innerHTML = 'No se encontro el usuario.';  
  } 
});//butonBuscar
  addButton.addEventListener('click', function (event) {
    event.preventDefault();
  let mail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  alertError.style.display = 'none';
  alertError.innerHTML = '';


  if (
    inputName.value.trim().replaceAll('  ', '').length < 3 ||
    inputLastName.value.trim().replaceAll('  ', '').length < 3 ||
    inputMail.value.match(mail) == null ||
    inputPassword.value.length == 0 ||
    inputPassword.value.match(regex) == null
  ) {
    //nombre mayor a 3 caracteres
  if (inputName.value.trim().replaceAll('  ', '').length < 3) {
    alertError.innerHTML += 'El nombre debe contener 3 caracteres o más.';
    alertError.style.display = 'block';
    inputName.focus();
    inputName.select();
    inputName.style.background = '#f8d7da';
    inputName.style.border = 'solid red 3px';
  } else {
    inputName.style.background = '#fff';
    inputName.style.border = 'solid green 3px';
  }
   //apellido mayor a 3 caracteres
  if (inputLastName.value.trim().replaceAll('  ', '').length < 3) {
    alertError.innerHTML += '<br/>El apellido debe contener 3 caracteres o más.';
    alertError.style.display = 'block';
    inputLastName.focus();
    inputLastName.select();
    inputLastName.style.background = '#f8d7da';
    inputLastName.style.border = 'solid red 3px';
  } else {
    inputLastName.style.background = '#fff';
    inputLastName.style.border = 'solid green 3px';
  }
    //verifica que el correo sea válido
  if (inputMail.value.match(mail) == null) {
    alertError.style.display = 'block';
    alertError.innerHTML += '<br/>El correo electrónico no es válido.';
    inputMail.style.background = '#f8d7da';
    inputMail.style.border = 'solid red 3px';
  } else {
    inputMail.style.background = '#fff';	
    inputMail.style.border = 'solid green 3px';
  }
//validar que la contraseña no este vacia
if (inputPassword.value.match(regex) == null) {
    alertError.style.display = 'block';
    alertError.innerHTML +=
      '<br/>La contraseña debe contener más de 8 caracteres, un caracter especial (mayúscula, números, @$!%*?&)';
      inputPassword.style.border ='#f8d7da';
      inputPassword.style.border = 'solid red 3px';
  }else {
    inputPassword.style.background = '#fff';
    inputPassword.style.border = 'solid green 3px';
  }
  }//validar los campos
  else {
  
    inputName.style.background = '#fff';
    inputName.style.border = 'solid green 3px';
    inputLastName.style.background = '#fff';
    inputLastName.style.border = 'solid green 3px';
    inputMail.style.background = '#fff';
    inputMail.style.border = 'solid green 3px';
    inputPassword.style.background = '#fff';
    inputPassword.style.border = 'solid green 3px';
    let newName=inputName.value;
    let newLastName=inputLastName.value;
    let newEmail=inputMail.value;
    let newImage=inputImage.value;
    let newPassword=inputPassword.value;
    if (idTimeout != undefined && idTimeout != null) {
      clearTimeout(idTimeout);
    }
        async function updateUser(){
        return await fetch(`/api/usuarios/${inputUserId.value}`, {
          method: 'PUT',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({
            "nombre": newName,
            "apellido": newLastName,
            "email": newEmail,
            "imagen": newImage,
            "password": newPassword
             })
        }).then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
        }
        console.log(inputName.value);
        console.log(updateUser(),upUser());
             inputName.value = '';
             inputName.style.border = '';
             inputName.style.background = '#fff';
             inputLastName.value = '';
             inputLastName.style.border = '';
             inputLastName.style.background = '#fff';
             inputMail.value = '';
             inputMail.style.border = '';
             inputMail.style.background = '#fff';
             inputPassword.value = '';
             inputPassword.style.border = '';
             inputPassword.style.background = '#fff';
            Swal.fire('Se ha actualizado el usuario con éxito.', '', 'success'); 
    
  }
}//buttonActualizar
  );
  deleteButton.addEventListener('click',function(event){
    event.preventDefault();
    async function deleteUser(){
      return await fetch(`/api/usuarios/${inputUserId.value}`, {
        method: 'DELETE'})
      .then(response => response.json()) 
      .then(response => console.log(response )) 
    }
    console.log(deleteUser());
    inputName.value = '';
    inputName.style.border = '';
    inputName.style.background = '#fff';
    inputLastName.value = '';
    inputLastName.style.border = '';
    inputLastName.style.background = '#fff';
    inputMail.value = '';
    inputMail.style.border = '';
    inputMail.style.background = '#fff';
    inputPassword.value = '';
    inputPassword.style.border = '';
    inputPassword.style.background = '#fff';
   Swal.fire('Se ha eliminado el usuario con éxito.', '', 'success');
   setTimeout(() => {
    window.addEventListener('reload', function (event) {
      getUser();
      }); 
   }, 3000);
   
    });//buttonborrar

  window.addEventListener('load', function (event) {
    getUser();
    });