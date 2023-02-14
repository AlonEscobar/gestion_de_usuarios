let addButton = document.getElementById('addButton');
let idTimeout;
let usuariodb=[];
let datosUsuario = [];
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
  addButton.addEventListener('click', function (event) {
    event.preventDefault();
  let alertError = document.getElementById('alertError');
  let inputName = document.getElementById('name');
  let inputLastName=document.getElementById('lastName');
  let inputMail = document.getElementById('email');
  let inputImage = document.getElementById('image');
  let inputPassword = document.getElementById('password');
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
    usuariodb.email == inputMail.value||
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

//Verificar si el correo electrónico ya está registrado
if (usuariodb) {
  for (let i = 0; i < usuariodb.length; i++) {
    if (usuariodb[i].email === inputMail.value) {
      alertError.style.display = 'block';
      alertError.innerHTML +=
        '<br/> Este correo electrónico ya está registrado. Por favor, ingrese otro.';
      inputMail.focus();
      inputMail.select();
      inputMail.style.background = '#f8d7da';
      inputMail.style.border = 'solid red 3px';
   
      return false;
    }//validacion
  }//for
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
  console.log(inputMail.value);
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

    if (idTimeout != undefined && idTimeout != null) {
      clearTimeout(idTimeout);
    }
  
    async function addUser(){
        return await fetch('/api/usuarios/',{
          method: 'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({
            "nombre": inputName.value,
            "apellido": inputLastName.value,
            "email": inputMail.value,
            "imagen": inputImage.value,
            "password": inputPassword.value
             })  
        }).then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
        }
    
          console.log(addUser());
          console.clear();
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
            Swal.fire('Se ha creado el usuario con éxito.', '', 'success'); 
    
  }
}//button
  );
window.addEventListener('load', function (event) {
    getUser();
    });